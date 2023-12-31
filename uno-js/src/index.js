import {
    ParseTreeWalker,
    CommonTokenStream,
    ErrorListener,
    InputStream,
} from 'antlr4';

import UnoListener from "./uno.js";
import unoParser from "./unoParser.js";
import unoLexer from "./unoLexer.js";

export function Check(str) {
    try {
        let chars = new InputStream(str);
        let lexer = new unoLexer(chars);
        let tokens = new CommonTokenStream(lexer);
        let parser = new unoParser(tokens);
        parser.removeErrorListeners();
        parser.addErrorListener(new MyErrorListener());
        parser.start();
        return "success";
    } catch (e) {
        return `error: ${e.message}`;
    }
}


export function Parse(str) {
    let chars = new InputStream(str);
    let lexer = new unoLexer(chars);
    let tokens = new CommonTokenStream(lexer);
    let parser = new unoParser(tokens);
    parser.removeErrorListeners();
    parser.addErrorListener(new MyErrorListener());
    let tree = parser.start();
    let walker = new UnoListener();
    ParseTreeWalker.DEFAULT.walk(walker, tree);
    let root = walker.booleans.pop();
    root = root.Simplify();
    let nodes = root.ToList();
    let ret = [];
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].id = i;
        ret.push(nodes[i].ToJson());
    }

    return JSON.stringify({
        "nodes": ret,
    });
}



class MyErrorListener extends ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        throw Error(`line: ${line} column: ${column}: ${msg.trim()}"`);
    }
}