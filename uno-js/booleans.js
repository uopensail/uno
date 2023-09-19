import assert from "assert";
import * as arithmetic from "./arithmetic"
import * as types from "./types"

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
        assert(value instanceof boolean, "Value must be an boolean");
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
        throw new Error("Not implemented");
    }

    ToList() {
        throw new Error("Not implemented");
    }
}

export class And extends BooleanExpression {
    constructor(left, right) {
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
        return Or(left, right);
    }

    Simplify() {
        this.left = this.left.Simplify();
        this.right = this.right.Simplify();
        if (this.left.Trivial()) {
            if (this.left.value) {
                return this.right;
            }
            return Literal(false);
        }
        if (this.right.Trivial()) {
            if (this.right.value) {
                return this.left;
            }
            return Literal(false);
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
        return And(left, right);
    }

    Simplify() {
        this.left = this.left.Simplify();
        this.right = this.right.Simplify();
        if (this.left.Trivial()) {
            if (this.left.value) {
                return Literal(true);
            }
            return this.right;
        }
        if (this.right.Trivial()) {
            if (this.right.value) {
                return Literal(true);
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
        var ret = eval(`${this.left.value} ${this.op} ${this.right.value}`)
        return Literal(ret);
    }

    GetDataType() {
        if (this.right instanceof arithmetic.Float32s) {
            return types.DataType.kFloat32;
        } else if (this.right instanceof arithmetic.Int64s) {
            return types.DataType.kInt64;
        } else if (this.right instanceof arithmetic.Strings) {
            return types.DataType.kString;
        }
        return types.DataType.kError;
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