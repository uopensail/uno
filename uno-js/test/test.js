import test from "node:test";
import * as uno from "../src/index.js"

var msg = uno.Check("5 in (4,5,6)");
console.log(msg);
var nodes = uno.Parse("5 in (4,5,6)")
console.log(nodes);

var nodes = uno.Parse("5.8 not in (4.9,5.7,6.0)")
console.log(nodes);

var nodes = uno.Parse("\"5.8\" not in (\"4.9\",\"5.8\",\"6.0\")")
console.log(nodes);

var nodes = uno.Parse("6+8 > 10")
console.log(nodes);

var nodes = uno.Parse("a+8.0 > 10.1")
console.log(nodes);

var nodes = uno.Parse("(\"A\" > \"B\") and (5*8==40)")
console.log(nodes);

var nodes = uno.Parse("(\"A\" > \"B\") or (5*8==40)")
console.log(nodes);

var nodes = uno.Parse("(a[string] > \"B\") and (5*8==40)")
console.log(nodes);

var nodes = uno.Parse("(a[string] > \"B\") or (5*8!=40)")
console.log(nodes);
