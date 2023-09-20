// Generated from uno.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import unoListener from './unoListener.js';
const serializedATN = [4,1,38,106,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,1,
0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,3,1,34,8,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,42,8,1,10,1,
12,1,45,9,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,56,8,2,10,2,12,2,59,
9,2,1,2,1,2,1,2,1,2,3,2,65,8,2,1,2,1,2,1,2,1,2,3,2,71,8,2,1,2,1,2,1,2,1,
2,1,2,1,2,1,2,3,2,80,8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,5,2,97,8,2,10,2,12,2,100,9,2,1,3,1,3,1,3,1,3,1,3,0,2,2,4,4,0,
2,4,6,0,2,3,0,32,32,34,34,36,36,1,0,12,14,124,0,8,1,0,0,0,2,33,1,0,0,0,4,
79,1,0,0,0,6,101,1,0,0,0,8,9,3,2,1,0,9,10,5,0,0,1,10,1,1,0,0,0,11,12,6,1,
-1,0,12,13,3,4,2,0,13,14,5,22,0,0,14,15,3,4,2,0,15,34,1,0,0,0,16,17,5,18,
0,0,17,34,3,2,1,6,18,19,3,4,2,0,19,20,5,19,0,0,20,21,7,0,0,0,21,34,1,0,0,
0,22,23,3,4,2,0,23,24,5,18,0,0,24,25,5,19,0,0,25,26,7,0,0,0,26,34,1,0,0,
0,27,28,5,1,0,0,28,29,3,2,1,0,29,30,5,2,0,0,30,34,1,0,0,0,31,34,5,20,0,0,
32,34,5,21,0,0,33,11,1,0,0,0,33,16,1,0,0,0,33,18,1,0,0,0,33,22,1,0,0,0,33,
27,1,0,0,0,33,31,1,0,0,0,33,32,1,0,0,0,34,43,1,0,0,0,35,36,10,9,0,0,36,37,
5,16,0,0,37,42,3,2,1,10,38,39,10,8,0,0,39,40,5,17,0,0,40,42,3,2,1,9,41,35,
1,0,0,0,41,38,1,0,0,0,42,45,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,3,1,0,
0,0,45,43,1,0,0,0,46,47,6,2,-1,0,47,48,5,31,0,0,48,49,5,1,0,0,49,80,5,2,
0,0,50,51,5,31,0,0,51,52,5,1,0,0,52,57,3,4,2,0,53,54,5,3,0,0,54,56,3,4,2,
0,55,53,1,0,0,0,56,59,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,60,1,0,0,0,
59,57,1,0,0,0,60,61,5,2,0,0,61,80,1,0,0,0,62,64,5,31,0,0,63,65,3,6,3,0,64,
63,1,0,0,0,64,65,1,0,0,0,65,80,1,0,0,0,66,67,5,31,0,0,67,68,5,4,0,0,68,70,
5,31,0,0,69,71,3,6,3,0,70,69,1,0,0,0,70,71,1,0,0,0,71,80,1,0,0,0,72,80,5,
37,0,0,73,80,5,33,0,0,74,80,5,35,0,0,75,76,5,1,0,0,76,77,3,4,2,0,77,78,5,
2,0,0,78,80,1,0,0,0,79,46,1,0,0,0,79,50,1,0,0,0,79,62,1,0,0,0,79,66,1,0,
0,0,79,72,1,0,0,0,79,73,1,0,0,0,79,74,1,0,0,0,79,75,1,0,0,0,80,98,1,0,0,
0,81,82,10,13,0,0,82,83,5,11,0,0,83,97,3,4,2,14,84,85,10,12,0,0,85,86,5,
9,0,0,86,97,3,4,2,13,87,88,10,11,0,0,88,89,5,10,0,0,89,97,3,4,2,12,90,91,
10,10,0,0,91,92,5,7,0,0,92,97,3,4,2,11,93,94,10,9,0,0,94,95,5,8,0,0,95,97,
3,4,2,10,96,81,1,0,0,0,96,84,1,0,0,0,96,87,1,0,0,0,96,90,1,0,0,0,96,93,1,
0,0,0,97,100,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,5,1,0,0,0,100,98,1,0,
0,0,101,102,5,5,0,0,102,103,7,1,0,0,103,104,5,6,0,0,104,7,1,0,0,0,9,33,41,
43,57,64,70,79,96,98];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class unoParser extends antlr4.Parser {

    static grammarFileName = "uno.g4";
    static literalNames = [ null, "'('", "')'", "','", "'.'", "'['", "']'", 
                            "'+'", "'-'", "'*'", "'/'", "'%'", null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, "'='", "'=='", "'<>'", "'!='", "'>'", 
                            "'>='", "'<'", "'<='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, "T_ADD", 
                             "T_SUB", "T_MUL", "T_DIV", "T_MOD", "T_INT", 
                             "T_FLOAT", "T_STRING", "T_ON", "T_AND", "T_OR", 
                             "T_NOT", "T_IN", "T_TRUE", "T_FALSE", "T_COMPARE", 
                             "T_EQUAL", "T_EQUAL2", "T_NOTEQUAL", "T_NOTEQUAL2", 
                             "T_GREATER", "T_GREATEREQUAL", "T_LESS", "T_LESSEQUAL", 
                             "IDENTIFIER", "INTEGER_LIST", "INTEGER", "DECIMAL_LIST", 
                             "DECIMAL", "STRING_LIST", "STRING", "WS" ];
    static ruleNames = [ "start", "boolean_expression", "arithmetic_expression", 
                         "type_marker" ];

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
	        this.state = 8;
	        this.boolean_expression(0);
	        this.state = 9;
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
	        this.state = 33;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new CmpBooleanExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 12;
	            this.arithmetic_expression(0);
	            this.state = 13;
	            this.match(unoParser.T_COMPARE);
	            this.state = 14;
	            this.arithmetic_expression(0);
	            break;

	        case 2:
	            localctx = new NotBooleanExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 16;
	            this.match(unoParser.T_NOT);
	            this.state = 17;
	            this.boolean_expression(6);
	            break;

	        case 3:
	            localctx = new InBooleanExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 18;
	            this.arithmetic_expression(0);
	            this.state = 19;
	            this.match(unoParser.T_IN);
	            this.state = 20;
	            _la = this._input.LA(1);
	            if(!(((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 21) !== 0))) {
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
	            this.state = 22;
	            this.arithmetic_expression(0);
	            this.state = 23;
	            this.match(unoParser.T_NOT);
	            this.state = 24;
	            this.match(unoParser.T_IN);
	            this.state = 25;
	            _la = this._input.LA(1);
	            if(!(((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 21) !== 0))) {
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
	            this.state = 27;
	            this.match(unoParser.T__0);
	            this.state = 28;
	            this.boolean_expression(0);
	            this.state = 29;
	            this.match(unoParser.T__1);
	            break;

	        case 6:
	            localctx = new TrueBooleanExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 31;
	            this.match(unoParser.T_TRUE);
	            break;

	        case 7:
	            localctx = new FalseBooleanExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 32;
	            this.match(unoParser.T_FALSE);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 43;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 41;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new AndBooleanExpressionContext(this, new Boolean_expressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, unoParser.RULE_boolean_expression);
	                    this.state = 35;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 36;
	                    this.match(unoParser.T_AND);
	                    this.state = 37;
	                    this.boolean_expression(10);
	                    break;

	                case 2:
	                    localctx = new OrBooleanExpressionContext(this, new Boolean_expressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, unoParser.RULE_boolean_expression);
	                    this.state = 38;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 39;
	                    this.match(unoParser.T_OR);
	                    this.state = 40;
	                    this.boolean_expression(9);
	                    break;

	                } 
	            }
	            this.state = 45;
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
	        this.state = 79;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new RuntTimeFuncArithmeticExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 47;
	            this.match(unoParser.IDENTIFIER);
	            this.state = 48;
	            this.match(unoParser.T__0);
	            this.state = 49;
	            this.match(unoParser.T__1);
	            break;

	        case 2:
	            localctx = new FuncArithmeticExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 50;
	            this.match(unoParser.IDENTIFIER);
	            this.state = 51;
	            this.match(unoParser.T__0);
	            this.state = 52;
	            this.arithmetic_expression(0);
	            this.state = 57;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===3) {
	                this.state = 53;
	                this.match(unoParser.T__2);
	                this.state = 54;
	                this.arithmetic_expression(0);
	                this.state = 59;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 60;
	            this.match(unoParser.T__1);
	            break;

	        case 3:
	            localctx = new ColumnArithmeticExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 62;
	            this.match(unoParser.IDENTIFIER);
	            this.state = 64;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	            if(la_===1) {
	                this.state = 63;
	                this.type_marker();

	            }
	            break;

	        case 4:
	            localctx = new FieldColumnArithmeticExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 66;
	            this.match(unoParser.IDENTIFIER);
	            this.state = 67;
	            this.match(unoParser.T__3);
	            this.state = 68;
	            this.match(unoParser.IDENTIFIER);
	            this.state = 70;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	            if(la_===1) {
	                this.state = 69;
	                this.type_marker();

	            }
	            break;

	        case 5:
	            localctx = new StringArithmeticExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 72;
	            this.match(unoParser.STRING);
	            break;

	        case 6:
	            localctx = new IntegerArithmeticExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 73;
	            this.match(unoParser.INTEGER);
	            break;

	        case 7:
	            localctx = new DecimalArithmeticExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 74;
	            this.match(unoParser.DECIMAL);
	            break;

	        case 8:
	            localctx = new PlainArithmeticExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 75;
	            this.match(unoParser.T__0);
	            this.state = 76;
	            this.arithmetic_expression(0);
	            this.state = 77;
	            this.match(unoParser.T__1);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 98;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 96;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ModArithmeticExpressionContext(this, new Arithmetic_expressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, unoParser.RULE_arithmetic_expression);
	                    this.state = 81;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 82;
	                    this.match(unoParser.T_MOD);
	                    this.state = 83;
	                    this.arithmetic_expression(14);
	                    break;

	                case 2:
	                    localctx = new MulArithmeticExpressionContext(this, new Arithmetic_expressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, unoParser.RULE_arithmetic_expression);
	                    this.state = 84;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 85;
	                    this.match(unoParser.T_MUL);
	                    this.state = 86;
	                    this.arithmetic_expression(13);
	                    break;

	                case 3:
	                    localctx = new DivArithmeticExpressionContext(this, new Arithmetic_expressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, unoParser.RULE_arithmetic_expression);
	                    this.state = 87;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 88;
	                    this.match(unoParser.T_DIV);
	                    this.state = 89;
	                    this.arithmetic_expression(12);
	                    break;

	                case 4:
	                    localctx = new AddArithmeticExpressionContext(this, new Arithmetic_expressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, unoParser.RULE_arithmetic_expression);
	                    this.state = 90;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 91;
	                    this.match(unoParser.T_ADD);
	                    this.state = 92;
	                    this.arithmetic_expression(11);
	                    break;

	                case 5:
	                    localctx = new SubArithmeticExpressionContext(this, new Arithmetic_expressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, unoParser.RULE_arithmetic_expression);
	                    this.state = 93;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 94;
	                    this.match(unoParser.T_SUB);
	                    this.state = 95;
	                    this.arithmetic_expression(10);
	                    break;

	                } 
	            }
	            this.state = 100;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
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



	type_marker() {
	    let localctx = new Type_markerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, unoParser.RULE_type_marker);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(unoParser.T__4);
	        this.state = 102;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 28672) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 103;
	        this.match(unoParser.T__5);
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


}

