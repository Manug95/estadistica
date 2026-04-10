import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  sumarDatos(data: number[]): number {
    return data.reduce((acumulador, actual) => {
      return acumulador + actual;
    }, 0);
  }

  multiplicarDatos(data: number[]): number {
    return data.reduce((acumulador, actual) => {
      return acumulador * actual;
    }, 1);
  }

  multiplicarDatosBigInt(data: bigint[]): bigint {
    return data.reduce((acumulador, actual) => {
      return acumulador * actual;
    }, 1n);
  }

  longitud(data: number[]): number {
    return data.length;
  }

  esLongitudPar(data: number[]): boolean {
    return (data.length % 2) === 0;
  }

  raizCuadrada(n: number): number {
    return Math.sqrt(n);
  }
  
  potencia(base: number, exp: number): number {
    return Math.pow(base, exp);
  }
  
  potenciaBigInt(base: bigint, exp: bigint): bigint {
    return base**exp;
  }
  
  dividir(numerador: number, denominador: number): number {
    return numerador / denominador;
  }
  
  dividirBigInt(numerador: bigint, denominador: bigint): bigint {
    return numerador / denominador;
  }

  redondear(n: number, decimales: number): number {
    const nroRedondeado = n.toFixed(decimales);
  
    const numero = this.aFloat(nroRedondeado);
  
    if (this.decimalesDistintosDeCero(numero))
      return numero;
    else
      return this.aEntero(numero+"");
  }
  
  aFloat(n: string): number {
    return Number.parseFloat(n);
  }
  
  aEntero(n: string): number {
    return Number.parseInt(n);
  }
  
  aEnteroGrande(n: string): bigint | null {
    try{
      return BigInt(n);
    } catch {
      return null;
    }
  }
  
  truncar(n: number): number {
    return Math.trunc(n);
  }
  
  obtenerDecimales(n: number): number {
    const stringDeLaParteDecimal = (n - this.truncar(n)).toString().split(".")[1];
  
    return this.aEntero(stringDeLaParteDecimal);
  }
  
  decimalesDistintosDeCero(n: number): boolean {
    return this.obtenerDecimales(n) !== 0;
  }

  valorMinimo(data: number[]): number {
    return Math.min(...data);
  }
  
  valorMaximo(data: number[]): number {
    return Math.max(...data);
  }

  factorial(n: number): number {
    let factorial = 1;

    for (let i = n; i > 0; i--) {
      factorial *= i;
    }

    return factorial;
  }

  factorialBigInt(n: bigint): bigint {
    let factorial = 1n;

    for (let i = n; i > 0; i--) {
      factorial *= i;
    }

    return factorial;
  }
}
