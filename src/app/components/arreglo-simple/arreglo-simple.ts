import { Component, inject, signal } from '@angular/core';
import { MathService } from '../../services/math-service';
import { FormularioNP } from '../formulario-np/formulario-np';
import { FormNP } from '../../models/FormNP';
import { BigNumberPipe } from '../../pipes/big-number-pipe';

@Component({
  selector: 'app-arreglo-simple',
  imports: [FormularioNP, BigNumberPipe],
  templateUrl: './arreglo-simple.html',
  styleUrl: './arreglo-simple.css',
})
export class ArregloSimple {
  private mathService = inject(MathService);

  subN = signal("n");
  subP = signal("p");
  resultado = signal(" - ");
  nMenorIgualP = false;
  pMayorIgualN = false;

  calcular(formValues: FormNP): void {
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
      this.resultado.set(this.arregloSimple(n, p).toString());
      
    }
  }

  arregloSimple(n: bigint, p: bigint): bigint {
    let result = 1n;
    let i = n;

    while (i >= (n - p + 1n)) {
      result *= i;
      i--;
    }

    return result;
  }

  resetearResultados(): void {
    this.resultado.set(" - ");
    this.subN.set("n");
    this.subP.set("p");
  }
}
