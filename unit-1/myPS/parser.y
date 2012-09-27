%{
  #include <stdio.h>
  #include <string.h>

  void yyerror(const char *str) {
      fprintf(stderr,"error: %s\n",str);
  }

  int yywrap() {
      return 1;
  }

  main() {
      yyparse();
  }
%}

%token INTEGER FLOAT

%start statement
%%

statement
  : expr ';' { printf("Expression result: %d", $1); }

expr
  : expr '+' term { return $1 + $3; } // TODO somehow return those values...
  | expr '-' term
  | term { printf("Term: %d\n", $1); }
  ;

term
  : term '*' factor
  | term '/' factor
  | factor { printf("factor: %d\n", $1); }
  ;

factor
  : INTEGER
  | FLOAT
  | '(' expr ')'
  ;