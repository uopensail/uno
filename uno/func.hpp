//
// `UNO` - 'uno is expression engine written in c++'
// Copyright (C) 2019 - present timepi <timepi123@gmail.com>
// UNO is provided under: GNU Affero General Public License (AGPL3.0)
// https://www.gnu.org/licenses/agpl-3.0.html unless stated otherwise.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU Affero General Public License for more details.
//

#ifndef UNO_FUNC_HPP
#define UNO_FUNC_HPP

#pragma once

#include <functional>
#include <map>
#include <string>

#include "builtins.h"
#include "go.hpp"

struct Function;
using Call = std::function<void *(struct Function *, VarSlice *)>;

struct Function {
  Call func;
  Int32Slice args;
  Function() : func(nullptr) {}
  Function(const Function &f) : func(f.func), args(f.args) {}
  ~Function() {}
  void *operator()(VarSlice *vars) { return func(this, vars); }
};
using Function = struct Function;

class CallHelper {
public:
  CallHelper() = delete;
  CallHelper(Function *func, VarSlice *vars)
      : func_(func), vars_(vars), index_(0) {}
  ~CallHelper() = default;
  template <typename T> T *get() {
    return (T *)((*vars_)[func_->args[index_++]]);
  }

private:
  Function *func_;
  VarSlice *vars_;
  int32_t index_;
};

static bool contain_nullptr() { return false; }

template <typename T, typename... Args>
static bool contain_nullptr(T *arg, Args *... args) {
  if constexpr (sizeof...(Args) == 0) {
    return arg == nullptr;
  } else {
    return contain_nullptr(args...);
  }
}

template <typename T0, typename... ArgsType>
T0 *safe_func_call(T0 *(*func)(ArgsType *...), ArgsType *... args) {
  if (contain_nullptr(args...)) {
    return nullptr;
  }
  return func(args...);
}

template <typename T0, typename... ArgsType>
Call get_func_call(T0 *(*f)(ArgsType *...)) {
  auto foo = [f](Function *func, VarSlice *vars) -> void * {
    CallHelper helper(func, vars);
    return safe_func_call<T0, ArgsType...>(f, helper.get<ArgsType>()...);
  };
  return foo;
}

const std::map<std::string, Call> builtin_functions = {
    {"+", get_func_call(_add<float>)},
    {"-", get_func_call(_sub<float>)},
    {"*", get_func_call(_mul<float>)},
    {"/", get_func_call(_div<float>)},
    {"%", get_func_call(_mod)},
    {"addi", get_func_call(_add<int64_t>)},
    {"addf", get_func_call(_add<float>)},
    {"subi", get_func_call(_sub<int64_t>)},
    {"subf", get_func_call(_sub<float>)},
    {"muli", get_func_call(_mul<int64_t>)},
    {"mulf", get_func_call(_mul<float>)},
    {"divi", get_func_call(_div<int64_t>)},
    {"divf", get_func_call(_div<float>)},
    {"mod", get_func_call(_mod)},
    {"pow", get_func_call(_pow)},
    {"round", get_func_call(_round)},
    {"floor", get_func_call(_floor)},
    {"ceil", get_func_call(_ceil)},
    {"log", get_func_call(_log)},
    {"exp", get_func_call(_exp)},
    {"log10", get_func_call(_log10)},
    {"log2", get_func_call(_log2)},
    {"sqrt", get_func_call(_sqrt)},
    {"abs", get_func_call(_abs<float>)},
    {"absi", get_func_call(_abs<int64_t>)},
    {"absf", get_func_call(_abs<float>)},
    {"sin", get_func_call(_sin)},
    {"asin", get_func_call(_asin)},
    {"sinh", get_func_call(_sinh)},
    {"asinh", get_func_call(_asinh)},
    {"cos", get_func_call(_cos)},
    {"acos", get_func_call(_acos)},
    {"cosh", get_func_call(_cosh)},
    {"acosh", get_func_call(_acosh)},
    {"tan", get_func_call(_tan)},
    {"atan", get_func_call(_atan)},
    {"tanh", get_func_call(_tanh)},
    {"atanh", get_func_call(_atanh)},
    {"sigmoid", get_func_call(_sigmoid)},
    {"min", get_func_call(min<float>)},
    {"mini", get_func_call(min<int64_t>)},
    {"minf", get_func_call(min<float>)},
    {"max", get_func_call(max<float>)},
    {"maxi", get_func_call(max<int64_t>)},
    {"maxf", get_func_call(max<float>)},
    {"year", get_func_call(year)},
    {"month", get_func_call(month)},
    {"day", get_func_call(day)},
    {"date", get_func_call(date)},
    {"hour", get_func_call(hour)},
    {"minute", get_func_call(minute)},
    {"second", get_func_call(second)},
    {"now", get_func_call(now)},
    {"from_unixtime", get_func_call(from_unixtime)},
    {"unix_timestamp", get_func_call(unix_timestamp)},
    {"date_add", get_func_call(date_add)},
    {"date_sub", get_func_call(date_sub)},
    {"date_diff", get_func_call(date_diff)},
    {"reverse", get_func_call(reverse)},
    {"upper", get_func_call(upper)},
    {"lower", get_func_call(lower)},
    {"concat", get_func_call(concat)},
    {"castf2i", get_func_call(cast<int64_t, float>)},
    {"casti2f", get_func_call(cast<float, int64_t>)},
};

#endif // UNO_FUNC_HPP