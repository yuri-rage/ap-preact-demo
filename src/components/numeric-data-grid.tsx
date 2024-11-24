import { ColDef, ColDefField, Column, GridOptions } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { CopyIcon, FolderOpenIcon, DownloadIcon } from 'lucide-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

import { Signal, useSignal } from '@preact/signals';
import { useCallback, useMemo } from 'preact/hooks';

import { cn } from '@/lib/utils';

import { useTheme } from '@/components/theme-provider';
import { HelpIcon } from '@/components/ui/help-icon';
import { toast } from 'sonner';

interface NumericGridProps<T extends { [K in keyof T]: number }> {
    description?: string;
    className?: string;
    columns?: ColumnConfig<T>[];
    rows: Signal<T[]>;
    defaultPrecision?: number;
    title?: string;
    onDataChange?: (rows: T[]) => void;
}

export interface ColumnConfig<T> {
    field: keyof T;
    headerName?: string;
    precision?: number;
    width?: number;
    minWidth?: number;
    maxWidth?: number;
}

interface FocusedCell {
    rowIndex: number;
    column: string;
}

const DEFAULT_COLUMN_STYLE = {
    editable: true,
    sortable: false,
    headerClass: 'ag-custom-header dark:text-muted-foreground',
    cellStyle: { textAlign: 'right' },
    flex: 1,
    resizable: true,
} as const;

const createDefaultColumns = <T extends Record<string, number>>(data: T[]): ColumnConfig<T>[] => {
    if (!data.length) return [];
    const sampleRow = data[0];
    return Object.keys(sampleRow).map((key, index) => ({
        field: key as keyof T,
        headerName: `Column ${index + 1}`,
    }));
};

const createColumnDefs = <T extends Record<string, number>>(
    columns: ColumnConfig<T>[],
    defaultPrecision = 2
): ExtendedColDef<T>[] => {
    return columns.map((col) => ({
        ...DEFAULT_COLUMN_STYLE,
        field: String(col.field) as ColDefField<T>,
        headerName: col.headerName,
        context: {
            decimalPrecision: col.precision ?? defaultPrecision,
        },
        cellEditor: 'agNumberCellEditor',
        valueFormatter: (params) => {
            if (params.value == null) return '';
            const precision = params.column.getColDef().context?.decimalPrecision;
            return Number(params.value).toFixed(precision);
        },
        valueParser: (params) => {
            if (params.newValue === '') return 0;
            const num = parseFloat(params.newValue);
            return isNaN(num) ? 0 : num;
        },
    }));
};

interface ExtendedColDef<T> extends ColDef<T> {
    field: ColDefField<T>;
    context?: {
        decimalPrecision: number;
    };
}

// AG Grid does not use tailwindcss, so apply some custom variable-based styling
const getGridThemeStyles = (theme: string) => {
    return {
        '--ag-header-background-color':
            theme === 'dark'
                ? 'color-mix(in srgb, #000, #182230 66%)'
                : 'color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 25%)',
        '--ag-header-height': 'calc(var(--ag-font-size) + var(--ag-grid-size) * 4)',
        '--ag-header-column-separator-display': 'block',
        '--ag-header-column-separator-height': '100%',
        '--ag-header-column-separator-width': '2px',
        '--ag-header-column-resize-handle-display': 'none',
        '--ag-grid-size': '4px',
        '--ag-cell-horizontal-border': 'solid 1px var(--ag-border-color)',
    };
};

const processPastedText = (text: string): (number | undefined)[][] => {
    return text
        .split(/\r?\n|\r/)
        .map((row) =>
            row.split(/[,\t\s]+/).map((cell) => {
                const num = parseFloat(cell.trim());
                return isNaN(num) ? undefined : num;
            })
        )
        .filter((row) => row.some((val) => val != null));
};

