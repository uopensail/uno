import unoListener from './unoListener.js';
import * as arithmetic from "./arithmetic.js"
import * as boolean from "./boolean.js"

export default class UnoListener extends unoListener {
	constructor() {
		super();
		this.arithmetics = [];
		this.booleans = [];
	}

	exitCmpBooleanExpressionBuilder() {
		let _this = this;
		let name = "exitCmpBooleanExpressionBuilder";
		return function (ctx) {
			let right = _this.arithmetics.pop();
			let left = _this.arithmetics.pop();
			if (left === undefined || right === undefined) {
				throw new Error(`${name} : Arithmetic Expression Is Undefined`);
			}
			let op = ctx.T_COMPARE().getText();
			let tmp = new boolean.Cmp(left, right, op);
			_this.booleans.push(tmp.Simplify());
		};
	}

	// Exit a parse tree produced by unoParser#CmpBooleanExpression.
	exitCmpBooleanExpression = this.exitCmpBooleanExpressionBuilder();

	exitNotBooleanExpressionBuilder() {
		let _this = this;
		let name = "exitNotBooleanExpressionBuilder";
		return function (ctx) {
			let expr = _this.booleans.pop();
			if (expr === undefined) {
				throw new Error(`${name} : Boolean Expression Is Undefined`);
			}
			_this.bools.push(expr.Negation());
		};
	}

	// Exit a parse tree produced by unoParser#NotBooleanExpression.
	exitNotBooleanExpression = this.exitNotBooleanExpressionBuilder();

	exitOrBooleanExpressionBuilder() {
		let _this = this;
		let name = "exitOrBooleanExpressionBuilder";
		return function (ctx) {
			let right = _this.booleans.pop();
			let left = _this.booleans.pop();
			if (left === undefined || right === undefined) {
				throw new Error(`${name} : Boolean Expression Is Undefined`);
			}
			let tmp = new boolean.Or(left, right)
			_this.booleans.push(tmp.Simplify());
		};
	}

	// Exit a parse tree produced by unoParser#OrBooleanExpression.
	exitOrBooleanExpression = this.exitOrBooleanExpressionBuilder();

	exitTrueBooleanExpressionBuilder() {
		let _this = this;
		return function (ctx) {
			_this.booleans.push(new boolean.Literal(true));
		};
	}

	// Exit a parse tree produced by unoParser#TrueBooleanExpression.
	exitTrueBooleanExpression = this.exitTrueBooleanExpressionBuilder();

	exitAndBooleanExpressionBuilder() {
		let _this = this;
		let name = "exitAndBooleanExpressionBuilder";
		return function (ctx) {
			let right = _this.booleans.pop();
			let left = _this.booleans.pop();
			if (left === undefined || right === undefined) {
				throw new Error(`${name} : Boolean Expression Is Undefined`);
			}
			let tmp = new boolean.And(left, right);
			_this.booleans.push(tmp.Simplify());
		};
	}

	// Exit a parse tree produced by unoParser#AndBooleanExpression.
	exitAndBooleanExpression = this.exitAndBooleanExpressionBuilder();

	exitNotInBooleanExpressionBuilder() {
		let _this = this;
		let name = "exitNotInBooleanExpressionBuilder";
		return function (ctx) {
			let expr = _this.arithmetics.pop();
			if (expr === undefined) {
				throw new Error(`${name} : Arithmetic Expression Is Undefined`);
			}
			if (ctx.DECIMAL_LIST() !== null) {
				let list = _this.parseDecimalList(ctx.DECIMAL_LIST().getText());
				let array = new arithmetic.Float32s(list);
				_this.booleans.push(new boolean.Cmp(expr, array, "not in"));
			} else if (ctx.INTEGER_LIST() !== null) {
				let list = _this.parseIntegerList(ctx.INTEGER_LIST().getText());
				let array = new arithmetic.Int64s(list);
				_this.booleans.push(new boolean.Cmp(expr, array, "not in"));
			} else {
				let list = _this.parseStringList(ctx.STRING_LIST().getText());
				let array = new arithmetic.Strings(list);
				_this.booleans.push(new boolean.Cmp(expr, array, "not in",));
			}
		};
	}

	// Exit a parse tree produced by unoParser#NotInBooleanExpression.
	exitNotInBooleanExpression = this.exitNotInBooleanExpressionBuilder();

	exitFalseBooleanExpressionBuilder() {
		let _this = this;
		return function (ctx) {
			_this.booleans.push(new boolean.Literal(false));
		};
	}

