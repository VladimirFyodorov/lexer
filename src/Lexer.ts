import Token from './Tokens/Token';
import {
    IdentifierToken,
    LiteralToken,
    OperatorToken,
    SpaceToken,
    SeparatorToken,
} from './Tokens';

export default class Lexer {
    private code: string
    private position: number
    private tokens: Token[]

    constructor(code: string) {
        this.code = code;
        this.position = 0;
        this.tokens = [];
    }

    public analize() {
        while (this.position + 1 < this.code.length) {
            this.findNextToken();
        }
        console.log('tokens: ', this.tokens);
    }

    private findNextToken() {
        const subCode = this.code.slice(this.position);
        if (SpaceToken.test(subCode)) {
            const newToken = SpaceToken.create(subCode);
            this.position += newToken.value.length;
            this.tokens.push(newToken);
        } else if (IdentifierToken.test(subCode)) {
            const newToken = IdentifierToken.create(subCode);
            this.position += newToken.value.length;
            this.tokens.push(newToken);
        } else {
            throw new Error(`Not valid character at pos: ${this.position}`);
        }
    }
}
