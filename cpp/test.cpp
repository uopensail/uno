#include <fstream>
#include <iostream>
#include <sstream>
#include <string>

#include "expr.hpp"

int main() {
  std::ifstream infile("nodes.json");
  std::stringstream ss;
  std::string line;
  while (std::getline(infile, line)) {
    ss << line << std::endl;
  }
  std::string file_contents = ss.str();
  std::cout << file_contents << std::endl;
  infile.close();

  Expression expr(file_contents);
  VarSlice vars(expr.varslice);
  int32_t status = expr(&vars);
  std::cout << status << std::endl;
  return 0;
}