	// Exit a parse tree produced by unoParser#FalseBooleanExpression.
	exitFalseBooleanExpression = this.exitFalseBooleanExpressionBuilder();

	exitInBooleanExpressionBuilder() {
		let _this = this;
		let name = "exitInBooleanExpressionBuilder";
		return function (ctx) {
			let expr = _this.arithmetics.pop();
			if (expr === undefined) {
				throw new Error(`${name} : Arithmetic Expression Is Undefined`);
			}
			if (ctx.DECIMAL_LIST() !== null) {
				let list = _this.parseDecimalList(ctx.DECIMAL_LIST().getText());
				let array = new arithmetic.Float32s(list);
				_this.booleans.push(new boolean.Cmp(expr, array, "in"));
			} else if (ctx.INTEGER_LIST() !== null) {
				let list = _this.parseIntegerList(ctx.INTEGER_LIST().getText());
				let array = new arithmetic.Int64s(list);
				_this.booleans.push(new boolean.Cmp(expr, array, "in"));
			} else {
				let list = _this.parseStringList(ctx.STRING_LIST().getText());
				let array = new arithmetic.Strings(list);
				_this.booleans.push(new boolean.Cmp(expr, array, "in"));
			}
		};
	}

	// Exit a parse tree produced by unoParser#InBooleanExpression.
	exitInBooleanExpression = this.exitInBooleanExpressionBuilder();

	exitAddArithmeticExpressionBuilder() {
		let _this = this;
		let name = "exitAddArithmeticExpressionBuilder";
		return function (ctx) {
			let second = _this.arithmetics.pop();
			let first = _this.arithmetics.pop();
			if (first === undefined || second === undefined) {
				throw new Error(`${name} :Arithmetic Expression Is Undefined`);
			}

			let func = new arithmetic.Function("+", [first, second]);
			_this.arithmetics.push(func.Simplify());
		};
	}

	// Exit a parse tree produced by unoParser#AddArithmeticExpression.
	exitAddArithmeticExpression = this.exitAddArithmeticExpressionBuilder();

	exitStringArithmeticExpressionBuilder() {
		let _this = this;
		return function (ctx) {
			_this.arithmetics.push(new arithmetic.String(ctx.STRING().getText()));
		};
	}

	// Exit a parse tree produced by unoParser#StringArithmeticExpression.
	exitStringArithmeticExpression = this.exitStringArithmeticExpressionBuilder();

	exitIntegerArithmeticExpressionBuilder() {
		let _this = this;
		return function (ctx) {
			_this.arithmetics.push(new arithmetic.Int64(parseInt(ctx.INTEGER().getText())));
		};
	}

	// Exit a parse tree produced by unoParser#IntegerArithmeticExpression.
	exitIntegerArithmeticExpression = this.exitIntegerArithmeticExpressionBuilder();

	exitDecimalArithmeticExpressionBuilder() {
		let _this = this;
		return function (ctx) {
			_this.arithmetics.push(new arithmetic.Float32(parseFloat(ctx.DECIMAL().getText())));
		};
	}

	// Exit a parse tree produced by unoParser#DecimalArithmeticExpression.
	exitDecimalArithmeticExpression = this.exitDecimalArithmeticExpressionBuilder();

	exitFuncArithmeticExpressionBuilder() {
		let _this = this;
		let name = "exitFuncArithmeticExpressionBuilder";
		return function (ctx) {
			let func = ctx.IDENTIFIER().getText().toLowerCase();
			let n = ctx.arithmetic_expression().length;
			let args = [];
			for (let i = 0; i < n; i++) {
				const tmp = _this.arithmetics.pop();
				if (tmp === undefined) {
					throw new Error(`${name} : Arithmetic Expression Is Undefined`);
				}
				args.push(tmp);
			}
			args.reverse();
			let tmp = new arithmetic.Function(func, args);
			_this.arithmetics.push(tmp.Simplify());
		};
	}

	// Exit a parse tree produced by unoParser#FuncArithmeticExpression.
	exitFuncArithmeticExpression = this.exitFuncArithmeticExpressionBuilder();

	exitColumnArithmeticExpressionBuilder() {
		let _this = this;

		return function (ctx) {
			let mark = ctx.type_marker().getText();
			if (mark === "") {
				mark = "[float32]"
			}
			let tmp = new arithmetic.Column(ctx.IDENTIFIER().getText(), mark);
			_this.arithmetics.push(tmp);
		};
	}
	// Exit a parse tree produced by unoParser#ColumnArithmeticExpression.
	exitColumnArithmeticExpression = this.exitColumnArithmeticExpressionBuilder();

