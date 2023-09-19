import {
    ParseTreeWalker,
    CharStream,
    CommonTokenStream,
    ErrorListener,
} from 'antlr4';
import UnoListener from "./uno";
import unoParser from "./unoParser";
import unoLexer from "./unoLexer";

export function UnoCheck(str) {
    try {
        let chars = new CharStream(str);
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


export function UnoParse(str) {
    let chars = new CharStream(str);
    let lexer = new unoLexer(chars);
    let tokens = new CommonTokenStream(lexer);
    let parser = new unoParser(tokens);
    parser.removeErrorListeners();
    parser.addErrorListener(new MyErrorListener());
    let tree = parser.start();
    let walker = new UnoListener();
    ParseTreeWalker.DEFAULT.walk(walker, tree);
    let root = walker.booleans.pop();
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