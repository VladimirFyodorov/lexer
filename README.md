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
Code execution consists of several steps: Lexical analysis (Lexer), Syntactic analysis (or parsing), Execution

### Lexical analysis
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

### Syntactic analysis
During Syntactic analysis parser validates that the tokens form an allowable expression, e.g. after `(` exists `)`.

## Sources
* [Wiki: Lexical analysis](https://en.wikipedia.org/wiki/Lexical_analysis)
* [Wiki: Parsing](https://en.wikipedia.org/wiki/Parsing)
* [Wiki: Abstract syntax tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree)
