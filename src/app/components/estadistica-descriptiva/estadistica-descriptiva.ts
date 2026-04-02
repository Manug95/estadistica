import { Component, inject, signal } from '@angular/core';

import { EstadisticaDescriptivaService } from '../../services/estadistica-descriptiva-service';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-estadistica-descriptiva',
  imports: [NgbTooltipModule],
  templateUrl: './estadistica-descriptiva.html',
  styleUrl: './estadistica-descriptiva.css',
})
export class EstadisticaDescriptiva {
  resultados = signal<(number | string[])[]>([]);
  separador = signal(";");
  tooltipDatos = "Los datos de las observaciones separados por el \"Separador\"";
  tooltipSeparador = "Caracter que separa las diferentes observaciones una de la otra";

  private analisisService = inject(EstadisticaDescriptivaService);

  actualizarSeparador(nuevoValor: string): void {
    this.separador.set(nuevoValor);
  }

  calcular(data: string): void {
    const datosFormateados = this.formatearDatos(data);
    datosFormateados.sort((a,b) => a-b);
    const objResultados: {[key: string]: number | string[]} = this.analisisService.analisisCompleto(datosFormateados);
    const arrayResultados = this.ordenarDatos(objResultados);

    this.resultados.set(arrayResultados);
    // this.resultados.update(arr => [...arr, ...arrayResultados]);
  }

  formatearDatos(datos: string): number[] {
    const separador = this.separador;
    return datos
      .split(separador())
      .filter(x => x !== "")
      .map(x => +x);
  }

  ordenarDatos(data: {[key: string]: number | string[]}): (number | string[])[] {
    const orden = [
      "media", "mediana", "moda", "q1", "q2", "q3", 
      "rango", "rangoIntercuartilico", "variancia", "desviacionEstandar", "coeficienteDeVariacion", 
      "max", "min", "n"
    ];
  
    return Object.keys(data)
      .map(k => orden.findIndex(i => i === k))
      .sort((a,b) => a-b)
      .map(x => orden[x])
      .map(x => data[x]);//{[key: string]: number | string[]}
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
}
