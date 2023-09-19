// Generated from uno.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import unoListener from './unoListener.js';
const serializedATN = [4,1,33,94,2,0,7,0,2,1,7,1,2,2,7,2,1,0,1,0,1,0,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,3,1,32,8,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,40,8,1,10,1,12,1,43,9,
1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,54,8,2,10,2,12,2,57,9,2,1,2,1,
2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,72,8,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,89,8,2,10,2,12,2,92,9,2,
1,2,0,2,2,4,3,0,2,4,0,1,3,0,27,27,29,29,31,31,111,0,6,1,0,0,0,2,31,1,0,0,
0,4,71,1,0,0,0,6,7,3,2,1,0,7,8,5,0,0,1,8,1,1,0,0,0,9,10,6,1,-1,0,10,11,3,
4,2,0,11,12,5,17,0,0,12,13,3,4,2,0,13,32,1,0,0,0,14,15,5,13,0,0,15,32,3,
2,1,6,16,17,3,4,2,0,17,18,5,14,0,0,18,19,7,0,0,0,19,32,1,0,0,0,20,21,3,4,
2,0,21,22,5,13,0,0,22,23,5,14,0,0,23,24,7,0,0,0,24,32,1,0,0,0,25,26,5,1,
0,0,26,27,3,2,1,0,27,28,5,2,0,0,28,32,1,0,0,0,29,32,5,15,0,0,30,32,5,16,
0,0,31,9,1,0,0,0,31,14,1,0,0,0,31,16,1,0,0,0,31,20,1,0,0,0,31,25,1,0,0,0,
31,29,1,0,0,0,31,30,1,0,0,0,32,41,1,0,0,0,33,34,10,9,0,0,34,35,5,11,0,0,
35,40,3,2,1,10,36,37,10,8,0,0,37,38,5,12,0,0,38,40,3,2,1,9,39,33,1,0,0,0,
39,36,1,0,0,0,40,43,1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,3,1,0,0,0,43,
41,1,0,0,0,44,45,6,2,-1,0,45,46,5,26,0,0,46,47,5,1,0,0,47,72,5,2,0,0,48,
49,5,26,0,0,49,50,5,1,0,0,50,55,3,4,2,0,51,52,5,3,0,0,52,54,3,4,2,0,53,51,
1,0,0,0,54,57,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,58,1,0,0,0,57,55,1,
0,0,0,58,59,5,2,0,0,59,72,1,0,0,0,60,72,5,26,0,0,61,62,5,26,0,0,62,63,5,
4,0,0,63,72,5,26,0,0,64,72,5,32,0,0,65,72,5,28,0,0,66,72,5,30,0,0,67,68,
5,1,0,0,68,69,3,4,2,0,69,70,5,2,0,0,70,72,1,0,0,0,71,44,1,0,0,0,71,48,1,
0,0,0,71,60,1,0,0,0,71,61,1,0,0,0,71,64,1,0,0,0,71,65,1,0,0,0,71,66,1,0,
0,0,71,67,1,0,0,0,72,90,1,0,0,0,73,74,10,13,0,0,74,75,5,9,0,0,75,89,3,4,
2,14,76,77,10,12,0,0,77,78,5,7,0,0,78,89,3,4,2,13,79,80,10,11,0,0,80,81,
5,8,0,0,81,89,3,4,2,12,82,83,10,10,0,0,83,84,5,5,0,0,84,89,3,4,2,11,85,86,
10,9,0,0,86,87,5,6,0,0,87,89,3,4,2,10,88,73,1,0,0,0,88,76,1,0,0,0,88,79,
1,0,0,0,88,82,1,0,0,0,88,85,1,0,0,0,89,92,1,0,0,0,90,88,1,0,0,0,90,91,1,
0,0,0,91,5,1,0,0,0,92,90,1,0,0,0,7,31,39,41,55,71,88,90];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class unoParser extends antlr4.Parser {

    static grammarFileName = "uno.g4";
    static literalNames = [ null, "'('", "')'", "','", "'.'", "'+'", "'-'", 
                            "'*'", "'/'", "'%'", null, null, null, null, 
                            null, null, null, null, "'='", "'=='", "'<>'", 
                            "'!='", "'>'", "'>='", "'<'", "'<='" ];
    static symbolicNames = [ null, null, null, null, null, "T_ADD", "T_SUB", 
                             "T_MUL", "T_DIV", "T_MOD", "T_ON", "T_AND", 
                             "T_OR", "T_NOT", "T_IN", "T_TRUE", "T_FALSE", 
                             "T_COMPARE", "T_EQUAL", "T_EQUAL2", "T_NOTEQUAL", 
                             "T_NOTEQUAL2", "T_GREATER", "T_GREATEREQUAL", 
                             "T_LESS", "T_LESSEQUAL", "IDENTIFIER", "INTEGER_LIST", 
                             "INTEGER", "DECIMAL_LIST", "DECIMAL", "STRING_LIST", 
                             "STRING", "WS" ];
    static ruleNames = [ "start", "boolean_expression", "arithmetic_expression" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = unoParser.ruleNames;
        this.literalNames = unoParser.literalNames;
        this.symbolicNames = unoParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.boolean_expression_sempred(localctx, predIndex);
    	case 2:
    	    		return this.arithmetic_expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    boolean_expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 9);
    		case 1:
    			return this.precpred(this._ctx, 8);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    arithmetic_expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 13);
    		case 3:
    			return this.precpred(this._ctx, 12);
    		case 4:
    			return this.precpred(this._ctx, 11);
    		case 5:
    			return this.precpred(this._ctx, 10);
    		case 6:
    			return this.precpred(this._ctx, 9);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, unoParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 6;
	        this.boolean_expression(0);
	        this.state = 7;
	        this.match(unoParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	boolean_expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Boolean_expressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, unoParser.RULE_boolean_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new CmpBooleanExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 10;
	            this.arithmetic_expression(0);
	            this.state = 11;
	            this.match(unoParser.T_COMPARE);
	            this.state = 12;
	            this.arithmetic_expression(0);
	            break;

	        case 2:
	            localctx = new NotBooleanExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 14;
	            this.match(unoParser.T_NOT);
	            this.state = 15;
	            this.boolean_expression(6);
	            break;

	        case 3:
	            localctx = new InBooleanExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 16;
	            this.arithmetic_expression(0);
	            this.state = 17;
	            this.match(unoParser.T_IN);
	            this.state = 18;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 2818572288) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

	        case 4:
	            localctx = new NotInBooleanExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 20;
	            this.arithmetic_expression(0);
	            this.state = 21;
	            this.match(unoParser.T_NOT);
	            this.state = 22;
	            this.match(unoParser.T_IN);
	            this.state = 23;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 2818572288) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

	        case 5:
	            localctx = new PlainBooleanExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 25;
	            this.match(unoParser.T__0);
	            this.state = 26;
	            this.boolean_expression(0);
	            this.state = 27;
	            this.match(unoParser.T__1);
	            break;

	        case 6:
	            localctx = new TrueBooleanExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 29;
	            this.match(unoParser.T_TRUE);
	            break;

	        case 7:
	            localctx = new FalseBooleanExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 30;
	            this.match(unoParser.T_FALSE);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 41;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 39;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new AndBooleanExpressionContext(this, new Boolean_expressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, unoParser.RULE_boolean_expression);
	                    this.state = 33;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 34;
	                    this.match(unoParser.T_AND);
	                    this.state = 35;
	                    this.boolean_expression(10);
	                    break;

	                case 2:
	                    localctx = new OrBooleanExpressionContext(this, new Boolean_expressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, unoParser.RULE_boolean_expression);
	                    this.state = 36;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 37;
	                    this.match(unoParser.T_OR);
	                    this.state = 38;
	                    this.boolean_expression(9);
	                    break;

	                } 
	            }
	            this.state = 43;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	arithmetic_expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Arithmetic_expressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 4;
	    this.enterRecursionRule(localctx, 4, unoParser.RULE_arithmetic_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new RuntTimeFuncArithmeticExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 45;
	            this.match(unoParser.IDENTIFIER);
	            this.state = 46;
	            this.match(unoParser.T__0);
	            this.state = 47;
	            this.match(unoParser.T__1);
	            break;

	        case 2:
	            localctx = new FuncArithmeticExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 48;
	            this.match(unoParser.IDENTIFIER);
	            this.state = 49;
	            this.match(unoParser.T__0);
	            this.state = 50;
	            this.arithmetic_expression(0);
	            this.state = 55;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===3) {
	                this.state = 51;
	                this.match(unoParser.T__2);
	                this.state = 52;
	                this.arithmetic_expression(0);
	                this.state = 57;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 58;
	            this.match(unoParser.T__1);
	            break;

	        case 3:
	            localctx = new ColumnArithmeticExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 60;
	            this.match(unoParser.IDENTIFIER);
	            break;

	        case 4:
	            localctx = new FieldColumnArithmeticExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 61;
	            this.match(unoParser.IDENTIFIER);
	            this.state = 62;
	            this.match(unoParser.T__3);
	            this.state = 63;
	            this.match(unoParser.IDENTIFIER);
	            break;

	        case 5:
	            localctx = new StringArithmeticExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 64;
	            this.match(unoParser.STRING);
	            break;

	        case 6:
	            localctx = new IntegerArithmeticExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 65;
	            this.match(unoParser.INTEGER);
	            break;

	        case 7:
	            localctx = new DecimalArithmeticExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 66;
	            this.match(unoParser.DECIMAL);
	            break;

	        case 8:
	            localctx = new PlainArithmeticExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 67;
	            this.match(unoParser.T__0);
	            this.state = 68;
	            this.arithmetic_expression(0);
	            this.state = 69;
	            this.match(unoParser.T__1);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 90;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 88;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ModArithmeticExpressionContext(this, new Arithmetic_expressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, unoParser.RULE_arithmetic_expression);
	                    this.state = 73;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 74;
	                    this.match(unoParser.T_MOD);
	                    this.state = 75;
	                    this.arithmetic_expression(14);
	                    break;

	                case 2:
	                    localctx = new MulArithmeticExpressionContext(this, new Arithmetic_expressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, unoParser.RULE_arithmetic_expression);
	                    this.state = 76;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 77;
	                    this.match(unoParser.T_MUL);
	                    this.state = 78;
	                    this.arithmetic_expression(13);
	                    break;

	                case 3:
	                    localctx = new DivArithmeticExpressionContext(this, new Arithmetic_expressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, unoParser.RULE_arithmetic_expression);
	                    this.state = 79;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 80;
	                    this.match(unoParser.T_DIV);
	                    this.state = 81;
	                    this.arithmetic_expression(12);
	                    break;

	                case 4:
	                    localctx = new AddArithmeticExpressionContext(this, new Arithmetic_expressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, unoParser.RULE_arithmetic_expression);
	                    this.state = 82;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 83;
	                    this.match(unoParser.T_ADD);
	                    this.state = 84;
	                    this.arithmetic_expression(11);
	                    break;

	                case 5:
	                    localctx = new SubArithmeticExpressionContext(this, new Arithmetic_expressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, unoParser.RULE_arithmetic_expression);
	                    this.state = 85;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 86;
	                    this.match(unoParser.T_SUB);
	                    this.state = 87;
	                    this.arithmetic_expression(10);
	                    break;

	                } 
	            }
	            this.state = 92;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

