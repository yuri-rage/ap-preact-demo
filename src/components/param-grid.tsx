import { ColDef, GridOptions } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { CopyIcon, ChevronUpIcon, ChevronDownIcon, FolderOpenIcon, DownloadIcon } from 'lucide-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

import { Signal, useSignal, signal } from '@preact/signals';
import { useCallback, useMemo, useEffect } from 'preact/hooks';

import { cn } from '@/lib/utils';

import { useTheme } from '@/components/theme-provider';
import { BitmaskDialog } from '@/components/ui/bitmask-dialog';
import { HelpIcon } from '@/components/ui/help-icon';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { toast } from 'sonner';

const DEFAULT_COLUMN_STYLE = {
    sortable: false,
    headerClass: 'ag-custom-header dark:text-muted-foreground',
    suppressMovable: true,
    cellStyle: {
        padding: '2px 6px',
        display: 'flex',
        alignItems: 'center',
    },
} as const;

export interface ParamValue {
    Name: string;
    Value: number | string;
    Units?: string;
    Options?: Record<string, string>;
    Bitmask?: Record<string, string>;
    Desc?: string;
    Range?: {
        high: number;
        low: number;
    };
    ReadOnly?: boolean;
    Constrained?: boolean;
}

interface ParamGridProps {
    description?: string;
    className?: string;
    paramConfig: Signal<ParamValue[]>;
    params?: Signal<Record<string, number>>;
    isLoading?: boolean;
    title?: string;
    variant?: 'default' | 'narrow';
    suppressToolbar?: boolean;
}

interface ParamDefinition {
    Description: string;
    DisplayName: string;
    Units?: string;
    Range?: {
        high: string;
        low: string;
    };
    Values?: Record<string, string>;
    Bitmask?: Record<string, string>;
    ReadOnly?: 'True' | 'False';
    User?: string;
    Increment?: string;
    RebootRequired?: string;
}

export const convertParamToGridFormat = async (
    key: string,
    currentValue?: number,
    forceReadOnly: boolean = false,
    forceConstrained: boolean = true
) => {
    const [prefix] = key.split('_');

    try {
        const params = await import('@/utils/params');
        const paramGroup = params[prefix as keyof typeof params] as Record<string, ParamDefinition>;

        if (!paramGroup) {
            console.warn(`Parameter group not found for prefix: ${prefix}`);
            return null;
        }

        const paramDef = paramGroup[key];
        if (!paramDef) {
            console.warn(`Parameter definition not found for ${key}`);
            return null;
        }

        return {
            Name: key,
            Value: currentValue ?? 0,
            Units: paramDef.Units,
            Desc: paramDef.Description,
            Range: paramDef.Range
                ? {
                      low: parseFloat(paramDef.Range.low),
                      high: parseFloat(paramDef.Range.high),
                  }
                : undefined,
            Options: paramDef.Values,
            Bitmask: paramDef.Bitmask,
            ReadOnly: forceReadOnly || paramDef.ReadOnly === 'True',
            Constrained: forceConstrained,
        };
    } catch (error) {
        console.error(`Failed to load parameter group for ${prefix}:`, error);
        return null;
    }
};

const getDefaultIncrement = (range?: { low: number; high: number }) => {
    if (!range) return 0.1; // default if no range

    const span = range.high - range.low;
    if (span <= 2) return 0.01;
    if (span <= 10) return 0.1;
    return 1;
};

