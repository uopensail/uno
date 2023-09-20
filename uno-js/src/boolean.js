import assert from "assert";
import * as arithmetic from "./arithmetic.js"
import * as types from "./types.js"

export class BooleanExpression {
    GetId() {
        throw new Error("Not implemented");
    }

    GetType() {
        throw new Error("Not implemented");
    }

    Trivial() {
        throw new Error("Not implemented");
    }

    Negation() {
        throw new Error("Not implemented");
    }

    Simplify() {
        throw new Error("Not implemented");
    }

    ToJson() {
        throw new Error("Not implemented");
    }
}

export class Literal extends BooleanExpression {
    constructor(value) {
        super();
        assert(typeof (value) === "boolean", "Value must be an boolean");
        this.value = value;
        this.id = -1;
    }

    GetId() {
        return this.id;
    }

    GetType() {
        return types.BooleanType.Literal;
    }

    Trivial() {
        return true;
    }

    Negation() {
        this.value = !this.value;
        return this;
    }

    Simplify() {
        return this;
    }

    ToJson() {
        return {
            "id": this.id,
            "ntype": types.NodeType.kLiteralNode,
            "value": this.value,
        }
    }

    ToList() {
        return [this]
    }
}

export class And extends BooleanExpression {
    constructor(left, right) {
        super();
        assert(left instanceof BooleanExpression, "Left must be a BooleanExpression");
        assert(right instanceof BooleanExpression, "Right must be a BooleanExpression");
        this.left = left;
        this.right = right;
        this.id = -1;
    }

    GetId() {
        return this.id;
    }

    GetType() {
        return types.BooleanType.And;
    }

    Trivial() {
        var expr = this.Simplify();
        if (expr == this) {
            return false;
        }
        return expr.Trivial();
    }

    Negation() {
        var left = this.left.Negation();
        var right = this.right.Negation();
        return new Or(left, right);
    }

    Simplify() {
        this.left = this.left.Simplify();
        this.right = this.right.Simplify();
        if (this.left.Trivial()) {
            if (this.left.value) {
                return this.right;
            }
            return new Literal(false);
        }
        if (this.right.Trivial()) {
            if (this.right.value) {
                return this.left;
            }
            return new Literal(false);
        }
        return this;
    }

    ToJson() {
        return {
            "id": this.id,
            "left": this.left.GetId(),
            "right": this.right.GetId(),
            "ntype": types.NodeType.kAndNode,
        }
    }

    ToList() {
        let list = [];
        let left = this.left.ToList();
        let right = this.right.ToList();
        for (let i = 0; i < left.length; i++) {
            list.push(left[i]);
        }
        for (let i = 0; i < right.length; i++) {
            list.push(right[i]);
        }
        list.push(this);
        return list;
    }
}

export class Or extends BooleanExpression {
    constructor(left, right) {
        super();
        assert(left instanceof BooleanExpression, "Left must be a BooleanExpression");
        assert(right instanceof BooleanExpression, "Right must be a BooleanExpression");
        this.left = left;
        this.right = right;
        this.id = -1;
    }

    GetId() {
        return this.id;
    }

    GetType() {
        return types.BooleanType.Or;
    }

    Trivial() {
        var expr = this.Simplify();
        if (expr == this) {
            return false;
        }
        return expr.Trivial();
    }

    Negation() {
        var left = this.left.Negation();
        var right = this.right.Negation();
        return new And(left, right);
    }

    Simplify() {
        this.left = this.left.Simplify();
        this.right = this.right.Simplify();
        if (this.left.Trivial()) {
            if (this.left.value) {
                return new Literal(true);
            }
            return this.right;
        }
        if (this.right.Trivial()) {
            if (this.right.value) {
                return new Literal(true);
            }
            return this.left;
        }
        return this;
    }

    ToJson() {
        return {
            "id": this.id,
            "left": this.left.GetId(),
            "right": this.right.GetId(),
            "ntype": types.NodeType.kOrNode,
        }
    }

