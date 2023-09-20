import test from "node:test";
import * as uno from "../src/index.js"

var msg = uno.Check("castf2i(a[float32]) > b[int64]");
console.log(msg);
var nodes = uno.Parse("castf2i(a[float32]) > b[int64]")
console.log(nodes);