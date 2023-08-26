import Token, { ETokenType } from './Token';

export default class SpaceToken extends Token {
    static type = ETokenType.Space;
    static regex = /^[s | \\n | \\t]+/;

    static test(code: string) {
        return this.regex.test(code);
    }

    static create(code: string) {
        const match = code.match(SpaceToken.regex);
        if (!match) {
            throw new Error('Failed to create new SpaceToken');
        }
        const value = match[0];
        const newToken = new SpaceToken(value);
        return newToken;
    }

    public value: string;

    constructor(value: string) {
        super(SpaceToken.type, SpaceToken.regex);
        this.value = value;
    }
}
