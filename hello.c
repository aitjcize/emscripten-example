#include <stdio.h>

#include "console.h"

void say_hello() {
  console_log("Hello, World!\n");
}

int main(int argc, const char *argv[])
{
  say_hello();
  return 0;
}
