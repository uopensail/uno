cmake_minimum_required(VERSION 3.16)
project(uno)

set(CMAKE_CXX_STANDARD 17)

if(CMAKE_COMPILER_IS_GNUCXX)
add_compile_definitions(__GCC__)
endif(CMAKE_COMPILER_IS_GNUCXX)

include_directories(include)
include_directories(/usr/local/include)
include_directories(/usr/include)

link_directories(/usr/local/lib)

SET(UNO_SOURCE cpp/builtins.h cpp/builtins.cpp cpp/expr.hpp 
cpp/func.hpp cpp/go.hpp cpp/json.hpp cpp/node.hpp)

add_executable(test  ${UNO_SOURCE} cpp/test.cpp)