const STYLES = {
    container: 'h-[347px] w-full',
    gridWrapper: (isDragging: boolean) =>
        cn(
            'relative h-full w-full rounded-lg border border-input',
            isDragging ? 'ring-2 ring-primary ring-offset-2' : ''
        ),
    grid: (theme: string) =>
        cn('w-full h-full', theme === 'dark' ? 'ag-theme-quartz-dark' : 'ag-theme-quartz'),
    headerBar: (theme: string) =>
        cn(
            'absolute left-0 right-0 top-0 flex h-8 items-center justify-between rounded-t-lg border-b border-input pl-4 pr-2 py-2 text-muted-foreground',
            theme === 'dark'
                ? 'bg-[color-mix(in_srgb,#000,#182230_66%)]'
                : 'bg-[color-mix(in_srgb,#fff,#000_25%)]'
        ),
    headerTitle: 'text-lg font-semibold',
    headerTools: 'flex gap-2 items-center',
    gridContent: 'pt-8 h-full',
    iconContainer: 'flex gap-2 items-center',
    dropOverlay: 'absolute inset-0 z-20 flex items-center justify-center rounded-lg bg-background/80',
    dropText: 'text-lg font-semibold',
} as const;

interface CellValueChangedEvent<T> {
    rowIndex: number;
    column: { getColId(): string };
    newValue: string | number;
    data: T;
}

interface CellFocusedEvent {
    rowIndex: number | null;
    column?: Column | string;
}

const handleFileSelect = async (
    file: File,
    onSuccess: (text: string) => void,
    onError: (message: string) => void
) => {
    if (!(file.type === 'text/plain' || file.name.endsWith('.txt') || file.name.endsWith('.csv'))) {
        onError('Invalid file type. Please use .txt or .csv files');
        return;
    }

    try {
        const text = await file.text();
        onSuccess(text);
    } catch (err) {
        onError(`Failed to read file: ${err}`);
        console.error('File processing error:', err);
    }
};

const downloadAsFile = (content: string, filename: string) => {
    try {
        // Create blob and trigger download without URL manipulation
        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        // Use createObjectURL but don't assign it to href
        const url = URL.createObjectURL(blob);

        // Trigger download programmatically
        const event = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true,
        });

        link.download = filename;
        link.href = url;
        link.dispatchEvent(event);

        // Clean up
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Download failed:', error);
        toast.error('Failed to download file');
    }
};

// format filename to kebab case
const formatFileName = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, '-');
};