unoParser.EOF = antlr4.Token.EOF;
unoParser.T__0 = 1;
unoParser.T__1 = 2;
unoParser.T__2 = 3;
unoParser.T__3 = 4;
unoParser.T_ADD = 5;
unoParser.T_SUB = 6;
unoParser.T_MUL = 7;
unoParser.T_DIV = 8;
unoParser.T_MOD = 9;
unoParser.T_ON = 10;
unoParser.T_AND = 11;
unoParser.T_OR = 12;
unoParser.T_NOT = 13;
unoParser.T_IN = 14;
unoParser.T_TRUE = 15;
unoParser.T_FALSE = 16;
unoParser.T_COMPARE = 17;
unoParser.T_EQUAL = 18;
unoParser.T_EQUAL2 = 19;
unoParser.T_NOTEQUAL = 20;
unoParser.T_NOTEQUAL2 = 21;
unoParser.T_GREATER = 22;
unoParser.T_GREATEREQUAL = 23;
unoParser.T_LESS = 24;
unoParser.T_LESSEQUAL = 25;
unoParser.IDENTIFIER = 26;
unoParser.INTEGER_LIST = 27;
unoParser.INTEGER = 28;
unoParser.DECIMAL_LIST = 29;
unoParser.DECIMAL = 30;
unoParser.STRING_LIST = 31;
unoParser.STRING = 32;
unoParser.WS = 33;

