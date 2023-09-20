import assert from "assert";
import * as builtins from "./builtins.js";
import * as types from "./types.js";


export class ArithmeticExpression {
    GetId() {
        throw new Error("Not implemented");
    }

    GetDataType() {
        throw new Error("Not implemented");
    }

    GetType() {
        throw new Error("Not implemented");
    }

    Trivial() {
        throw new Error("Not implemented");
    }

    Simplify() {
        throw new Error("Not implemented");
    }

    ToJson() {
        throw new Error("Not implemented");
    }

    ToList() {
        throw new Error("Not implemented");
    }
}

export class Int64 extends ArithmeticExpression {
    constructor(value) {
        super();
        assert(Number.isInteger(value), "Value must be an integer");
        this.value = value;
        this.id = -1;
    }

    GetId() {
        return this.id;
    }

    GetType() {
        return types.ArithmeticType.Int64;
    }

    Trivial() {
        return true;
    }

    Simplify() {
        return this;
    }

    ToJson() {
        return {
            "id": this.id,
            "ntype": types.NodeType.kInt64Node,
            "value": this.value,
        }
    }

    ToList() {
        return [this];
    }

    GetDataType() {
        return types.DataType.kInt64;
    }
}

export class Int64s extends ArithmeticExpression {
    constructor(value) {
        super();
        assert(value instanceof Array, "Value must be an array");
        this.value = [];
        for (var i = 0; i < value.length; i++) {
            assert(Number.isInteger(value[i]), "Value must be an integer");
            this.value.push(value[i]);
        }
        this.id = -1;
    }

    GetId() {
        return this.id;
    }

    GetDataType() {
        return types.DataType.kInt64s;
    }

    GetType() {
        return types.ArithmeticType.Int64s;
    }

    Trivial() {
        return true;
    }

    Simplify() {
        return this;
    }

    ToJson() {
        return {
            "id": this.id,
            "ntype": types.NodeType.kInt64SliceNode,
            "value": this.value,
        }
    }

    ToList() {
        return [this];
    }
}


export class Float32 extends ArithmeticExpression {
    constructor(value) {
        super();
        this.value = value;
        this.id = -1;
    }

    GetId() {
        return this.id;
    }

    GetDataType() {
        return types.DataType.kFloat32;
    }

    GetType() {
        return types.ArithmeticType.Float32;
    }

    Trivial() {
        return true;
    }

    Simplify() {
        return this;
    }

    ToJson() {
        return {
            "id": this.id,
            "ntype": types.NodeType.kFloat32Node,
            "value": this.value,
        }
    }

    ToList() {
        return [this];
    }
}

export class Float32s extends ArithmeticExpression {
    constructor(value) {
        super();
        assert(value instanceof Array, "Value must be an array");
        this.value = [];
        for (var i = 0; i < value.length; i++) {
            this.value.push(value[i]);
        }
        this.id = -1;
    }

    GetId() {
        return this.id;
    }

    GetDataType() {
        return types.DataType.kFloat32s;
    }

    GetType() {
        return types.ArithmeticType.Float32s;
    }

    Trivial() {
        return true;
    }

    Simplify() {
        return this;
    }

    ToJson() {
        return {
            "id": this.id,
            "ntype": types.NodeType.kFloat32SliceNode,
            "value": this.value,
        }
    }

    ToList() {
        return [this];
    }
}

export class String extends ArithmeticExpression {
    constructor(value) {
        super();
        assert(typeof value === "string", "Value must be a string");
        this.value = value;
        this.id = -1;
    }

    GetId() {
        return this.id;
    }

    GetDataType() {
        return types.DataType.kString;
    }

    GetType() {
        return types.ArithmeticType.String;
    }

    Trivial() {
        return true;
    }

    Simplify() {
        return this;
    }

    ToJson() {
        return {
            "id": this.id,
            "ntype": types.NodeType.kStringNode,
            "value": this.value,
        }
    }

    ToList() {
        return [this];
    }
}

export class Strings extends ArithmeticExpression {
    constructor(value) {
        super();
        assert(value instanceof Array, "Value must be an array");
        this.value = [];
        for (var i = 0; i < value.length; i++) {
            assert(typeof (value[i]) === "string", "Value must be a string");
            this.value.push(value[i]);
        }
        this.id = -1;
    }

    GetId() {
        return this.id;
    }

    GetType() {
        return types.ArithmeticType.Strings;
    }

    Trivial() {
        return true;
    }

    Simplify() {
        return this;
    }

    GetDataType() {
        return types.DataType.kStrings;
    }

    ToJson() {
        return {
            "id": this.id,
            "ntype": types.NodeType.kStringSliceNode,
            "value": this.value,
        }
    }

    ToList() {
        return [this];
    }

}

export class Function extends ArithmeticExpression {
    constructor(func, args) {
        super();
        assert(typeof func === "string", "func must be a string");
        assert(args instanceof Array, "Value must be an array");
        this.func = func;
        this.args = [];
        // support +,-,*,/
        if (this.func === "+" || this.func === "-" || this.func === "*" || this.func === "/") {
            assert(args.length === 2, `${this.func} arg length != 2`);
            assert(args[0].GetDataType() === args[1].GetDataType(), "args data type not match");
            var dic = {
                "+": "add",
                "-": "sub",
                "*": "mul",
                "/": "div",
            };
            if (args[0].GetDataType() === types.DataType.kFloat32) {
                this.func = `${dic[this.func]}f`
                this.args.push(args[0]);
                this.args.push(args[1]);
            } else if (args[0].GetDataType() === types.DataType.kInt64) {
                this.func = `${dic[this.func]}i`
                this.args.push(args[0]);
                this.args.push(args[1]);
            } else {
                throw new Error(`type: ${args[0].GetDataType()} not support`)
            }
        } else {
            let io = builtins.function_io_types[this.func];
            assert(io !== undefined, `${func} not defined`);
            for (var i = 0; i < args.length; i++) {
                assert(args[i] instanceof ArithmeticExpression, "arg must be an arithmetic expression");
                assert(args[i].GetDataType() === io["in"][i], `args[${i}] type not matching`);
                this.args.push(args[i]);
            }
        }
        this.id = -1;
    }