    ToList() {
        let list = [];
        let left = this.left.ToList();
        let right = this.right.ToList();
        for (let i = 0; i < left.length; i++) {
            list.push(left[i]);
        }
        for (let i = 0; i < right.length; i++) {
            list.push(right[i]);
        }
        list.push(this);
        return list;
    }
}

export class Cmp extends BooleanExpression {
    constructor(left, right, op) {
        super();
        assert(left instanceof arithmetic.ArithmeticExpression, "Left must be a ArithmeticExpression");
        assert(right instanceof arithmetic.ArithmeticExpression, "Right must be a ArithmeticExpression");
        this.left = left;
        this.right = right;

        if (op === "<>" || op === "!=") {
            op = "!=="
        } else if (op === "=" || op === "==") {
            op = "==="
        }
        this.op = op;
        this.id = -1;
        this.cmp = types.CmpType.kError;
        if (op === "<") {
            this.cmp = types.CmpType.kLessThan;
        } else if (op === "<=") {
            this.cmp = types.CmpType.kLessThanEqual;
        } else if (op === "===") {
            this.cmp = types.CmpType.kEqual;
        } else if (op === ">=") {
            this.cmp = types.CmpType.kGreaterThanEqual;
        } else if (op === ">") {
            this.cmp = types.CmpType.kGreaterThan;
        } else if (op === "!===") {
            this.cmp = types.CmpType.kNotEqual;
        }

        let left_type = this.left.GetDataType();
        let right_type = this.right.GetDataType();
        if (this.op === "in" || this.op === "not in") {
            assert((left_type === types.DataType.kInt64 && right_type === types.DataType.kInt64s)
                || (left_type === types.DataType.kFloat32 && right_type === types.DataType.kFloat32s)
                || (left_type === types.DataType.kString && right_type === types.DataType.kStrings),
                "left and right types not match");
        } else {
            assert(left_type === right_type, "left and right types not match");
        }
        this.dtype = left_type;
    }

    GetId() {
        return this.id;
    }

    GetType() {
        return types.BooleanType.Cmp;
    }

    Trivial() {
        return this.left.Trivial() && this.right.Trivial();
    }

    Simplify() {
        this.left = this.left.Simplify();
        this.right = this.right.Simplify();
        if (!this.Trivial()) {
            return this;
        }
        if (this.op === "in") {
            var ret = eval(`[${this.right.value}].includes(${this.left.value})`)
            return new Literal(ret);
        } else if (this.op === "not in") {
            var ret = eval(`[${this.right.value}].includes(${this.left.value})`)
            return new Literal(!ret);
        } else {
            var ret = eval(`${this.left.value} ${this.op} ${this.right.value}`)
            return new Literal(ret);
        }
    }

    GetDataType() {
        return this.dtype;
    }

    ToJson() {
        if (this.op === "in") {
            return {
                "id": this.id,
                "left": this.left.GetId(),
                "right": this.right.GetId(),
                "ntype": types.NodeType.kInNode,
                "dtype": this.GetDataType(),
            }
        } else if (this.op === "not in") {
            return {
                "id": this.id,
                "left": this.left.GetId(),
                "right": this.right.GetId(),
                "ntype": types.NodeType.kInNode,
                "dtype": this.GetDataType(),
            }
        }
        return {
            "id": this.id,
            "left": this.left.GetId(),
            "right": this.right.GetId(),
            "ntype": types.NodeType.kCmpNode,
            "dtype": this.GetDataType(),
            "cmp": this.cmp,
        }
    }

    ToList() {
        let list = [];
        let left = this.left.ToList();
        let right = this.right.ToList();
        for (let i = 0; i < left.length; i++) {
            list.push(left[i]);
        }
        for (let i = 0; i < right.length; i++) {
            list.push(right[i]);
        }
        list.push(this);
        return list;
    }
}