unoParser.EOF = antlr4.Token.EOF;
unoParser.T__0 = 1;
unoParser.T__1 = 2;
unoParser.T__2 = 3;
unoParser.T__3 = 4;
unoParser.T__4 = 5;
unoParser.T__5 = 6;
unoParser.T_ADD = 7;
unoParser.T_SUB = 8;
unoParser.T_MUL = 9;
unoParser.T_DIV = 10;
unoParser.T_MOD = 11;
unoParser.T_INT = 12;
unoParser.T_FLOAT = 13;
unoParser.T_STRING = 14;
unoParser.T_ON = 15;
unoParser.T_AND = 16;
unoParser.T_OR = 17;
unoParser.T_NOT = 18;
unoParser.T_IN = 19;
unoParser.T_TRUE = 20;
unoParser.T_FALSE = 21;
unoParser.T_COMPARE = 22;
unoParser.T_EQUAL = 23;
unoParser.T_EQUAL2 = 24;
unoParser.T_NOTEQUAL = 25;
unoParser.T_NOTEQUAL2 = 26;
unoParser.T_GREATER = 27;
unoParser.T_GREATEREQUAL = 28;
unoParser.T_LESS = 29;
unoParser.T_LESSEQUAL = 30;
unoParser.IDENTIFIER = 31;
unoParser.INTEGER_LIST = 32;
unoParser.INTEGER = 33;
unoParser.DECIMAL_LIST = 34;
unoParser.DECIMAL = 35;
unoParser.STRING_LIST = 36;
unoParser.STRING = 37;
unoParser.WS = 38;

unoParser.RULE_start = 0;
unoParser.RULE_boolean_expression = 1;
unoParser.RULE_arithmetic_expression = 2;
unoParser.RULE_type_marker = 3;

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

	type_marker() {
	    return this.getTypedRuleContext(Type_markerContext,0);
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


	type_marker() {
	    return this.getTypedRuleContext(Type_markerContext,0);
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

class Type_markerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = unoParser.RULE_type_marker;
    }

	T_INT() {
	    return this.getToken(unoParser.T_INT, 0);
	};

	T_FLOAT() {
	    return this.getToken(unoParser.T_FLOAT, 0);
	};

	T_STRING() {
	    return this.getToken(unoParser.T_STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.enterType_marker(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof unoListener ) {
	        listener.exitType_marker(this);
		}
	}


}




unoParser.StartContext = StartContext; 
unoParser.Boolean_expressionContext = Boolean_expressionContext; 
unoParser.Arithmetic_expressionContext = Arithmetic_expressionContext; 
unoParser.Type_markerContext = Type_markerContext; 
