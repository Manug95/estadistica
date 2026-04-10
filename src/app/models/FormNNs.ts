export class FormNNs {
    private ene: string;
    private ns: string;

    constructor(n: string, enes: string) {
        this.ene = n;
        this.ns = enes;
    }

    get n(): string {
        return this.ene;
    }

    get enes(): string {
        return this.ns;
    }
}