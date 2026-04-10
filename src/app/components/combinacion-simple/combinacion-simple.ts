import { Component, inject, signal } from '@angular/core';
import { MathService } from '../../services/math-service';
import { FormularioNP } from '../formulario-np/formulario-np';
import { FormNP } from '../../models/FormNP';

@Component({
  selector: 'app-combinacion-simple',
  imports: [FormularioNP],
  templateUrl: './combinacion-simple.html',
  styleUrl: './combinacion-simple.css',
})
export class CombinacionSimple {
  private mathService = inject(MathService);

  subN = signal("n");
  subP = signal("p");
  resultado = signal(" - ");
  nMenorIgualP = false;
  pMayorIgualN = false;

  calcular(formValues: FormNP) {
    if (formValues.n && formValues.p) {
      this.nMenorIgualP = false;
      this.pMayorIgualN = false;
      const n = this.mathService.aEnteroGrande(formValues.n);
      const p = this.mathService.aEnteroGrande(formValues.p);

      if (!n) { return; }
      if (!p) { return; }
      if (p >= n) { 
        this.resetearResultados();
        this.nMenorIgualP = true;
        this.pMayorIgualN = true;
        return; 
      }

      this.subN.set(formValues.n);
      this.subP.set(formValues.p);
      this.resultado.set(this.combinacionSimple(n, p).toString());
    }

  }

  combinacionSimple(n: bigint, p: bigint): bigint {
    const nFactorial = this.mathService.factorialBigInt(n);
    const pFactorial = this.mathService.factorialBigInt(p);
    const restaFactorial = this.mathService.factorialBigInt(n - p);
    const division = this.mathService.dividirBigInt(nFactorial, pFactorial * restaFactorial);

    return division;
  }

  resetearResultados(): void {
    this.resultado.set(" - ");
    this.subN.set("n");
    this.subP.set("p");
  }
}
