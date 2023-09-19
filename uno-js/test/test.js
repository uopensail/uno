import test from "node:test";
import * as uno from "../src/index.js"

var msg = uno.UnoCheck("a > 5");
console.log(msg);
var nodes = uno.UnoParse("a > b")
console.log(nodes);