unoParser.RULE_start = 0;
unoParser.RULE_boolean_expression = 1;
unoParser.RULE_arithmetic_expression = 2;

class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = unoParser.RULE_start;
    }

	boolean_expression() {
	    return this.getTypedRuleContext(Boolean_expressionContext,0);
	};

	EOF() {
	    return this.getToken(unoParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.enterStart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.exitStart(this);
		}
	}


}



class Boolean_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = unoParser.RULE_boolean_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class CmpBooleanExpressionContext extends Boolean_expressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	arithmetic_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Arithmetic_expressionContext);
	    } else {
	        return this.getTypedRuleContext(Arithmetic_expressionContext,i);
	    }
	};

	T_COMPARE() {
	    return this.getToken(unoParser.T_COMPARE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.enterCmpBooleanExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.exitCmpBooleanExpression(this);
		}
	}


}

unoParser.CmpBooleanExpressionContext = CmpBooleanExpressionContext;

class NotBooleanExpressionContext extends Boolean_expressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	T_NOT() {
	    return this.getToken(unoParser.T_NOT, 0);
	};

	boolean_expression() {
	    return this.getTypedRuleContext(Boolean_expressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.enterNotBooleanExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.exitNotBooleanExpression(this);
		}
	}


}

unoParser.NotBooleanExpressionContext = NotBooleanExpressionContext;

