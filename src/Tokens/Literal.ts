import Token, { ETokenType } from './Token';

export default class LiteralToken extends Token {
    constructor() {
        super(ETokenType.Literal, /^[0-9]*/);
    }
}
