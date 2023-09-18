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

#ifndef UNO_GO_HPP
#define UNO_GO_HPP

#pragma once

#include <assert.h>
#include <cstring>
#include <iostream>
#include <string>
#include <string_view>
#include <vector>

enum DataType : int32_t {
  kInt64 = 0,
  kFloat32,
  kString,
  kInt64s,
  kFloat32s,
  kStrings,
  kError = 127,
};

typedef struct GoString {
  char *ptr;
  size_t len;

  GoString(size_t len) {
    ptr = (char *)calloc(len, 1);
    len = len;
  }

  GoString(const std::string &str) {
    len = str.size();
    ptr = (char *)malloc(len);
    memcpy(ptr, str.c_str(), len);
  }

  GoString(const GoString &s) {
    len = s.len;
    ptr = (char *)malloc(len);
    memcpy(ptr, s.ptr, len);
  }

  void operator=(const GoString &s) {
    if (ptr != nullptr) {
      free(ptr);
    }
    len = s.len;
    ptr = (char *)malloc(len);
    memcpy(ptr, s.ptr, len);
  }

  void operator=(const std::string &s) {
    if (ptr != nullptr) {
      free(ptr);
    }
    len = s.size();
    ptr = (char *)malloc(len);
    memcpy(ptr, s.c_str(), len);
  }

  ~GoString() {
    if (ptr != nullptr) {
      free(ptr);
    }
  }

  size_t size() { return len; }

  bool operator==(const GoString &s) {
    if (len != s.len) {
      return false;
    }
    if (ptr == s.ptr) {
      return true;
    }
    for (size_t i = 0; i < len; i++) {
      if (ptr[i] != s.ptr[i]) {
        return false;
      }
    }
    return true;
  }

  bool operator<(const GoString &s) const {
    return std::string_view{ptr, len} < std::string_view{s.ptr, s.len};
  }

  bool operator<=(const GoString &s) const {
    return std::string_view{ptr, len} <= std::string_view{s.ptr, s.len};
  }

  bool operator>=(const GoString &s) const {
    return std::string_view{ptr, len} >= std::string_view{s.ptr, s.len};
  }

  bool operator>(const GoString &s) const {
    return std::string_view{ptr, len} > std::string_view{s.ptr, s.len};
  }

  bool operator!=(const GoString &s) const {
    return std::string_view{ptr, len} != std::string_view{s.ptr, s.len};
  }

} GoString, *GoStringPtr;

template <typename T> struct GoSlice {
  T *ptr;
  size_t len;
  size_t cap;
  GoSlice() : ptr(nullptr), len(0), cap(0) {}

  GoSlice(const GoSlice &slice) {
    len = slice.len;
    cap = slice.cap;
    ptr = (T *)calloc(cap, sizeof(T));
    memcpy(ptr, slice.ptr, len * sizeof(T));
  }

  GoSlice(const std::vector<T> &slice) {
    len = slice.size();
    cap = slice.size();
    ptr = (T *)calloc(cap, sizeof(T));
    for (size_t i = 0; i < len; i++) {
      ptr[i] = slice[i];
    }
  }

  ~GoSlice() {
    if (ptr != nullptr) {
      free(ptr);
    }
  }

  void operator=(const GoSlice &slice) {
    if (ptr != nullptr) {
      free(ptr);
    }
    len = slice.size();
    cap = slice.size();
    ptr = (T *)calloc(cap, sizeof(T));
    for (size_t i = 0; i < len; i++) {
      ptr[i] = slice[i];
    }
  }

  void operator=(const std::vector<T> &slice) {
    if (ptr != nullptr) {
      free(ptr);
    }
    len = slice.size();
    cap = slice.size();
    ptr = (T *)calloc(cap, sizeof(T));
    for (size_t i = 0; i < len; i++) {
      ptr[i] = slice[i];
    }
  }

  T &operator[](size_t i) {
    assert(0 <= i && i < cap);
    return ptr[i];
  }

  void reverse() {
    T v;
    for (size_t i = 0; i < len / 2; i++) {
      v = ptr[i];
      ptr[i] = ptr[len - 1 - i];
      ptr[len - 1 - i] = v;
    }
  }

  void print() {
    std::cout << "[";
    for (size_t i = 0; i < len; i++) {
      if (i) {
        std::cout << ",";
      }
      std::cout << ptr[i];
    }
    std::cout << "]" << std::endl;
  }

  size_t size() { return len; }
};
template <typename T> using Slice = struct GoSlice<T>;

using Int32Slice = Slice<int32_t>;
using Int64Slice = Slice<int64_t>;
using StringSlice = Slice<GoString>;
using Float32Slice = Slice<float>;
using TypeSlice = Slice<DataType>;
using VarSlice = Slice<void *>;

#endif // UNO_GO_HPP