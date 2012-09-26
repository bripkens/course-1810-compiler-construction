SCANNER_TAGET_FILE=scanner
CC=gcc

build:
	lex scanner.l
	$(CC) lex.yy.c -o $(SCANNER_TAGET_FILE) -ll

run: build
	./scanner

clean:
	rm -f $(SCANNER_TAGET_FILE) *.c