	exitDivArithmeticExpressionBuilder() {
		let _this = this;
		let name = "exitDivArithmeticExpressionBuilder";

		return function (ctx) {
			let second = _this.arithmetics.pop();
			let first = _this.arithmetics.pop();
			if (first === undefined || second === undefined) {
				throw new Error(`${name} : Arithmetic Expression Is Undefined`);
			}
			if (second == 0) {
				throw new Error(`${name} : Division By Zero`);
			}
			const tmp = new arithmetic.Function("/", [first, second]);
			_this.arithmetics.push(tmp.Simplify());
		};
	}

	// Exit a parse tree produced by unoParser#DivArithmeticExpression.
	exitDivArithmeticExpression = this.exitDivArithmeticExpressionBuilder();

	exitFieldColumnArithmeticExpressionBuilder() {
		let _this = this;
		let name = "exitFieldColumnArithmeticExpressionBuilder";

		return function (ctx) {
			let mark = ctx.type_marker().getText();
			if (mark === "") {
				mark = "[float32]"
			}
			let column = `${ctx.IDENTIFIER(0).getText()}.${ctx.IDENTIFIER(1).getText()}`;
			let tmp = new arithmetic.Column(column, mark);
			_this.arithmetics.push(tmp);
		};
	}
	// Exit a parse tree produced by unoParser#FieldColumnArithmeticExpression.
	exitFieldColumnArithmeticExpression = this.exitFieldColumnArithmeticExpressionBuilder();

	exitSubArithmeticExpressionBuilder() {
		let _this = this;
		let name = "exitSubArithmeticExpressionBuilder";

		return function (ctx) {
			let second = _this.arithmetics.pop();
			let first = _this.arithmetics.pop();
			if (first === undefined || second === undefined) {
				throw new Error(`${name} : Arithmetic Expression Is Undefined`);
			}
			let tmp = new arith.Function("-", [first, second]);
			_this.arithmetics.push(tmp.Simplify());
		};
	}

	// Exit a parse tree produced by unoParser#SubArithmeticExpression.
	exitSubArithmeticExpression = this.exitSubArithmeticExpressionBuilder();

	exitModArithmeticExpressionBuilder() {
		let _this = this;
		let name = "exitModArithmeticExpressionBuilder";

		return function (ctx) {
			let second = _this.arithmetics.pop();
			let first = _this.arithmetics.pop();
			if (first === undefined || second === undefined) {
				throw new Error(`${name} :Arithmetic Expression Is Undefined`);
			}
			if (second == 0) {
				throw new Error(`${name} : Division By Zero`);
			}
			let tmp = new arithmetic.Function("%", [first, second]);
			_this.arithmeticss.push(tmp.Simplify());
		};
	}

	// Exit a parse tree produced by unoParser#ModArithmeticExpression.
	exitModArithmeticExpression = this.exitModArithmeticExpressionBuilder();

	exitRuntTimeFuncArithmeticExpressionBuilder() {
		let _this = this;
		return function (ctx) {
			let func = ctx.IDENTIFIER().getText().toLowerCase();
			_this.arithmetics.push(new arithmetic.Function(func, []));
		};
	}

	// Exit a parse tree produced by unoParser#RuntTimeFuncArithmeticExpression.
	exitRuntTimeFuncArithmeticExpression = this.exitRuntTimeFuncArithmeticExpressionBuilder();

	// Exit a parse tree produced by unoParser#MulArithmeticExpression.
	exitMulArithmeticExpressionBuilder() {
		let _this = this;
		let name = "exitMulArithmeticExpressionBuilder";

		return function (ctx) {
			let second = _this.arithmetics.pop();
			let first = _this.arithmetics.pop();
			if (first === undefined || second === undefined) {
				throw new Error(`${name} : Arithmetic Expression Is Undefined`);
			}

			let tmp = new arithmetic.Function("*", [first, second]);
			_this.arithmetics.push(tmp.Simplify());
		};
	}

	exitMulArithmeticExpression = this.exitMulArithmeticExpressionBuilder();

	parseDecimalList = function (str) {
		return str.substring(1, str.length - 1).split(',').map(function (s) {
			return parseFloat(s);
		});
	}

	parseIntegerList = function (str) {
		return str.substring(1, str.length - 1).split(',').map(function (s) {
			return parseInt(s);
		});
	}

	parseStringList = function (str) {
		return str.substring(1, str.length - 1).split(',');
	}
}