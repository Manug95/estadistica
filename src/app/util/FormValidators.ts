import { AbstractControl, ValidationErrors } from "@angular/forms";

export function bigIntValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;
    const esValido = /^-?\d+$/.test(control.value.toString());
    return esValido ? null : { noEsUnBigInt: true };
}

export function mayorACeroValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;
    return control.value <= 0 ? { esMenorIgualACero: true } : null;
}

export function listaNumerosNaturalesValidator(control: AbstractControl): ValidationErrors | null {
    const valor = control.value;

    if (!valor) return null;

    const regex = /^[1-9]\d*(,\s?[1-9]\d*)*$/;
    const esValido = regex.test(valor.trim());

    return esValido ? null : { formatoIncorrecto: true };
}