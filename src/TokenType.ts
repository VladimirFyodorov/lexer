export enum ETokenType {
    Identifier = 'identifier',
    Literal = 'literal',
    Operator = 'operator',
    Separator = 'separator',
    Space = 'space',
}

export default class TokenType {
    name: string;
    regex: RegExp;

    constructor(name: ETokenType, regex: RegExp) {
        this.name = name;
        this.regex = regex;
    }

    public match(code: string) {
        const match = code.match(this.regex);
        return (match && match[0]) ? match[0] : null;
    }
}

export const tokenTypesList = {
    [ETokenType.Identifier]: new TokenType(ETokenType.Identifier, /^[a-z]+/),
    [ETokenType.Literal]: new TokenType(ETokenType.Literal, /^[0-9]+/),
    [ETokenType.Operator]: new TokenType(ETokenType.Operator, /^[\+\-=]+/),
    [ETokenType.Separator]: new TokenType(ETokenType.Separator, /^[\(|\);\{\}]+/),
    [ETokenType.Space]: new TokenType(ETokenType.Space, /^[\s\n\t\r]+/),
}
