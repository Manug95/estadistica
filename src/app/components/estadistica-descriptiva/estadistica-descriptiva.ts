import { Component, inject, signal } from '@angular/core';

import { EstadisticaDescriptivaService } from '../../services/estadistica-descriptiva-service';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estadistica-descriptiva',
  imports: [NgbTooltipModule, ReactiveFormsModule, CommonModule],
  templateUrl: './estadistica-descriptiva.html',
  styleUrl: './estadistica-descriptiva.css',
})
export class EstadisticaDescriptiva {
  resultados = signal<((string[] | number)[])[]>([]);
  tooltipDatos = "Los datos de las observaciones separados por el \"Separador\"";
  tooltipSeparador = "Caracter que separa las diferentes observaciones una de la otra";

  diccionarioColumnasTabla = new Map([
    ["media", "Media"], ["mediana", "Mediana"], ["moda", "Moda"], ["q1", "Q1"], ["q2", "Q2"], ["q3", "Q3"], ["rango", "R"],
    ["rangoIntercuartilico", "R.I"], ["variancia", "Variancia"], ["desviacionEstandar", "Desv. E."], ["coeficienteDeVariacion", "C.V"],
    ["max", "Máx"], ["min", "Min"], ["n", "n"]
  ]);

  private analisisService = inject(EstadisticaDescriptivaService);

  datosForm = new FormGroup({
    datos: new FormControl("", Validators.required),
    separador: new FormControl(";", Validators.required)
  });

  get datos() {
    return this.datosForm.get("datos");
  }

  get separador() {
    return this.datosForm.get("separador");
  }

  calcular(): void {
    const data = this.datosForm.value.datos;

    if (data) {
      const datosFormateados = this.formatearDatos(data);
      datosFormateados.sort((a,b) => a-b);
      const objResultados: {[key: string]: number | string[]} = this.analisisService.analisisCompleto(datosFormateados);
      const arrayResultados = this.ordenarDatos(objResultados);
  
      this.resultados.update(arr => { arr.push(arrayResultados); return arr; });
    }
  }

  formatearDatos(datos: string): number[] {
    const separator = this.datosForm.value.separador;
    
    if (separator) {
      return datos
      .split(separator)
      .filter(x => x !== "")
      .map(x => +x);
    } else 
      return [];
  }

  ordenarDatos(data: {[key: string]: number | string[]}): (number | string[])[] {
    const array: (number | string[])[] = [];

    [...this.diccionarioColumnasTabla.keys()].forEach((c,i) => {
      array[i] = data[c];
    });

    return array;
  }

  esArreglo(data: string[] | number): boolean {
    return Array.isArray(data);
  }

  muchasModas(data: string[] | number): string {
    if (typeof data !== "number") 
      return data.join(";");
    else 
      return data.toString();
  }

  borrarDatos() {
    this.resultados.update(_ => []);
    this.datosForm.setValue({ datos: "", separador: ";" });
  }
}