    GetId() {
        return this.id;
    }

    GetDataType() {
        let io = builtins.function_io_types[this.func];
        if (io === undefined) {
            return types.DataType.kError;
        }
        return io["out"][0]
    }

    GetType() {
        return types.ArithmeticType.Function;
    }

    Trivial() {
        if (this.args.length === 0) {
            return false;
        }
        for (var i = 0; i < this.args.length; i++) {
            if (!this.args[i].Trivial()) {
                return false;
            }
        }
        return true;
    }

    Simplify() {
        for (let i = 0; i < this.args.length; i++) {
            this.args[i] = this.args[i].Simplify();
        }

        if (!this.Trivial()) {
            return this;
        }

        if (this.func === "round" || this.func === "floor" || this.func === "ceil"
            || this.func === "exp" || this.func === "log" || this.func === "log10"
            || this.func === "log2" || this.func === "sqrt" || this.func === "abs"
            || this.func === "sin" || this.func === "cos" || this.func === "tan"
            || this.func === "asin" || this.func === "acos" || this.func === "atan"
            || this.func === "sinh" || this.func === "cosh" || this.func === "tanh"
            || this.func === "asinh" || this.func === "acosh" || this.func === "atanh") {
            assert(this.args.length === 1, "Arguments must be equal to 1");
            return new Float32(Math[this.func](this.args[0].value));
        } else if (this.func === "+" || this.func === "-" || this.func === "*"
            || this.func === "/" || this.func === "%") {
            assert(this.args.length === 2, "argument length must be equal to 2");
            var ret = eval(`${this.args[0].value} ${this.func} ${this.args[1].value}`);
            if (Number.isInteger(ret)) {
                return new Int64(ret);
            }
            return new Float32(ret);
        } else if (this.func === "unix_timestamp" || this.func === "year" || this.func === "month"
            || this.func === "day" || this.func === "hour" || this.func === "minute" || this.func === "second"
            || this.func === "from_unixtime" || this.func === "reverse" || this.func === "upper" || this.func === "lower"
            || this.func === "trim") {
            assert(this.args.length === 1, "argument length must be equal to 1");
            var ret = builtins[this.func](this.args[0].value);
            return new Int64(ret);
        } else if (this.func === "min" || this.func === "minf" || this.func === "max"
            || this.func === "maxf" || this.func === "addf" || this.func === "subf"
            || this.func === "mulf" || this.func === "divf") {
            assert(this.args.length === 2, "argument length must be equal to 2");
            return new Float32(builtins[this.func](this.args[0].value, this.args[1].value));
        } else if (this.func === "mini" || this.func === "maxi" || this.func === "addi"
            || this.func === "subi" || this.func === "muli" || this.func === "divi") {
            assert(this.args.length === 2, "argument length must be equal to 2");
            return new Int64(builtins[this.func](this.args[0].value, this.args[1].value));
        } else if (this.func === "concat" || this.func === "date_add" || this.func === "date_sub"
            || this.func === "date_diff") {
            assert(this.args.length === 2, "argument length must be equal to 2");
            return new String(builtins[this.func](this.args[0].value, this.args[1].value));
        } else if (this.func === "substr") {
            assert(this.args.length === 3, "argument length must be equal to 3");
            return new String(builtins[this.func](this.args[0].value, this.args[1].value, this.args[2].value));
        }
        throw new Error(`${this.func} Not implemented`);
    }

    ToJson() {
        let args = [];
        for (let i = 0; i < this.args.length; i++) {
            args.push(this.args[i].GetId());
        }
        return {
            "id": this.id,
            "ntype": types.NodeType.kFunctionNode,
            "args": args,
            "func": this.func,
        }
    }

    ToList() {
        let list = [];
        for (let i = 0; i < this.args.length; i++) {
            list.push(this.args[i]);
        }
        list.push(this);
        return list;
    }
}

export class Column extends ArithmeticExpression {
    constructor(value, dtype) {
        super();
        assert(typeof value === "string", "Value must be a string");
        this.value = value;
        dtype = dtype.toLowerCase();
        this.dtype = types.DataType.kError;
        if (dtype === "[int64]") {
            this.dtype = types.DataType.kInt64;
        } else if (dtype === "[float32]") {
            this.dtype = types.DataType.kFloat32;
        } else if (dtype === "[string]") {
            this.dtype = types.DataType.kString;
        } else if (dtype === "[int64s]") {
            this.dtype = types.DataType.kInt64s;
        } else if (dtype === "[float32s]") {
            this.dtype = types.DataType.kFloat32s;
        } else if (dtype === "[strings]") {
            this.dtype = types.DataType.kStrings;
        }
        this.id = -1;
    }

    GetId() {
        return this.id;
    }

    GetDataType() {
        return this.dtype;
    }

    GetType() {
        return types.ArithmeticType.Column;
    }

    Trivial() {
        return false;
    }

    Simplify() {
        return this;
    }

    ToJson() {
        return {
            "id": this.id,
            "ntype": types.NodeType.kVarNode,
            "value": this.value,
            "dtype": this.dtype,
        }
    }

    ToList() {
        return [this];
    }
}