const createColumnDefs = (variant: 'default' | 'narrow' = 'default'): ColDef[] => {
    const columns: ColDef[] = [
        {
            ...DEFAULT_COLUMN_STYLE,
            field: 'Name',
            headerName: 'Name',
            editable: false,
            width: variant === 'default' ? 150 : undefined,
            flex: variant === 'narrow' ? 1 : undefined,
            suppressSizeToFit: variant === 'default',
        },
        {
            ...DEFAULT_COLUMN_STYLE,
            field: 'Value',
            headerName: 'Value',
            editable: (params) => !params.data.ReadOnly,
            width: variant === 'default' ? 100 : undefined,
            flex: variant === 'narrow' ? 1 : undefined,
            suppressSizeToFit: variant === 'default',
            cellEditor: 'agNumberCellEditor',
            cellStyle: {
                ...DEFAULT_COLUMN_STYLE.cellStyle,
                justifyContent: 'flex-end',
            },
            cellRenderer: (params: any) => {
                if (params.data.ReadOnly) {
                    return (
                        <div className='flex w-full items-center justify-end gap-1 pr-[20px]'>
                            <span className='text-muted-foreground'>{params.value}</span>
                        </div>
                    );
                }

                if (params.data.Bitmask || params.data.Options) {
                    return (
                        <div className='flex w-full items-center justify-end gap-1 pr-[20px]'>
                            <span>{params.value}</span>
                        </div>
                    );
                }

                const validateAndSetValue = (newValue: number) => {
                    const { Range, Constrained } = params.data;
                    if (!Range || !Constrained) {
                        params.setValue(newValue);
                        return;
                    }

                    if (Constrained && (newValue < Range.low || newValue > Range.high)) {
                        return;
                    }
                    params.setValue(newValue);
                };

                const increment = () => {
                    const step = getDefaultIncrement(params.data.Range);
                    const precision = step.toString().split('.')[1]?.length || 0;
                    const newValue =
                        Math.round((parseFloat(params.value) + step) * 10 ** precision) / 10 ** precision;
                    validateAndSetValue(newValue);
                };

                const decrement = () => {
                    const step = getDefaultIncrement(params.data.Range);
                    const precision = step.toString().split('.')[1]?.length || 0;
                    const newValue =
                        Math.round((parseFloat(params.value) - step) * 10 ** precision) / 10 ** precision;
                    validateAndSetValue(newValue);
                };

                return (
                    <div className='flex w-full items-center justify-end gap-1'>
                        <span>{params.value}</span>
                        <div className='flex flex-col'>
                            <button
                                onClick={increment}
                                className='rounded-sm p-0.5 hover:bg-accent'
                                tabIndex={-1}
                            >
                                <ChevronUpIcon className='h-3 w-3' />
                            </button>
                            <button
                                onClick={decrement}
                                className='rounded-sm p-0.5 hover:bg-accent'
                                tabIndex={-1}
                            >
                                <ChevronDownIcon className='h-3 w-3' />
                            </button>
                        </div>
                    </div>
                );
            },
            valueParser: (params) => {
                const { Range, Constrained } = params.data;
                if (!Range || !Constrained) return params.newValue;

                const num = parseFloat(params.newValue);
                if (isNaN(num)) return params.oldValue;

                if (Constrained && (num < Range.low || num > Range.high)) {
                    return params.oldValue;
                }
                return num;
            },
        },
        {
            ...DEFAULT_COLUMN_STYLE,
            field: 'Units',
            headerName: 'Units',
            editable: false,
            width: variant === 'default' ? 80 : undefined,
            flex: variant === 'narrow' ? 1 : undefined,
            suppressSizeToFit: variant === 'default',
            cellStyle: {
                ...DEFAULT_COLUMN_STYLE.cellStyle,
                justifyContent: 'center',
            },
        },
        {
            ...DEFAULT_COLUMN_STYLE,
            field: 'Options',
            headerName: 'Options',
            editable: false,
            width: variant === 'default' ? 150 : undefined,
            flex: variant === 'narrow' ? 1 : undefined,
            suppressSizeToFit: variant === 'default',
            cellRenderer: (params: any) => {
                const { data } = params;
                if (!data) return '';

                if (data.Bitmask) {
                    return (
                        <div className='cursor-pointer text-primary hover:underline'>
                            Click to set bitmask
                        </div>
                    );
                }

                if (data.Options && !data.ReadOnly) {
                    return (
                        <select
                            className='w-full cursor-pointer border-none bg-transparent text-primary focus:outline-none [&>option]:bg-white dark:[&>option]:bg-[var(--ag-background-color)]'
                            value={params.data.Value}
                            onChange={(e) => {
                                const newValue = parseFloat(e.currentTarget.value);
                                params.node.setDataValue('Value', newValue);
                            }}
                        >
                            {Object.entries(data.Options).map(([value, label]) => (
                                <option key={value} value={value} className='text-primary'>
                                    {`${value}: ${label}`}
                                </option>
                            ))}
                        </select>
                    );
                }

                if (data.Range) {
                    return `${data.Range.low} to ${data.Range.high}`;
                }

                return '';
            },
        },
    ];

    if (variant === 'default') {
        columns.push({
            ...DEFAULT_COLUMN_STYLE,
            field: 'Desc',
            headerName: 'Description',
            editable: false,
            flex: 1,
            minWidth: 200,
            suppressSizeToFit: false,
            wrapText: true,
            autoHeight: false,
            cellStyle: {
                padding: '2px 6px',
                wordBreak: 'break-word',
                fontSize: '0.75rem',
                lineHeight: '1rem',
                display: 'flex',
                alignItems: 'center',
                maxHeight: `${ROW_HEIGHT}px`,
                overflow: 'hidden',
            },
        });
    }

    return columns;
};

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
        '--ag-header-column-separator-width': '1px',
        '--ag-header-column-resize-handle-display': 'none',
        '--ag-grid-size': '4px',
        '--ag-cell-horizontal-border': 'solid 1px var(--ag-border-color)',
        '--ag-borders': 'none',
        '--ag-border-radius': '0',
        '--ag-row-border-radius': '0',
        '--ag-cell-border-radius': '0',
        '--ag-header-border-radius': '0',
        '--ag-header-cell-border-radius': '0',
        '--ag-header-cell-hover-border-radius': '0',
        '--ag-header-cell-moving-border-radius': '0',
        '--ag-header-column-border-radius': '0',
        '--ag-header-column-separator-border-radius': '0',
        '--ag-header-column-resize-handle-border-radius': '0',
        '--ag-column-select-header-border-radius': '0',
        '--ag-selected-row-border-radius': '0',
        '--ag-chip-border-radius': '0',
        '--ag-card-border-radius': '0',
        '--ag-header-column-resize-handle-height': '100%',
        '--ag-cell-horizontal-padding': '6px',
    };
};

