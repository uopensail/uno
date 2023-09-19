import moment from "moment";
import assert from "assert";

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