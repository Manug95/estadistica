import { Component, inject, signal } from '@angular/core';
import { MathService } from '../../services/math-service';
import { FormularioN } from '../formulario-n/formulario-n';
import { BigNumberPipe } from '../../pipes/big-number-pipe';
import { AnalisisCombinatorioService } from '../../services/analisis-combinatorio-service';
import { RESULTADO_VACIO, N } from '../../util/constantes';

@Component({
  selector: 'app-permutacion-simple',
  imports: [FormularioN, BigNumberPipe],
  templateUrl: './permutacion-simple.html',
  styleUrl: './permutacion-simple.css',
})
export class PermutacionSimple {
  private _mathService = inject(MathService);
  private _analisisCombinatorioService = inject(AnalisisCombinatorioService);
  
  subN = signal(N);
  resultado = signal(RESULTADO_VACIO);

  calcular(formValue: string): void {
    if (formValue) {
      const n = this._mathService.aEnteroGrande(formValue);
      
      if (n == null || n == undefined) { return; }
      
      this.subN.set(formValue);
      this.resultado.set(this._analisisCombinatorioService.permutacionSimple(n).toString());
      
    }
  }

  resetearResultados(): void {
    this.resultado.set(RESULTADO_VACIO);
    this.subN.set(N);
  }
}
