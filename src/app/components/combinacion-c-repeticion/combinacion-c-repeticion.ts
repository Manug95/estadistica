import { Component, inject, signal } from '@angular/core';
import { MathService } from '../../services/math-service';
import { FormularioNP } from '../formulario-np/formulario-np';
import { FormNP } from '../../models/FormNP';

@Component({
  selector: 'app-combinacion-c-repeticion',
  imports: [FormularioNP],
  templateUrl: './combinacion-c-repeticion.html',
  styleUrl: './combinacion-c-repeticion.css',
})
export class CombinacionCRepeticion {
  private mathService = inject(MathService);

  subN = signal("n");
  subP = signal("p");
  resultado = signal(" - ");

  calcular(formValues: FormNP) {
    if (formValues.n && formValues.p) {
      const n = this.mathService.aEnteroGrande(formValues.n);
      const p = this.mathService.aEnteroGrande(formValues.p);

      if (!n) { return; }
      if (!p) { return; }

      this.subN.set(formValues.n);
      this.subP.set(formValues.p);
      this.resultado.set(this.combinacionConRepeticion(n, p).toString());
    }

  }

  combinacionConRepeticion(n: bigint, p: bigint): bigint {
    const numerador = this.mathService.factorialBigInt(n + p - 1n);
    const pFactorial = this.mathService.factorialBigInt(p);
    const denominador = pFactorial * this.mathService.factorialBigInt(n - 1n);

    return this.mathService.dividirBigInt(numerador, denominador);
  }

  resetearResultados(): void {
    this.resultado.set(" - ");
    this.subN.set("n");
    this.subP.set("p");
  }
}