const STYLES = {
    gridWrapper: (isDragging: boolean) =>
        cn(
            'relative w-full h-full rounded-lg border border-input',
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
} as const;

const LoadingOverlay = () => (
    <div className='absolute inset-0 z-20 flex items-center justify-center rounded-lg bg-background/80'>
        <p className='text-lg font-medium'>Loading parameters...</p>
    </div>
);

const useBitmaskDialog = () => {
    const isOpen = useSignal(false);
    const selectedParam = useSignal<ParamValue | null>(null);
    const gridApi = useSignal<any>(null);

    const openDialog = useCallback((param: ParamValue) => {
        selectedParam.value = param;
        isOpen.value = true;
    }, []);

    const handleValueChange = useCallback((newValue: number) => {
        if (!selectedParam.value) return;

        selectedParam.value = { ...selectedParam.value, Value: newValue };

        if (gridApi.value) {
            const rowNode = gridApi.value.getDisplayedRowAtIndex(
                gridApi.value.getRowNode(selectedParam.value.Name)?.rowIndex
            );
            if (rowNode) {
                rowNode.setDataValue('Value', newValue);
            }
        }
    }, []);

    return {
        isOpen,
        setIsOpen: (value: boolean) => (isOpen.value = value),
        selectedParam,
        openDialog,
        handleValueChange,
        setGridApi: (api: any) => (gridApi.value = api),
    };
};

const ROW_HEIGHT = 40;
const HEADER_HEIGHT = 32;
const TITLEBAR_HEIGHT = 32;
const MIN_ROWS = 3;
const MAX_ROWS = 15;
const BORDER_BUFFER = 1;

const processParamText = (text: string): Record<string, number> => {
    const params: Record<string, number> = {};

    text.split(/\r?\n/)
        .map((line) => line.trim())
        .filter((line) => line.length > 0)
        .forEach((line) => {
            const [name, valueStr] = line.split(',').map((s) => s.trim());
            if (name && valueStr) {
                const value = parseFloat(valueStr);
                if (!isNaN(value)) {
                    params[name] = value;
                }
            }
        });

    return params;
};

const handleFileSelect = async (
    file: File,
    onSuccess: (values: Record<string, number>) => void,
    onError: (message: string) => void
) => {
    if (!file.name.endsWith('.txt') && !file.name.endsWith('.parm') && !file.name.endsWith('.param')) {
        onError('Invalid file type. Please use .txt, .parm, or .param files');
        return;
    }

    try {
        const text = await file.text();
        const paramValues = processParamText(text);
        onSuccess(paramValues);
    } catch (err) {
        onError(`Failed to read file: ${err}`);
        console.error('File processing error:', err);
    }
};

const downloadAsFile = (content: string, filename: string) => {
    try {
        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);

        const event = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true,
        });

        link.download = filename;
        link.href = url;
        link.dispatchEvent(event);

        URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Download failed:', error);
        toast.error('Failed to download file');
    }
};

