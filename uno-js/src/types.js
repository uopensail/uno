export const ArithmeticType = {
    Function: "function",
    Column: "column",
    Int64: "int64",
    Int64s: "int64s",
    Float32: "float32",
    Float32s: "float32s",
    String: "string",
    Strings: "strings",
    Error: "error",
}

export const NodeType = {
    kVarNode: 0,
    kInt64Node: 1,
    kInt64SliceNode: 2,
    kFloat32Node: 3,
    kFloat32SliceNode: 4,
    kStringNode: 5,
    kStringSliceNode: 6,
    kFunctionNode: 7,
    kAndNode: 8,
    kOrNode: 9,
    kCmpNode: 10,
    kInNode: 11,
    kNotInNode: 12,
    kLiteralNode: 13,
    kErrorNode: 127,
};

export const BooleanType = {
    Literal: "literal",
    And: "and",
    Or: "or",
    Cmp: "cmp",
    Error: "error",
}

export const DataType = {
    kInt64: 0,
    kFloat32: 1,
    kString: 2,
    kInt64s: 3,
    kFloat32s: 4,
    kStrings: 5,
    kError: 127,
};

export const CmpType = {
    kNil: 0,
    kEqual: 1,
    kNotEqual: 2,
    kGreaterThan: 3,
    kGreaterThanEqual: 4,
    kLessThan: 5,
    kLessThanEqual: 6,
    kError: 127,
};