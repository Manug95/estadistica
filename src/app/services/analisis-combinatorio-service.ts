import { Injectable, inject } from '@angular/core';
import { MathService } from './math-service';

@Injectable({
  providedIn: 'root',
})
export class AnalisisCombinatorioService {
  private _mathService = inject(MathService);

  arregloSimple(n: bigint, p: bigint): bigint {
    let result = 1n;
    let i = n;

    while (i >= (n - p + 1n)) {
      result *= i;
      i--;
    }

    return result;
  }

  combinacionSimple(n: bigint, p: bigint): bigint {
    const nFactorial = this._mathService.factorialBigInt(n);
    const pFactorial = this._mathService.factorialBigInt(p);
    const restaFactorial = this._mathService.factorialBigInt(n - p);
    const division = this._mathService.dividirBigInt(nFactorial, pFactorial * restaFactorial);

    return division;
  }

  combinacionSimpleConDescomposicion(n: bigint, p: bigint): bigint {
    const nMenosP = n - p;
    let denominador = this._mathService.maxBigInt(p, nMenosP);
    const numerador = this._mathService.descomponerFactorial(n, denominador);
    denominador = denominador == p ? nMenosP : p;

    // ACA PUEDO INTENTAR SIMPLIFICAR AL DENOMINADOR HASTA PODER ELIMINARLO

    return this._mathService.dividirBigInt(this._mathService.multiplicarDatosBigInt(numerador), denominador);
  }

  combinacionSimpleConDescomposicionConArreglo(n: bigint, p: bigint): bigint {
    const nMenosP = n - p;
    let denominador = this._mathService.maxBigInt(p, nMenosP);
    const numerador = this.arregloSimple(n, denominador);
    denominador = denominador == p ? nMenosP : p;

    return this._mathService.dividirBigInt(numerador, denominador);
  }

  permutacionSimple(n: bigint): bigint {
    return this._mathService.factorialBigInt(n);
  }

  arregloConRepeticion(n: bigint, p: bigint): bigint {
    return this._mathService.potenciaBigInt(n, p);
  }

  combinacionConRepeticion(n: bigint, p: bigint): bigint {
    const numerador = this._mathService.factorialBigInt(n + p - 1n);
    const pFactorial = this._mathService.factorialBigInt(p);
    const denominador = pFactorial * this._mathService.factorialBigInt(n - 1n);

    return this._mathService.dividirBigInt(numerador, denominador);
  }

  permutacionConRepeticion(n: bigint, enes: string[]): bigint {
    const nFactorial = this._mathService.factorialBigInt(n);
    const losRepetidos = enes.map(x => this._mathService.aEnteroGrande(x));
    const losRepetidosFactoriales = losRepetidos.map(x => this._mathService.factorialBigInt(x!));
    const prodLosRepetidosFactoriales = this._mathService.multiplicarDatosBigInt(losRepetidosFactoriales);

    return this._mathService.dividirBigInt(nFactorial, prodLosRepetidosFactoriales);
  }
}
