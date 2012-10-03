%{
  #include <stdio.h>
  #include "y.tab.h"
%}

sign                            [+-]
digit                           [0-9]
digits                          [0-9]+
whitespace                      [ \t\n]+

%%

{sign}?{digits}                 yylval.intval = atoi(yytext); return INTEGER;

{sign}?{digits}"."{digits}?(E{sign}?{digits})? {
  yylval.floatval = atof(yytext);
  return FLOAT;
}

\"[^"]*\"                       {
  yylval.stringval = (char *)malloc(yyleng+1);
  strcpy(yylval.stringval, yytext);
  return LIT_STRING;
}

picture                         return DEC_PICTURE;
start                           return DEC_START;
end                             return DEC_END;
var                             return VAR;

[a-zA-Z][a-zA-z0-9]*            {
  yylval.stringval = (char *)malloc(yyleng+1);
  strcpy(yylval.stringval, yytext);
  return ID;
}

%%