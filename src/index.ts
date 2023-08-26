import Lexer from "./Lexer";

const code: string = `
x = 5;
y = 6;
z = x + y;
`;

const lexer = new Lexer(code);
lexer.analize();