class PlainBooleanExpressionContext extends Boolean_expressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	boolean_expression() {
	    return this.getTypedRuleContext(Boolean_expressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.enterPlainBooleanExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.exitPlainBooleanExpression(this);
		}
	}


}

unoParser.PlainBooleanExpressionContext = PlainBooleanExpressionContext;

class OrBooleanExpressionContext extends Boolean_expressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	boolean_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Boolean_expressionContext);
	    } else {
	        return this.getTypedRuleContext(Boolean_expressionContext,i);
	    }
	};

	T_OR() {
	    return this.getToken(unoParser.T_OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.enterOrBooleanExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.exitOrBooleanExpression(this);
		}
	}


}

unoParser.OrBooleanExpressionContext = OrBooleanExpressionContext;

class TrueBooleanExpressionContext extends Boolean_expressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	T_TRUE() {
	    return this.getToken(unoParser.T_TRUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.enterTrueBooleanExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.exitTrueBooleanExpression(this);
		}
	}


}

unoParser.TrueBooleanExpressionContext = TrueBooleanExpressionContext;

class AndBooleanExpressionContext extends Boolean_expressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	boolean_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Boolean_expressionContext);
	    } else {
	        return this.getTypedRuleContext(Boolean_expressionContext,i);
	    }
	};

	T_AND() {
	    return this.getToken(unoParser.T_AND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.enterAndBooleanExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.exitAndBooleanExpression(this);
		}
	}


}

