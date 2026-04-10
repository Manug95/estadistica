import { Component, inject, signal } from '@angular/core';
import { MathService } from '../../services/math-service';
import { FormularioNNs } from '../formulario-n-ns/formulario-n-ns';
import { FormNNs } from '../../models/FormNNs';

@Component({
  selector: 'app-permutacion-c-repeticion',
  imports: [FormularioNNs],
  templateUrl: './permutacion-c-repeticion.html',
  styleUrl: './permutacion-c-repeticion.css',
})
export class PermutacionCRepeticion {
  private mathService = inject(MathService);
  
  subN = signal("n");
  superindices = signal<string[]>(["n1,n2,...,nk"]);
  resultado = signal(" - ");

  calcular(formValues: FormNNs): void {
    if (formValues.n && formValues.enes) {
      const n = this.mathService.aEnteroGrande(formValues.n);
      
      if (!n) { return; }

      const enes = formValues.enes.split(",").map(v => v.trim());
      
      this.subN.set(formValues.n);
      this.superindices.set(enes);
      this.resultado.set(this.permutacionConRepeticion(n, enes).toString());
      
    }
  }

  permutacionConRepeticion(n: bigint, enes: string[]): bigint {
    const nFactorial = this.mathService.factorialBigInt(n);
    const losRepetidos = enes.map(x => this.mathService.aEnteroGrande(x));
    const losRepetidosFactoriales = losRepetidos.map(x => this.mathService.factorialBigInt(x!));
    const prodLosRepetidosFactoriales = this.mathService.multiplicarDatosBigInt(losRepetidosFactoriales);

    return this.mathService.dividirBigInt(nFactorial, prodLosRepetidosFactoriales);
  }

  resetearResultados(): void {
    this.resultado.set(" - ");
    this.subN.set("n");
    this.superindices.set(["n1,n2,...,nk"]);
  }
}
