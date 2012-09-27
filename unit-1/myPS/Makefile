TAGET_FILE=scanner
CC=gcc

build:
	lex scanner.l
	yacc -d parser.y
	$(CC) lex.yy.c y.tab.c -o $(TAGET_FILE)

run: build
	./$(TAGET_FILE)

clean:
	rm -f $(TAGET_FILE) *.c *.h