const formatFileName = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, '-');
};

const TooltipRow = ({ data }: { data: ParamValue }) => {
    return (
        <TooltipProvider delayDuration={300}>
            <Tooltip>
                <TooltipTrigger className='relative flex h-full w-full items-center'>
                    {data.Name}
                </TooltipTrigger>
                <TooltipContent className='max-w-[300px]'>
                    <p className='text-sm'>{data.Desc}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

// helper function to create a proxy for the params signal
// this allows easy use of the params signal in components:
// const params =  createParamsProxy();
// params.value.MOT_PWM_MIN += 1; // assuming MOT_PWM_MIN exists in the grid
const createParamsProxy = (params: Signal<Record<string, number>>) => {
    return new Proxy(params, {
        get(target, prop) {
            if (prop === 'value') {
                return new Proxy(target.value, {
                    get(obj, key: string) {
                        return obj[key];
                    },
                    set(obj, key: string, value) {
                        const newValues = { ...obj, [key]: value };
                        params.value = newValues;
                        return true;
                    },
                });
            }
            return target[prop as keyof typeof target];
        },
    });
};

export const ParamGrid = ({
    description,
    className,
    paramConfig,
    params,
    isLoading,
    title = 'Parameters',
    variant = 'default',
    suppressToolbar = false,
}: ParamGridProps) => {
    const { theme } = useTheme();
    const isDragging = useSignal(false);
    const bitmaskDialog = useBitmaskDialog();

    // create proxied params if provided
    const proxiedParams = useMemo(() => {
        if (!params) return undefined;
        return createParamsProxy(params);
    }, [params]);

    const columnDefs = useMemo(() => {
        const cols = createColumnDefs(variant);

        if (variant === 'narrow') {
            const nameCol = cols.find((col) => col.field === 'Name');
            if (nameCol) {
                nameCol.cellRenderer = TooltipRow;
            }
        }

        const optionsCol = cols.find((col) => col.field === 'Options');
        if (optionsCol) {
            optionsCol.onCellClicked = (params: any) => {
                if (params.data.Bitmask) {
                    bitmaskDialog.openDialog(params.data);
                }
            };
        }
        return cols;
    }, [bitmaskDialog.openDialog, variant]);

    const handleCellValueChanged = useCallback(
        (event: any) => {
            if (!event.data) return;

            paramConfig.value = paramConfig.value.map((param) =>
                param.Name === event.data.Name ? { ...param, Value: event.newValue } : param
            );

            if (proxiedParams) {
                proxiedParams.value = {
                    ...proxiedParams.value,
                    [event.data.Name]: Number(event.newValue),
                };
            }
        },
        [paramConfig, proxiedParams]
    );

    const gridProps = useMemo(
        () =>
            ({
                columnDefs,
                rowData: paramConfig.value,
                onCellValueChanged: handleCellValueChanged,
                enableCellTextSelection: true,
                suppressClickEdit: true,
                stopEditingWhenCellsLoseFocus: true,
                getRowId: (params: { data: ParamValue }) => params.data.Name,
                defaultColDef: {
                    ...DEFAULT_COLUMN_STYLE,
                    cellClass: 'cursor-cell',
                    autoHeight: false,
                    wrapText: false,
                    resizable: false,
                    suppressSizeToFit: true,
                },
                suppressRowTransform: true,
                suppressAutoSize: true,
                suppressColumnVirtualisation: true,
                onGridReady: (params) => {
                    bitmaskDialog.setGridApi(params.api);
                },
                onGridSizeChanged: (params) => {},
                rowHeight: ROW_HEIGHT,
            }) satisfies GridOptions,
        [paramConfig.value, columnDefs, handleCellValueChanged, bitmaskDialog.setGridApi]
    );

    const formatGridDataForCopy = useCallback(() => {
        return paramConfig.value.map((param) => `${param.Name},${param.Value}`).join('\n');
    }, [paramConfig.value]);

    const handleCopy = useCallback(() => {
        const formattedData = formatGridDataForCopy();

        try {
            // try using the clipboard API first
            if (navigator?.clipboard?.writeText) {
                navigator.clipboard
                    .writeText(formattedData)
                    .then(() => toast.success('Copied to clipboard'))
                    .catch(() => {
                        // fallback to textarea method if clipboard API fails
                        fallbackCopy(formattedData);
                    });
                return;
            }

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

    // memoize static styles object
    const gridThemeStyles = useMemo(() => getGridThemeStyles(theme), [theme]);

    // calculate grid height based on content
    const gridHeight = useMemo(() => {
        const rowCount = Math.max(MIN_ROWS, Math.min(MAX_ROWS, paramConfig.value.length));
        return `${rowCount * ROW_HEIGHT + HEADER_HEIGHT + TITLEBAR_HEIGHT + BORDER_BUFFER}px`;
    }, [paramConfig.value.length]);

    const handleDragOver = useCallback(
        (e: DragEvent) => {
            if (suppressToolbar || !e.dataTransfer?.types.includes('Files')) return;
            e.preventDefault();
            e.stopPropagation();
            isDragging.value = true;
        },
        [suppressToolbar]
    );

    const handleDragLeave = useCallback(
        (e: DragEvent) => {
            if (suppressToolbar) return;
            if ((e.currentTarget as HTMLElement).contains(e.relatedTarget as Node)) return;
            isDragging.value = false;
        },
        [suppressToolbar]
    );

    const handleDrop = useCallback(
        async (e: DragEvent) => {
            if (suppressToolbar || !e.dataTransfer?.types.includes('Files')) return;
            e.preventDefault();
            e.stopPropagation();
            isDragging.value = false;

            const files = Array.from(e.dataTransfer?.files || []);
            const textFile = files.find(
                (file) =>
                    file.type === 'text/plain' ||
                    file.name.endsWith('.txt') ||
                    file.name.endsWith('.parm') ||
                    file.name.endsWith('.param')
            );

            if (!textFile) {
                toast.error('Invalid file type. Please use .txt, .parm, or .param files');
                return;
            }

            try {
                const text = await textFile.text();
                const paramValues = processParamText(text);

                const updatedParams = paramConfig.value.map((param) => {
                    if (param.Name in paramValues) {
                        return { ...param, Value: paramValues[param.Name] };
                    }
                    return param;
                });

                paramConfig.value = updatedParams;

                // Update the proxied params if available
                if (proxiedParams) {
                    proxiedParams.value = Object.fromEntries(
                        updatedParams.map((param) => [param.Name, Number(param.Value)])
                    );
                }

                toast.success(`Imported parameters from ${textFile.name}`);
            } catch (err) {
                toast.error(`Failed to read file: ${err}`);
                console.error('File processing error:', err);
            }
        },
        [suppressToolbar, paramConfig, proxiedParams]
    );

    const handleFileUpload = useCallback(
        (e: Event) => {
            const input = e.target as HTMLInputElement;
            const file = input.files?.[0];
            if (!file) return;

            handleFileSelect(
                file,
                (paramValues) => {
                    const updatedParams = paramConfig.value.map((param) => {
                        if (param.Name in paramValues) {
                            return { ...param, Value: paramValues[param.Name] };
                        }
                        return param;
                    });

                    paramConfig.value = updatedParams;

                    // Update the proxied params if available
                    if (proxiedParams) {
                        proxiedParams.value = Object.fromEntries(
                            updatedParams.map((param) => [param.Name, Number(param.Value)])
                        );
                    }

                    toast.success(`Imported parameters from ${file.name}`);
                },
                (error) => toast.error(error)
            );

            input.value = '';
        },
        [paramConfig, proxiedParams]
    );

    // Add effect to keep paramConfig and params in sync
    useEffect(() => {
        if (!proxiedParams) return;

        const handleParamsChange = () => {
            paramConfig.value = paramConfig.value.map((param) => ({
                ...param,
                Value: proxiedParams.value[param.Name] ?? param.Value,
            }));
        };

        // Set up initial values
        handleParamsChange();

        // Subscribe to params changes
        return proxiedParams.subscribe(handleParamsChange);
    }, [paramConfig, proxiedParams]);

    return (
        <>
            <div className={cn('relative w-full', className)} style={{ height: gridHeight }}>
                <div className={STYLES.gridWrapper(isDragging.value)}>
                    <div className={STYLES.headerBar(theme)}>
                        <span className={STYLES.headerTitle}>{title}</span>
                        <div className={STYLES.headerTools}>
                            {!suppressToolbar && (
                                <>
                                    <input
                                        type='file'
                                        id='param-file-upload'
                                        className='hidden'
                                        accept='.txt,.parm,.param'
                                        onChange={handleFileUpload}
                                    />
                                    <HelpIcon
                                        icon={FolderOpenIcon}
                                        help='Load parameter file'
                                        onClick={() => document.getElementById('param-file-upload')?.click()}
                                    />
                                    <HelpIcon
                                        icon={DownloadIcon}
                                        help='Download parameters'
                                        onClick={() =>
                                            downloadAsFile(
                                                formatGridDataForCopy(),
                                                `${formatFileName(title)}.param`
                                            )
                                        }
                                    />
                                    <HelpIcon icon={CopyIcon} help='Copy to clipboard' onClick={handleCopy} />
                                </>
                            )}
                            {description && <HelpIcon help={description} />}
                        </div>
                    </div>
                    <div
                        className={STYLES.gridContent}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        <div className={STYLES.grid(theme)} style={gridThemeStyles}>
                            {isLoading && <LoadingOverlay />}
                            {isDragging.value && (
                                <div className='absolute inset-0 z-20 flex items-center justify-center rounded-lg bg-background/80'>
                                    <p className='text-lg font-medium'>Drop file to import parameters</p>
                                </div>
                            )}
                            <AgGridReact {...gridProps} />
                        </div>
                    </div>
                </div>
            </div>
            <BitmaskDialog
                open={bitmaskDialog.isOpen.value}
                onOpenChange={bitmaskDialog.setIsOpen}
                title={bitmaskDialog.selectedParam.value?.Name ?? ''}
                options={bitmaskDialog.selectedParam.value?.Bitmask ?? {}}
                value={Number(bitmaskDialog.selectedParam.value?.Value ?? 0)}
                onChange={bitmaskDialog.handleValueChange}
            />
        </>
    );
};

export const loadParams = async (
    paramKeys: string[],
    initialValues?: Record<string, number>,
    forceReadOnlyStates?: Record<string, boolean>,
    forceConstrainedStates?: Record<string, boolean>
): Promise<ParamValue[]> => {
    const results = await Promise.all(
        paramKeys.map((key) =>
            convertParamToGridFormat(
                key,
                initialValues?.[key],
                forceReadOnlyStates?.[key] ?? false,
                forceConstrainedStates?.[key] ?? true
            )
        )
    );

    return results.filter((p): p is NonNullable<typeof p> => p !== null);
};

// Export the proxy creator for use in stores
export const createParamSignal = () => {
    const paramSignal = signal<Record<string, number>>({});
    return createParamsProxy(paramSignal);
};

export const initializeParamSignal = (paramConfig: ParamValue[]) => {
    return Object.fromEntries(paramConfig.map((param) => [param.Name, Number(param.Value)]));
};

export default ParamGrid;
