import TokenType from './TokenType';

export default class Token {
    type: TokenType;
    value: string;
    pos: number;

    constructor(type: TokenType, value: string, pos: number) {
        this.type = type;
        this.value = value;
        this.pos = pos;
    }
}
