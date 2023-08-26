# Lexer

In this project you can learn how you can create your own computer language.

## Init
```
npm ci
npm start
```

## Dependencies
* node^18.0.0

# Theory
Code execution consists of several steps: Lexical analisys (lexer), ... (parser), ...

### Lexer
Lexer takes raw text and outputs array of tokens.
Token examples:

| token name    | token values                 | decription                                            |
| ------------- | ---------------------------- | ----------------------------------------------------- |
| identifier    | `x`, `color`, `UP`           | names the programmer chooses                          |
| keyword       | `if`, `while`, `return`      | names already in the programming language             |
| separator     | `}`, `(`, `;`                | punctuation characters and paired-delimiters          |
| operator      | `+`, `<`, `=`                | symbols that operate on arguments and produce results |
| literal       | `true`, `6.02e23`, `"music"` | numeric, logical, textual, reference literals         |
| comment       | `//  some comment`           | comments                                              |

Execution example:
```
Lexer('x = 5') => [{ type: identifier, value: 'x' }, { type: operator, value: '=' }, { type: literal, value: 5 }]
```

## Sources
* (Wiki: Lexical analysis)[https://en.wikipedia.org/wiki/Lexical_analysis#Lexeme]
* (Wiki: Abstract syntax tree)[https://en.wikipedia.org/wiki/Abstract_syntax_tree]
