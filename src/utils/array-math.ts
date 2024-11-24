// Helpers for Array and complex maths

function complex_mul(C1: number[][], C2: number[][]) {
    const len = C1[0].length;
    let ret = [new Array(len), new Array(len)];
    for (let i = 0; i < len; i++) {
        const ac = C1[0][i] * C2[0][i];
        const bd = C1[1][i] * C2[1][i];
        const ad = C1[0][i] * C2[1][i];
        const bc = C1[1][i] * C2[0][i];
        ret[0][i] = ac - bd;
        ret[1][i] = ad + bc;
    }
    return ret;
}

function complex_div(C1: number[][], C2: number[][]) {
    const len = C1[0].length;
    let ret = [new Array(len), new Array(len)];
    for (let i = 0; i < len; i++) {
        const ac = C1[0][i] * C2[0][i];
        const bd = C1[1][i] * C2[1][i];
        const ad = C1[0][i] * C2[1][i];
        const bc = C1[1][i] * C2[0][i];
        const denominator = 1 / (C2[0][i] ** 2 + C2[1][i] ** 2);
        ret[0][i] = (ac + bd) * denominator;
        ret[1][i] = (bc - ad) * denominator;
    }
    return ret;
}

function complex_abs(C: number[][]) {
    const len = C[0].length;
    let ret = new Array(len);
    for (let i = 0; i < len; i++) {
        ret[i] = (C[0][i] ** 2 + C[1][i] ** 2) ** 0.5;
    }
    return ret;
}

function complex_inverse(C: number[][]) {
    const len = C[0].length;
    let ret = [new Array(len), new Array(len)];
    for (let i = 0; i < len; i++) {
        const denominator = 1 / (C[0][i] ** 2 + C[1][i] ** 2);
        ret[0][i] = C[0][i] * denominator;
        ret[1][i] = C[1][i] * -denominator;
    }
    return ret;
}

function complex_square(C: number[][]) {
    const len = C[0].length;
    let ret = [new Array(len), new Array(len)];
    for (let i = 0; i < len; i++) {
        ret[0][i] = C[0][i] ** 2 - C[1][i] ** 2;
        ret[1][i] = C[0][i] * C[1][i] * 2;
    }
    return ret;
}

function complex_phase(C: number[][]) {
    const len = C[0].length;
    let ret = new Array(len);
    for (let i = 0; i < len; i++) {
        ret[i] = Math.atan2(C[1][i], C[0][i]);
    }
    return ret;
}

function complex_conj(C: any[]) {
    return [C[0].slice(), array_scale(C[1], -1)];
}

function exp_jw(freq: number[], rate: number) {
    const scale = (2 * Math.PI) / rate;
    const len = freq.length;
    let ret = [new Array(len), new Array(len)];
    for (let i = 0; i < len; i++) {
        // e^(ic) = (cos c) + i(sin c)
        // no real component in jw
        const jw = freq[i] * scale;
        ret[0][i] = Math.cos(jw);
        ret[1][i] = Math.sin(jw);
    }
    return ret;
}

function array_max(A: number[], B: number[]) {
    const len = A.length;
    let ret = new Array(len);
    for (let i = 0; i < len; i++) {
        ret[i] = Math.max(A[i], B[i]);
    }
    return ret;
}

function array_min(A: number[], B: number[]) {
    const len = A.length;
    let ret = new Array(len);
    for (let i = 0; i < len; i++) {
        ret[i] = Math.min(A[i], B[i]);
    }
    return ret;
}

function array_scale(A: number[], scale: number) {
    const len = A.length;
    let ret = new Array(len);
    for (let i = 0; i < len; i++) {
        ret[i] = A[i] * scale;
    }
    return ret;
}

function array_inverse(A: number[]) {
    const len = A.length;
    let ret = new Array(len);
    for (let i = 0; i < len; i++) {
        ret[i] = 1 / A[i];
    }
    return ret;
}

function array_mul(A: number[], B: number[]) {
    const len = A.length;
    let ret = new Array(len);
    for (let i = 0; i < len; i++) {
        ret[i] = A[i] * B[i];
    }
    return ret;
}