unoParser.AndBooleanExpressionContext = AndBooleanExpressionContext;

class NotInBooleanExpressionContext extends Boolean_expressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	arithmetic_expression() {
	    return this.getTypedRuleContext(Arithmetic_expressionContext,0);
	};

	T_NOT() {
	    return this.getToken(unoParser.T_NOT, 0);
	};

	T_IN() {
	    return this.getToken(unoParser.T_IN, 0);
	};

	INTEGER_LIST() {
	    return this.getToken(unoParser.INTEGER_LIST, 0);
	};

	STRING_LIST() {
	    return this.getToken(unoParser.STRING_LIST, 0);
	};

	DECIMAL_LIST() {
	    return this.getToken(unoParser.DECIMAL_LIST, 0);
	};

	enterRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.enterNotInBooleanExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.exitNotInBooleanExpression(this);
		}
	}


}

unoParser.NotInBooleanExpressionContext = NotInBooleanExpressionContext;

class FalseBooleanExpressionContext extends Boolean_expressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	T_FALSE() {
	    return this.getToken(unoParser.T_FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.enterFalseBooleanExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.exitFalseBooleanExpression(this);
		}
	}


}

unoParser.FalseBooleanExpressionContext = FalseBooleanExpressionContext;

class InBooleanExpressionContext extends Boolean_expressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	arithmetic_expression() {
	    return this.getTypedRuleContext(Arithmetic_expressionContext,0);
	};

	T_IN() {
	    return this.getToken(unoParser.T_IN, 0);
	};

	INTEGER_LIST() {
	    return this.getToken(unoParser.INTEGER_LIST, 0);
	};

	STRING_LIST() {
	    return this.getToken(unoParser.STRING_LIST, 0);
	};

	DECIMAL_LIST() {
	    return this.getToken(unoParser.DECIMAL_LIST, 0);
	};

	enterRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.enterInBooleanExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.exitInBooleanExpression(this);
		}
	}


}

unoParser.InBooleanExpressionContext = InBooleanExpressionContext;

class Arithmetic_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = unoParser.RULE_arithmetic_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class PlainArithmeticExpressionContext extends Arithmetic_expressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	arithmetic_expression() {
	    return this.getTypedRuleContext(Arithmetic_expressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.enterPlainArithmeticExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.exitPlainArithmeticExpression(this);
		}
	}


}

unoParser.PlainArithmeticExpressionContext = PlainArithmeticExpressionContext;

class AddArithmeticExpressionContext extends Arithmetic_expressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	arithmetic_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Arithmetic_expressionContext);
	    } else {
	        return this.getTypedRuleContext(Arithmetic_expressionContext,i);
	    }
	};

	T_ADD() {
	    return this.getToken(unoParser.T_ADD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.enterAddArithmeticExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.exitAddArithmeticExpression(this);
		}
	}


}

unoParser.AddArithmeticExpressionContext = AddArithmeticExpressionContext;

class StringArithmeticExpressionContext extends Arithmetic_expressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(unoParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.enterStringArithmeticExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.exitStringArithmeticExpression(this);
		}
	}


}

unoParser.StringArithmeticExpressionContext = StringArithmeticExpressionContext;

class IntegerArithmeticExpressionContext extends Arithmetic_expressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INTEGER() {
	    return this.getToken(unoParser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.enterIntegerArithmeticExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.exitIntegerArithmeticExpression(this);
		}
	}


}

unoParser.IntegerArithmeticExpressionContext = IntegerArithmeticExpressionContext;

class DecimalArithmeticExpressionContext extends Arithmetic_expressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DECIMAL() {
	    return this.getToken(unoParser.DECIMAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.enterDecimalArithmeticExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.exitDecimalArithmeticExpression(this);
		}
	}


}