export const NumericGrid = <T extends { [K in keyof T]: number }>({
    description,
    className,
    columns: columnsProp,
    rows,
    defaultPrecision = 2,
    title = 'Data',
    onDataChange,
}: NumericGridProps<T>) => {
    const { theme } = useTheme();
    const focusedCell = useSignal<FocusedCell | null>(null);
    const isDragging = useSignal<boolean>(false);

    const columns = useMemo(() => {
        return columnsProp ?? createDefaultColumns(rows.value);
    }, [columnsProp, rows.value]);

    const columnDefs = useMemo(() => {
        return createColumnDefs(columns, defaultPrecision);
    }, [columns, defaultPrecision]);

    const handleCellValueChanged = useCallback(
        (params: CellValueChangedEvent<T>) => {
            if (params.rowIndex === undefined) return;

            const updatedData = [...rows.value];
            const parsedValue = params.newValue === '' ? 0 : parseFloat(String(params.newValue));

            updatedData[params.rowIndex] = {
                ...updatedData[params.rowIndex],
                [params.column.getColId()]: parsedValue,
            } as T;

            rows.value = updatedData;
            onDataChange?.(updatedData);
        },
        [onDataChange]
    );

    const handleCellFocused = useCallback((params: CellFocusedEvent) => {
        if (params.rowIndex === null) {
            focusedCell.value = null;
            return;
        }

        const columnField = typeof params.column === 'string' ? params.column : params.column?.getColId?.();

        if (columnField) {
            focusedCell.value = {
                rowIndex: params.rowIndex,
                column: columnField,
            };
        }
    }, []);

    const gridProps = useMemo(
        () =>
            ({
                columnDefs,
                rowData: rows.value,
                onCellValueChanged: handleCellValueChanged,
                onCellFocused: handleCellFocused,
                enableCellTextSelection: true,
                suppressClickEdit: true,
                stopEditingWhenCellsLoseFocus: true,
                enterNavigatesVertically: true,
                enterNavigatesVerticallyAfterEdit: true,
                defaultColDef: {
                    ...DEFAULT_COLUMN_STYLE,
                    cellClass: 'cursor-cell',
                    suppressMovable: true,
                },
            }) satisfies GridOptions<T>,
        [rows.value, columnDefs, handleCellValueChanged, handleCellFocused]
    );

    const handleProcessDroppedFile = (text: string) => {
        if (!text.trim()) {
            toast.error('File is empty');
            return;
        }

        try {
            const processedData = processPastedText(text);
            if (processedData.length === 0) {
                toast.error('No valid data found in file');
                return;
            }

            const newRows = processedData.map((values) => {
                const newRow = {} as T;
                columns.forEach(({ field }) => {
                    (newRow[field] as number) = 0;
                });

                values.forEach((value, j) => {
                    if (j < columns.length) {
                        const field = columns[j].field;
                        (newRow[field] as number) = value ?? 0;
                    }
                });
                return newRow;
            });

            rows.value = newRows;
            onDataChange?.(newRows);
        } catch (error) {
            toast.error('Failed to process file data');
            console.error('file processing error:', error);
        }
    };

    const handleDrop = async (e: DragEvent) => {
        if (!e.dataTransfer?.types.includes('Files')) return;
        e.preventDefault();
        e.stopPropagation();
        isDragging.value = false;

        const files = Array.from(e.dataTransfer?.files || []);
        const textFile = files.find(
            (file) =>
                file.type === 'text/csv' ||
                file.type === 'text/plain' ||
                file.name.endsWith('.csv') ||
                file.name.endsWith('.txt')
        );

        if (!textFile) {
            toast.error('Invalid file type');
            return;
        }

        try {
            const text = await textFile.text();
            const fileName = textFile.name;
            handleProcessDroppedFile(text);
            toast.success(`Imported ${fileName}`);
        } catch (err) {
            toast.error(`Failed to read file: ${err}`);
        }
    };

    const formatGridDataForCopy = useCallback(
        (isCopyToClipboard: boolean = false) => {
            // For clipboard copy - use tab-separated values without headers
            if (isCopyToClipboard) {
                return rows.value
                    .map((row) =>
                        columns
                            .map((col) => {
                                const value = row[col.field];
                                const precision = col.precision ?? defaultPrecision;
                                return value != null ? value.toFixed(precision) : '';
                            })
                            .join('\t')
                    )
                    .join('\n');
            }

            // For file download - use CSV format with headers
            const headers = columns.map((col) => col.headerName || col.field).join(',');
            const data = rows.value
                .map((row) =>
                    columns
                        .map((col) => {
                            const value = row[col.field];
                            const precision = col.precision ?? defaultPrecision;
                            return value != null ? value.toFixed(precision) : '';
                        })
                        .join(',')
                )
                .join('\n');
            return `${headers}\n${data}`;
        },
        [rows.value, columns, defaultPrecision]
    );

    const handlePaste = (e: ClipboardEvent) => {
        e.preventDefault();
        const pastedData = e.clipboardData?.getData('text');
        if (!pastedData) return;

        const processedData = processPastedText(pastedData);
        if (processedData.length === 0) return;

        const startColumn = focusedCell.value?.column || columns[0].field;
        const startIndex = focusedCell.value?.rowIndex ?? rows.value.length;

        const columnOrder = columns.map((col) => col.field);
        const startColIndex = columnOrder.indexOf(startColumn as keyof T);

        const updatedData = [...rows.value];

        // initialize new rows with zeros
        const requiredLength = startIndex + processedData.length;
        while (updatedData.length < requiredLength) {
            const newRow = {} as T;
            columnOrder.forEach((field) => {
                (newRow[field] as number) = 0;
            });
            updatedData.push(newRow);
        }

        processedData.forEach((values, rowOffset) => {
            const rowIndex = startIndex + rowOffset;

            // ensure row exists with zeros
            if (!updatedData[rowIndex]) {
                updatedData[rowIndex] = {} as T;
                columnOrder.forEach((field) => {
                    (updatedData[rowIndex][field] as number) = 0;
                });
            }

            values.forEach((value, colOffset) => {
                const colIndex = (startColIndex + colOffset) % columnOrder.length;
                const field = columnOrder[colIndex];
                if (field) {
                    updatedData[rowIndex] = {
                        ...updatedData[rowIndex],
                        [field]: value ?? 0,
                    };
                }
            });
        });

        rows.value = updatedData;
        onDataChange?.(updatedData);
    };

    const handleCopy = useCallback(() => {
        const formattedData = formatGridDataForCopy(true);

        try {
            // Try using the clipboard API first
            if (navigator?.clipboard?.writeText) {
                navigator.clipboard
                    .writeText(formattedData)
                    .then(() => toast.success('Copied to clipboard'))
                    .catch(() => {
                        // Fallback to textarea method if clipboard API fails
                        fallbackCopy(formattedData);
                    });
                return;
            }

            // Use fallback if clipboard API is not available
            fallbackCopy(formattedData);
        } catch (err) {
            console.error('Copy failed:', err);
            toast.error('Failed to copy data');
        }
    }, [formatGridDataForCopy]);

    const fallbackCopy = (text: string) => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();

        try {
            document.execCommand('copy');
            toast.success('Copied to clipboard');
        } catch (err) {
            console.error('Fallback copy failed:', err);
            toast.error('Failed to copy data');
        } finally {
            document.body.removeChild(textarea);
        }
    };

    const handleDragOver = useCallback((e: DragEvent) => {
        if (!e.dataTransfer?.types.includes('Files')) return;
        e.preventDefault();
        e.stopPropagation();
        isDragging.value = true;
    }, []);

    const handleDragLeave = (e: DragEvent) => {
        if ((e.currentTarget as HTMLElement).contains(e.relatedTarget as Node)) return;
        isDragging.value = false;
    };

    const handleFileUpload = useCallback(
        (e: Event) => {
            const input = e.target as HTMLInputElement;
            const file = input.files?.[0];
            if (!file) return;

            handleFileSelect(
                file,
                (text) => {
                    try {
                        const processedData = processPastedText(text);
                        if (processedData.length === 0) {
                            toast.error('No valid data found in file');
                            return;
                        }

                        const newRows = processedData.map((values) => {
                            const newRow = {} as T;
                            columns.forEach(({ field }) => {
                                (newRow[field] as number) = 0;
                            });

                            values.forEach((value, j) => {
                                if (j < columns.length) {
                                    const field = columns[j].field;
                                    (newRow[field] as number) = value ?? 0;
                                }
                            });
                            return newRow;
                        });

                        rows.value = newRows;
                        onDataChange?.(newRows);
                        toast.success(`Imported data from ${file.name}`);
                    } catch (error) {
                        toast.error('Failed to process file data');
                        console.error('file processing error:', error);
                    }
                },
                (error) => toast.error(error)
            );

            // Reset the input
            input.value = '';
        },
        [columns, rows, onDataChange]
    );

    // memoize static styles object
    const gridThemeStyles = useMemo(() => getGridThemeStyles(theme), [theme]);

    return (
        <div className={cn(STYLES.container, className)}>
            <div className={STYLES.gridWrapper(isDragging.value)}>
                <div className={STYLES.headerBar(theme)}>
                    <span className={STYLES.headerTitle}>{title}</span>
                    <div className={STYLES.headerTools}>
                        <input
                            type='file'
                            id='numeric-file-upload'
                            className='hidden'
                            accept='.txt,.csv'
                            onChange={handleFileUpload}
                        />
                        <HelpIcon
                            icon={FolderOpenIcon}
                            help='Load data file'
                            onClick={() => document.getElementById('numeric-file-upload')?.click()}
                        />
                        <HelpIcon
                            icon={DownloadIcon}
                            help='Download data'
                            onClick={() =>
                                downloadAsFile(formatGridDataForCopy(false), `${formatFileName(title)}.csv`)
                            }
                        />
                        <HelpIcon icon={CopyIcon} help='Copy to clipboard' onClick={handleCopy} />
                        {description && <HelpIcon help={description} />}
                    </div>
                </div>
                <div className={STYLES.gridContent}>
                    <div
                        className={STYLES.grid(theme)}
                        style={gridThemeStyles}
                        onPaste={handlePaste}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        tabIndex={0}
                    >
                        {isDragging.value && (
                            <div className={STYLES.dropOverlay}>
                                <p className={STYLES.dropText}>Drop file to import data</p>
                            </div>
                        )}
                        <AgGridReact<T> {...gridProps} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NumericGrid;
