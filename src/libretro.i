%module "libretro"

%include "cmalloc.i"
%malloc(int);
%free(int);

%{

#include "libretro.h"

%}

%include "libretro.h"
