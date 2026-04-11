import { Component, inject, signal } from '@angular/core';
import { MathService } from '../../services/math-service';
import { FormularioN } from '../formulario-n/formulario-n';
import { BigNumberPipe } from '../../pipes/big-number-pipe';

@Component({
  selector: 'app-permutacion-simple',
  imports: [FormularioN, BigNumberPipe],
  templateUrl: './permutacion-simple.html',
  styleUrl: './permutacion-simple.css',
})
export class PermutacionSimple {
  private mathService = inject(MathService);
  
  subN = signal("n");
  resultado = signal(" - ");

  calcular(formValue: string): void {
    if (formValue) {
      const n = this.mathService.aEnteroGrande(formValue);
      
      if (n == null || n == undefined) { return; }
      
      this.subN.set(formValue);
      this.resultado.set(this.permutacionSimple(n).toString());
      
    }
  }

  permutacionSimple(n: bigint): bigint {
    return this.mathService.factorialBigInt(n);
  }

  resetearResultados(): void {
    this.resultado.set(" - ");
    this.subN.set("n");
  }
}