unoParser.DecimalArithmeticExpressionContext = DecimalArithmeticExpressionContext;

class FuncArithmeticExpressionContext extends Arithmetic_expressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IDENTIFIER() {
	    return this.getToken(unoParser.IDENTIFIER, 0);
	};

	arithmetic_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Arithmetic_expressionContext);
	    } else {
	        return this.getTypedRuleContext(Arithmetic_expressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.enterFuncArithmeticExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.exitFuncArithmeticExpression(this);
		}
	}


}

unoParser.FuncArithmeticExpressionContext = FuncArithmeticExpressionContext;

class ColumnArithmeticExpressionContext extends Arithmetic_expressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IDENTIFIER() {
	    return this.getToken(unoParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.enterColumnArithmeticExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.exitColumnArithmeticExpression(this);
		}
	}


}

unoParser.ColumnArithmeticExpressionContext = ColumnArithmeticExpressionContext;

class DivArithmeticExpressionContext extends Arithmetic_expressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	arithmetic_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Arithmetic_expressionContext);
	    } else {
	        return this.getTypedRuleContext(Arithmetic_expressionContext,i);
	    }
	};

	T_DIV() {
	    return this.getToken(unoParser.T_DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.enterDivArithmeticExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.exitDivArithmeticExpression(this);
		}
	}


}

unoParser.DivArithmeticExpressionContext = DivArithmeticExpressionContext;

class FieldColumnArithmeticExpressionContext extends Arithmetic_expressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(unoParser.IDENTIFIER);
	    } else {
	        return this.getToken(unoParser.IDENTIFIER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.enterFieldColumnArithmeticExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.exitFieldColumnArithmeticExpression(this);
		}
	}


}

unoParser.FieldColumnArithmeticExpressionContext = FieldColumnArithmeticExpressionContext;

class SubArithmeticExpressionContext extends Arithmetic_expressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	arithmetic_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Arithmetic_expressionContext);
	    } else {
	        return this.getTypedRuleContext(Arithmetic_expressionContext,i);
	    }
	};

	T_SUB() {
	    return this.getToken(unoParser.T_SUB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.enterSubArithmeticExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.exitSubArithmeticExpression(this);
		}
	}


}

unoParser.SubArithmeticExpressionContext = SubArithmeticExpressionContext;

class ModArithmeticExpressionContext extends Arithmetic_expressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	arithmetic_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Arithmetic_expressionContext);
	    } else {
	        return this.getTypedRuleContext(Arithmetic_expressionContext,i);
	    }
	};

	T_MOD() {
	    return this.getToken(unoParser.T_MOD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.enterModArithmeticExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.exitModArithmeticExpression(this);
		}
	}


}

unoParser.ModArithmeticExpressionContext = ModArithmeticExpressionContext;

class RuntTimeFuncArithmeticExpressionContext extends Arithmetic_expressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IDENTIFIER() {
	    return this.getToken(unoParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.enterRuntTimeFuncArithmeticExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.exitRuntTimeFuncArithmeticExpression(this);
		}
	}


}

unoParser.RuntTimeFuncArithmeticExpressionContext = RuntTimeFuncArithmeticExpressionContext;

class MulArithmeticExpressionContext extends Arithmetic_expressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	arithmetic_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Arithmetic_expressionContext);
	    } else {
	        return this.getTypedRuleContext(Arithmetic_expressionContext,i);
	    }
	};

	T_MUL() {
	    return this.getToken(unoParser.T_MUL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.enterMulArithmeticExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.exitMulArithmeticExpression(this);
		}
	}


}

unoParser.MulArithmeticExpressionContext = MulArithmeticExpressionContext;


unoParser.StartContext = StartContext; 
unoParser.Boolean_expressionContext = Boolean_expressionContext; 
unoParser.Arithmetic_expressionContext = Arithmetic_expressionContext; 
