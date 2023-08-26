import Token, { ETokenType } from './Token';

export default class IdentifierToken extends Token {
    static type = ETokenType.Identifier;
    static regex = /^[a-z]+/;

    static test(code: string) {
        return this.regex.test(code);
    }

    static create(code: string) {
        const match = code.match(IdentifierToken.regex);
        if (!match) {
            throw new Error('Failed to create new IdentifierToken');
        }
        const value = match[0];
        const newToken = new IdentifierToken(value);
        return newToken;
    }

    public value: string;

    constructor(value: string) {
        super(IdentifierToken.type, IdentifierToken.regex);
        this.value = value;
    }
}
