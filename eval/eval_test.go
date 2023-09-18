package eval

import (
	"fmt"
	"testing"
)

func TestEval(t *testing.T) {
	code := `{
		"nodes":[
			{
				"id":0,
				"ntype": 0,
				"dtype": 0,
				"value": "A"
			},
			{
				"id":1,
				"ntype": 1,
				"dtype": 0,
				"value": 7
			},
			{
				"id":2,
				"ntype": 7,
				"func": "addi",
				"args":[0, 1]
			},
			{
				"id":3,
				"ntype": 1,
				"dtype": 0,
				"value": 14
			},
			{
				"id":4,
				"ntype": 10,
				"left": 2,
				"right": 3,
				"dtype": 0,
				"cmp": 4
			}
		]
	}`
	instance := NewEvaluator(code)
	slice := instance.Allocate()
	fmt.Printf("%v\n", slice)
	instance.Fill("A", int64(1000), slice)

	instance.PreEval(slice)
	defer instance.Clean(slice)

	fmt.Printf("%v\n", slice)
	fmt.Println(instance.Eval(slice))
}
