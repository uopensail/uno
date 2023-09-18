#include "uno.h"
#include "expr.hpp"

#ifdef __cplusplus
extern "C" {
#endif

void *uno_create_expression(void *str, int len) {
  return new Expression(std::string_view((char *)str, len));
}

void uno_release_expression(void *expression) {
  if (expression != nullptr) {
    delete (Expression *)expression;
  }
}

void uno_clean_varslice(void *expression, char *slice) {
  if (expression == nullptr || slice == nullptr) {
    return;
  }
  Expression *expr = (Expression *)expression;
  VarSlice *vars = (VarSlice *)slice;
  for (size_t i = 0; i < expr->columns.addr.size(); i++) {
    (*vars)[expr->columns.addr[i]] = nullptr;
  }
  for (size_t i = 0; i < vars->size(); i++) {
    if ((*vars)[i] != nullptr) {
      free((*vars)[i]);
    }
  }
}

void uno_preeval(void *expression, char *slice) {
  if (expression == nullptr || slice == nullptr) {
    return;
  }
  Expression *expr = (Expression *)expression;
  (*expr)((VarSlice *)slice);
}

int uno_eval(void *expression, char *slice) {
  if (expression == nullptr || slice == nullptr) {
    return -1;
  }
  Expression *expr = (Expression *)expression;
  VarSlice *ptr = (VarSlice *)slice;

  // copy for thread safety
  VarSlice vars = *ptr;
  int32_t status = (*expr)(&vars);

  for (size_t i = 0; i < vars.size(); i++) {
    if ((*ptr)[i] == nullptr && vars[i] != nullptr) {
      free(vars[i]);
    }
  }
  return status;
}

void uno_batch_eval(void *expression, char *slices, char *result) {
  if (expression == nullptr || slices == nullptr || result == nullptr) {
    return;
  }
  Expression *expr = (Expression *)expression;
  Slice<VarSlice *> *array = (Slice<VarSlice *> *)slices;

  int32_t status = -1;
  Int32Slice *ret = (Int32Slice *)result;
  ret->len = array->size();
  VarSlice *ptr = nullptr;
  for (size_t i = 0; i < array->size(); i++) {
    ptr = (*array)[i];
    // copy for thread safety
    VarSlice var = *ptr;
    status = (*expr)(&var);
    (*ret)[i] = status;
    for (size_t i = 0; i < var.size(); i++) {
      if ((*ptr)[i] == nullptr && var[i] != nullptr) {
        free(var[i]);
      }
    }
  }
}

#ifdef __cplusplus
};
#endif