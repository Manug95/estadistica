export class DatosForm {
    datos: string;
    separador: string;

    constructor(datos: string, separador: string) {
        this.datos = datos;
        this.separador = separador;
    }

    getDatos(): string {
        return this.datos;
    }

    getSeparador(): string {
        return this.separador;
    }
}