function array_div(A: number[], B: number[]) {
    const len = A.length;
    let ret = new Array(len);
    for (let i = 0; i < len; i++) {
        ret[i] = A[i] / B[i];
    }
    return ret;
}

function array_offset(A: number[], offset: any) {
    const len = A.length;
    let ret = new Array(len);
    for (let i = 0; i < len; i++) {
        ret[i] = A[i] + offset;
    }
    return ret;
}

function array_add(A: number[], B: any[]) {
    const len = A.length;
    let ret = new Array(len);
    for (let i = 0; i < len; i++) {
        ret[i] = A[i] + B[i];
    }
    return ret;
}

function array_sub(A: number[], B: number[]) {
    const len = A.length;
    let ret = new Array(len);
    for (let i = 0; i < len; i++) {
        ret[i] = A[i] - B[i];
    }
    return ret;
}

function array_log10(A: number[]) {
    const len = A.length;
    let ret = new Array(len);
    for (let i = 0; i < len; i++) {
        ret[i] = Math.log10(A[i]);
    }
    return ret;
}

function array_all_equal(A: number[], val: any) {
    const len = A.length;
    for (let i = 0; i < len; i++) {
        if (A[i] != val) {
            return false;
        }
    }
    return true;
}

function array_all_NaN(A: number[]) {
    const len = A.length;
    for (let i = 0; i < len; i++) {
        if (!isNaN(A[i])) {
            return false;
        }
    }
    return true;
}

function array_abs(A: number[]) {
    const len = A.length;
    let ret = new Array(len);
    for (let i = 0; i < len; i++) {
        ret[i] = Math.abs(A[i]);
    }
    return ret;
}

function array_sqrt(A: number[]) {
    const len = A.length;
    let ret = new Array(len);
    for (let i = 0; i < len; i++) {
        ret[i] = Math.sqrt(A[i]);
    }
    return ret;
}

function array_sum(A: number[]) {
    const len = A.length;
    let ret = 0;
    for (let i = 0; i < len; i++) {
        ret += A[i];
    }
    return ret;
}

function array_mean(A: number[]) {
    return array_sum(A) / A.length;
}

// Return a range, including start and end points
function array_from_range(start: number, end: number, step: number) {
    const len = Math.floor((end - start) / step) + 1;
    let val = start;
    let ret = new Array(len);
    for (let i = 0; i < len; i++) {
        ret[i] = val;
        val += step;
    }
    return ret;
}

// Linear interpolation between arrays
function linear_interp(values: number[], index: number[], query_index: number[]) {
    const len = query_index.length;
    let ret = new Array(len);

    const last_value_index = index.length - 1;
    let interpolate_index = 0;
    for (let i = 0; i < len; i++) {
        if (query_index[i] <= index[0]) {
            // Before start
            ret[i] = values[0];
            continue;
        }
        if (query_index[i] >= index[last_value_index]) {
            // After end
            ret[i] = values[last_value_index];
            continue;
        }

        // increment index until there is a point after the target
        for (interpolate_index; interpolate_index < last_value_index; interpolate_index++) {
            if (query_index[i] < index[interpolate_index + 1]) {
                const ratio =
                    (query_index[i] - index[interpolate_index]) /
                    (index[interpolate_index + 1] - index[interpolate_index]);
                ret[i] =
                    values[interpolate_index] +
                    (values[interpolate_index + 1] - values[interpolate_index]) * ratio;
                break;
            }
        }
    }
    return ret;
}

export {
    complex_mul,
    complex_div,
    complex_abs,
    complex_inverse,
    complex_square,
    complex_phase,
    complex_conj,
    exp_jw,
    array_max,
    array_min,
    array_scale,
    array_inverse,
    array_mul,
    array_div,
    array_offset,
    array_add,
    array_sub,
    array_log10,
    array_all_equal,
    array_all_NaN,
    array_abs,
    array_sqrt,
    array_sum,
    array_mean,
    array_from_range,
    linear_interp,
};
