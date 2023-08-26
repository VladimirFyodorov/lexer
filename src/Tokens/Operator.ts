import Token, { ETokenType } from './Token';

export default class OperatorToken extends Token {
    constructor() {
        super(ETokenType.Operator, /^[\+|-|=]/);
    }
}
