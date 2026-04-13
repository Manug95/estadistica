import { inject, Injectable } from '@angular/core';

import { MathService } from './math-service';

@Injectable({
  providedIn: 'root',
})
export class EstadisticaDescriptivaService {
  private _mathService = inject(MathService);

  media(data: number[]): number {
    return this._mathService.redondear(
      this._mathService.dividir(this._mathService.sumarDatos(data), this._mathService.longitud(data))
      , 2);
  }
  
  mediana(data: number[]): number {
  
    if (this._mathService.esLongitudPar(data))
      return this.medianaPar(data);
    else
      return this.medianaImpar(data);
  
  }

  moda(data: number[]): string[] | number {
    const datosContados = this.contarRepeticiones(data);
  
    const max = this.mayorRepeticion(datosContados);
    
    //filtro y retorno los valores que mas se repitieron
    if (max > 1)
      return Object.entries(datosContados).filter(x => x[1] === max).map(x => x[0]);
    else
      return ["-"];
  
  }

  cuartil_1(data: number[]): number {
    const mitadIzquierda = data
      .filter(x => x <= this.mediana(data))
      .slice(0, this._mathService.dividir(this._mathService.longitud(data), 2));
    return this.mediana(mitadIzquierda);
  }
  
  cuartil_2(data: number[]): number {
    return this.mediana(data);
  }
  
  cuartil_3(data: number[]): number {
    const mitadDerecha = data
      .filter(x => x >= this.mediana(data))
      .slice(this._mathService.dividir(this._mathService.longitud(data), 2) * (-1));
    return this.mediana(mitadDerecha);
  }

  rango(data: number[]): number {
    const max = this._mathService.valorMaximo(data);
    const min = this._mathService.valorMinimo(data);
  
    return max - min;
  }
  
  rangoIntercuartilico(data: number[]): number {
    const Q1 = this.cuartil_1(data);
    const Q3 = this.cuartil_3(data);
  
    return Q3 - Q1;
  }

  variancia(data: number[]): number {
    const laMedia = this.media(data);
    const diferencias = data.map(x => this._mathService.potencia((x - laMedia), 2));
    const suma = this._mathService.sumarDatos(diferencias);
    const resultado = this._mathService.dividir(suma, this._mathService.longitud(data) - 1);
  
    return this._mathService.redondear(resultado, 2);
  }
  
  desviacionEstandar(data: number[]): number {
    const desviacion = this._mathService.raizCuadrada(this.variancia(data));
  
    return this._mathService.redondear(desviacion, 2);
  }
  
  coeficienteDeVariacion(data: number[]): number {
    const cociente = this._mathService.dividir(this.desviacionEstandar(data), this.media(data));
    const porcentaje = cociente * 100;
  
    return this._mathService.redondear(porcentaje, 2);
  }

  medianaPar(data: number[]): number {
    const pos = this._mathService.dividir(this._mathService.longitud(data), 2);
    return this._mathService.dividir(data[pos-1] + data[pos], 2);
  }
  
  medianaImpar(data: number[]): number {
    const pos = this._mathService.dividir(this._mathService.longitud(data) + 1, 2);
    return data[pos-1]
  }

  //para la MODA
  //cuento cuantas veces se repite cada valor diferente
  contarRepeticiones(data: number[]): Object {
    const resultadoConteo: {[key: string]: number} = {};

    data.forEach(observacion => {
      if (!resultadoConteo[observacion.toString()]) {
        resultadoConteo[observacion.toString()] = data.filter(x => x === observacion).length;
      }
    });

    return resultadoConteo;
  }

  //para la MODA
  //busco el valor mas grande (cantidad mas grande que se repite alguno valor)
  mayorRepeticion(data: Object): number {
    return this._mathService.valorMaximo(Object.values(data));
  }

  analisisCompleto(data: number[]): {[key: string]: number | string[]} {
    return {
      n: this._mathService.longitud(data),
      media: this.media(data),
      mediana: this.mediana(data),
      moda: this.moda(data),
      q1: this.cuartil_1(data),
      q2: this.cuartil_2(data),
      q3: this.cuartil_3(data),
      rango: this.rango(data),
      rangoIntercuartilico: this.rangoIntercuartilico(data),
      variancia: this.variancia(data),
      desviacionEstandar: this.desviacionEstandar(data),
      coeficienteDeVariacion: [this.coeficienteDeVariacion(data) + "%"],
      max: this._mathService.valorMaximo(data),
      min: this._mathService.valorMinimo(data)
    }
  }
}
