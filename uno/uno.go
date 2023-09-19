package eval

/*
#cgo CXXFLAGS: -std=c++17
#include <stdlib.h>
#include "uno.h"
*/
import "C"

import (
	"unsafe"
)

type DataType int32

const (
	Int64 DataType = iota
	Float32
	String
	Int64s
	Float32s
	Strings
	Error DataType = 127
)

type Column struct {
	Addr   int32
	Column string
}

type Columns struct {
	addrs []int32
	cols  []string
}

type Expression struct {
	columns  Columns
	varSlice []unsafe.Pointer
}

type Evaluator struct {
	expression unsafe.Pointer
	columns    map[string]Column
}

func NewEvaluator(code string) *Evaluator {
	bytes := *(*[]byte)(unsafe.Pointer(&code))
	expr := C.uno_create_expression(unsafe.Pointer(&bytes[0]), C.int(len(code)))
	columns := make(map[string]Column)
	cols := (*Expression)(expr).columns
	for i := 0; i < len(cols.addrs); i++ {
		columns[cols.cols[i]] = Column{
			Addr:   cols.addrs[i],
			Column: cols.cols[i],
		}
	}
	return &Evaluator{expression: expr, columns: columns}
}

func (e *Evaluator) Fill(col string, data interface{}, value []unsafe.Pointer) {
	column, ok := e.columns[col]
	if !ok {
		return
	}

	checkFill(data, &column, value)
}

func (e *Evaluator) Allocate() []unsafe.Pointer {
	ret := make([]unsafe.Pointer, len((*Expression)(e.expression).varSlice))
	copy(ret, (*Expression)(e.expression).varSlice)
	return ret
}

func (e *Evaluator) Eval(slice []unsafe.Pointer) int32 {
	return int32(C.uno_eval(e.expression, (*C.char)(unsafe.Pointer(&slice))))
}

func (e *Evaluator) PreEval(slice []unsafe.Pointer) {
	C.uno_preeval(e.expression, (*C.char)(unsafe.Pointer(&slice)))
}

func (e *Evaluator) BatchEval(slices [][]unsafe.Pointer) []int32 {
	ret := make([]int32, len(slices))
	C.uno_batch_eval(e.expression, (*C.char)(unsafe.Pointer(&slices)), (*C.char)(unsafe.Pointer(&ret)))
	return ret
}

func (e *Evaluator) Clean(slice []unsafe.Pointer) {
	C.uno_clean_varslice(e.expression, (*C.char)(unsafe.Pointer(&slice)))
}

func (e *Evaluator) Release() {
	C.uno_release_expression(unsafe.Pointer(e.expression))
}

func checkFill(data interface{}, col *Column, value []unsafe.Pointer) {
	switch v := data.(type) {
	case int64:
		value[col.Addr] = unsafe.Pointer(&v)
	case float32:
		value[col.Addr] = unsafe.Pointer(&v)
	case string:
		value[col.Addr] = unsafe.Pointer(&v)
	case []int64:
		value[col.Addr] = unsafe.Pointer(&v)
	case []float32:
		value[col.Addr] = unsafe.Pointer(&v)
	case []string:
		value[col.Addr] = unsafe.Pointer(&v)
	default:
		return
	}
}
