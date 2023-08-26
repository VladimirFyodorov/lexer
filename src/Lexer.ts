import { tokenTypesList } from './TokenType';
import Token from './Token';

export default class Lexer {
    private code: string
    private position: number = 0
    private tokens: Token[]

    constructor(code: string) {
        this.code = code;
        this.tokens = [];
    }

    public analize() {
        while (this.position + 1 < this.code.length) {
            const token = this.findNextToken();
            console.log(token);
        }
        console.log(this.tokens);
        return this.tokens.filter(t => t.type !== tokenTypesList.space);
    }

    private findNextToken() {
        const subCode = this.code.slice(this.position);
        for (const tokenType of Object.values(tokenTypesList)) {
            const match = tokenType.match(subCode);
            if (match) {
                const newToken = new Token(tokenType, match, this.position);
                this.position += newToken.value.length;
                this.tokens.push(newToken);
                return newToken;
            }
        }

        throw new Error(`Not valid character at pos: ${this.position}`);
    }
}
