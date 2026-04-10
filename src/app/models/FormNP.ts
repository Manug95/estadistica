export class FormNP {
    private ene: string;
    private pe: string;

    constructor(n: string, p: string) {
        this.ene = n;
        this.pe = p;
    }

    get n(): string {
        return this.ene;
    }

    get p(): string {
        return this.pe;
    }
}