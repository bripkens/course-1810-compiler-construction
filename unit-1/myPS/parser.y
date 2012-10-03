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

%union {
  int  intval;
  float floatval;
  char * stringval;
}

%token <intval> INTEGER
%token <floatval> FLOAT
%token <stringval> LIT_STRING
%token DEC_PICTURE
%token DEC_START
%token DEC_END
%token VAR
%token <stringval> ID

 %type <intval> expr term factor

%start root
%%

root
  : DEC_PICTURE LIT_STRING dec_variables DEC_START commands DEC_END {
    printf("Declaring picture %s\n", $2);
  }
  ;

dec_variables
  : dec_variable dec_variables
  |
  ;

dec_variable
  : VAR ID ':' ID ';'       {
    printf("Declaring var %s with type %s\n", $2, $4);
  }
  ;

commands
  : statement commands
  |
  ;

statement
  : expr ';'
  ;

 expr
  : term                    {$$ = $1;}
  | expr '+' term           {$$ = $1 + $3;}
  | expr '-' term           {$$ = $1 - $3;}
  ;

 term
  : factor                  {$$ = $1;}
  | term '*' factor         {$$ = $1 * $3;}
  | term '/' factor         {$$ = $1 / $3;}
  ;

 factor
  : INTEGER                 {$$ = $1;}
  | '(' expr ')'            {$$ = $2;}
  ;