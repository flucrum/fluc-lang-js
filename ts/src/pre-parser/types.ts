export type Token = {
    name: string,
    pos: number,
    val: string
}

export type Line = {
    cascade: number;
    tokens: Array<Token>;
}

export type Phrase = Array<Token>;