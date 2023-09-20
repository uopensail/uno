import moment from "moment";
import assert from "assert";
import * as types from "./types.js"

export function add(x, y) {
    return x + y;
}

export function sub(x, y) {
    return x - y;
}

export function mul(x, y) {
    return x * y;
}

export function div(x, y) {
    assert(y !== 0, "division by zero");
    return x / y;
}

export function mod(x, y) {
    assert(y !== 0, "division by zero");
    return x % y;
}

export function sigmoid(x) {
    return Math.exp(-x) / (1.0 + Math.exp(-x));
}

export function min(x, y) {
    return Math.min(x, y);
}

export function max(x, y) {
    return Math.max(x, y);
}

// timestamp for second
export function from_unixtime(timestamp) {
    return moment(timestamp * 1000).format("YYYY-MM-DD hh:mm:ss")
}

export function unix_timestamp(s, format) {
    let now = moment(s, format);
    let date = now.toDate();
    return date.getTime() / 1000;
}

export function date_add(day, n) {
    let date = moment(day).toDate();
    return from_unixtime(date.getTime() / 1000 + n * 86400)
}

export function date_sub(day, n) {
    let date = moment(day).toDate();
    return from_unixtime(date.getTime() / 1000 - n * 86400)
}

export function date_diff(a, b) {
    let date1 = moment(a).toDate();
    let date2 = moment(b).toDate();
    return Math.floor((date1.getTime() - date2.getTime()) / 1000 / 86400);
}


export function reverse(str) {
    return str.split("").reverse().join("");
}

export function upper(str) {
    return str.toUpperCase();
}

export function lower(str) {
    return str.toLowerCase();
}

export function substr(str, start, len) {
    return str.substring(start, len);
}

export function concat(str1, str2) {
    return str1 + str2;
}


export function year() {
    return moment().format('YYYY');
}



export function month() {
    return moment().format('MM');
}

export function day() {
    return moment().format('DD');
}

export function hour() {
    return moment().format('hh');
}

export function minute() {
    return moment().format('mm');
}


export function second() {
    return moment().format('ss');
}

export const function_io_types = {
    "+": {
        "in": [types.DataType.kFloat32, types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },
    "-": {
        "in": [types.DataType.kFloat32, types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },
    "*": {
        "in": [types.DataType.kFloat32, types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },
    "/": {
        "in": [types.DataType.kFloat32, types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },
    "%": {
        "in": [types.DataType.kInt64, types.DataType.kInt64],
        "out": [types.DataType.kInt64]
    },
    "mini": {
        "in": [types.DataType.kInt64, types.DataType.kInt64],
        "out": [types.DataType.kInt64]
    },
    "minf": {
        "in": [types.DataType.kFloat32, types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },
    "min": {
        "in": [types.DataType.kFloat32, types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },
    "maxi": {
        "in": [types.DataType.kInt64, types.DataType.kInt64],
        "out": [types.DataType.kInt64]
    },
    "maxf": {
        "in": [types.DataType.kFloat32, types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },
    "max": {
        "in": [types.DataType.kFloat32, types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },
    "addi": {
        "in": [types.DataType.kInt64, types.DataType.kInt64],
        "out": [types.DataType.kInt64]
    },
    "addf": {
        "in": [types.DataType.kFloat32, types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },
    "subi": {
        "in": [types.DataType.kInt64, types.DataType.kInt64],
        "out": [types.DataType.kInt64]
    },
    "subf": {
        "in": [types.DataType.kFloat32, types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },
    "muli": {
        "in": [types.DataType.kInt64, types.DataType.kInt64],
        "out": [types.DataType.kInt64]
    },
    "mulf": {
        "in": [types.DataType.kFloat32, types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },
    "divi": {
        "in": [types.DataType.kInt64, types.DataType.kInt64],
        "out": [types.DataType.kInt64]
    },
    "divf": {
        "in": [types.DataType.kFloat32, types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },
    "mod": {
        "in": [types.DataType.kInt64, types.DataType.kInt64],
        "out": [types.DataType.kInt64]
    },
    "pow": {
        "in": [types.DataType.kFloat32, types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },
    "round": {
        "in": [types.DataType.kFloat32],
        "out": [types.DataType.kInt64]
    },
    "floor": {
        "in": [types.DataType.kFloat32],
        "out": [types.DataType.kInt64]
    },
    "ceil": {
        "in": [types.DataType.kFloat32],
        "out": [types.DataType.kInt64]
    },
    "log": {
        "in": [types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },
    "exp": {
        "in": [types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },
    "log10": {
        "in": [types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },
    "log2": {
        "in": [types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },
    "sqrt": {
        "in": [types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },
    "abs": {
        "in": [types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },
    "absf": {
        "in": [types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },
    "absi": {
        "in": [types.DataType.kInt64],
        "out": [types.DataType.kInt64]
    },
    "sin": {
        "in": [types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },
    "asin": {
        "in": [types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },
    "sinh": {
        "in": [types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },
    "asinh": {
        "in": [types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },
    "cos": {
        "in": [types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },
    "acos": {
        "in": [types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },
    "cosh": {
        "in": [types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },
    "acosh": {
        "in": [types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },
    "tanh": {
        "in": [types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },
    "atan": {
        "in": [types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },
    "tanh": {
        "in": [types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },
    "atanh": {
        "in": [types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },
    "sigmoid": {
        "in": [types.DataType.kFloat32],
        "out": [types.DataType.kFloat32]
    },

    "year": {
        "in": [],
        "out": [types.DataType.kString]
    },
    "month": {
        "in": [],
        "out": [types.DataType.kString]
    },
    "day": {
        "in": [],
        "out": [types.DataType.kString]
    },
    "date": {
        "in": [],
        "out": [types.DataType.kString]
    },
    "hour": {
        "in": [],
        "out": [types.DataType.kString]
    },
    "minute": {
        "in": [],
        "out": [types.DataType.kString]
    },
    "second": {
        "in": [],
        "out": [types.DataType.kString]
    },
    "now": {
        "in": [],
        "out": [types.DataType.kInt64]
    },

    "from_unixtime": {
        "in": [types.DataType.kInt64, types.DataType.kString],
        "out": [types.DataType.kString]
    },

    "unix_timestamp": {
        "in": [types.DataType.kString, types.DataType.kString],
        "out": [types.DataType.kInt64]
    },
    "date_add": {
        "in": [types.DataType.kString, types.DataType.kInt64],
        "out": [types.DataType.kString]
    },
    "date_sub": {
        "in": [types.DataType.kString, types.DataType.kInt64],
        "out": [types.DataType.kString]
    },
    "date_diff": {
        "in": [types.DataType.kString, types.DataType.kString],
        "out": [types.DataType.kInt64]
    },
    "reverse": {
        "in": [types.DataType.kString],
        "out": [types.DataType.kString]
    },
    "upper": {
        "in": [types.DataType.kString],
        "out": [types.DataType.kString]
    },
    "lower": {
        "in": [types.DataType.kString],
        "out": [types.DataType.kString]
    },
    "substr": {
        "in": [types.DataType.kString, types.DataType.kInt64, types.DataType.kInt64],
        "out": [types.DataType.kString]
    },
    "concat": {
        "in": [types.DataType.kString, types.DataType.kString],
        "out": [types.DataType.kString]
    },
    "casti2f": {
        "in": [types.DataType.kInt64],
        "out": [types.DataType.kFloat32]
    },
    "castf2i": {
        "in": [types.DataType.kFloat32],
        "out": [types.DataType.kInt64]
    },
}