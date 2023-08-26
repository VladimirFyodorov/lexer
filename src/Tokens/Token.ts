export enum ETokenType {
    Identifier = 'identifier',
    Separator = 'separator',
    Operator = 'operator',
    Literal = 'literal',
    Space = 'space',
}

export default class Token {
    constructor(public type: ETokenType, public regex: RegExp) {}
}
