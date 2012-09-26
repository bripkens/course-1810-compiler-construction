/* declarations */
%{
  #define OPEN                  1000
  #define CLOSE                 1001

  #define INTEGER               1002

  int yylval;
%}

sign                            [+-]
digit                           [0-9]
digits                          [0-9]+
whitespace                      [ \t\n]+

%% /* token definitions and actions */

{whitespace}                    /* ignore whitespace */;
{sign}?{digits}                 {
                                  yylval = atoi(yytext);
                                  printf("A digit: %d!\n", yylval);
                                  return INTEGER;
                                }

%% /* utility procedures / main etc. */