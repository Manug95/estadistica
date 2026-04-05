import { Component, inject, signal, ViewChild } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { EstadisticaDescriptivaService } from '../../services/estadistica-descriptiva-service';
import { FormObservaciones } from '../form-observaciones/form-observaciones';
import { FormTablaFrec } from '../form-tabla-frec/form-tabla-frec';
import { CommonModule } from '@angular/common';
import { DatosForm } from '../../models/DatosForm';

@Component({
  selector: 'app-estadistica-descriptiva',
  imports: [CommonModule, FormObservaciones, FormTablaFrec, ReactiveFormsModule],
  templateUrl: './estadistica-descriptiva.html',
  styleUrl: './estadistica-descriptiva.css',
})
export class EstadisticaDescriptiva {
  resultados = signal<((string[] | number)[])[]>([]);

  diccionarioColumnasTabla = new Map([
    ["media", "Media"], ["mediana", "Mediana"], ["moda", "Moda"], ["q1", "Q1"], ["q2", "Q2"], ["q3", "Q3"], ["rango", "R"],
    ["rangoIntercuartilico", "R.I"], ["variancia", "Variancia"], ["desviacionEstandar", "Desv. E."], ["coeficienteDeVariacion", "C.V"],
    ["max", "Máx"], ["min", "Min"], ["n", "n"]
  ]);

  @ViewChild(FormObservaciones) formObservaciones!: FormObservaciones;
  @ViewChild(FormTablaFrec) formTablaFrec!: FormTablaFrec;

  radiosForm = new FormGroup({
    estado: new FormControl('clasico')
  });

  private datosForm: DatosForm = new DatosForm("", ";");
  private analisisService = inject(EstadisticaDescriptivaService);

  calcular(data: DatosForm): void {
    this.datosForm = data;

    if (this.datosForm.datos) {
      const datosFormateados = this.formatearDatos(this.datosForm.datos);
      datosFormateados.sort((a,b) => a-b);
      const resultadoAnalisis: {[key: string]: number | string[]} = this.analisisService.analisisCompleto(datosFormateados);
      const arrayResultados = this.ordenarDatos(resultadoAnalisis);
  
      this.resultados.update(arr => { arr.push(arrayResultados); return arr; });
    }
  }

  formatearDatos(datos: string): number[] {
    if (this.datosForm.separador) {
      return datos
      .split(this.datosForm.separador)
      .filter(x => x !== "")
      .map(x => +x);
    } else 
      return [];
  }

  ordenarDatos(data: {[key: string]: number | string[]}): (number | string[])[] {
    return [...this.diccionarioColumnasTabla.keys()].map(c => data[c]);
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
    if (this.formObservaciones) 
      this.formObservaciones.reestablecerCampos();
    if (this.formTablaFrec)
      this.formTablaFrec.reestablecerCampos();
  }
}
