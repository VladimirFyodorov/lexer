import Token, { ETokenType } from './Token';

export default class SeparatorToken extends Token {
    constructor() {
        super(ETokenType.Separator, /^[\(|\);\{\}]/);
    }
}
