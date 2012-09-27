%{
  #include <stdio.h>
  #include "y.tab.h"
%}

sign                            [+-]
digit                           [0-9]
digits                          [0-9]+
whitespace                      [ \t\n]+

%%

{sign}?{digits}                 yylval = atoi(yytext); return INTEGER;

{sign}?{digits}"."{digits}?(E{sign}?{digits})? {
  yylval = atof(yytext);
  return FLOAT;
}

[+\-*/();]                       { printf("Operator: %s\n", yytext); return *yytext; }

{whitespace}                    /* ignore whitespace */;

%%