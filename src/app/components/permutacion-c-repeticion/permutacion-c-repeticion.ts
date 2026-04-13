import { Component, inject, signal } from '@angular/core';
import { MathService } from '../../services/math-service';
import { FormularioNNs } from '../formulario-n-ns/formulario-n-ns';
import { FormNNs } from '../../models/FormNNs';
import { BigNumberPipe } from '../../pipes/big-number-pipe';
import { AnalisisCombinatorioService } from '../../services/analisis-combinatorio-service';
import { RESULTADO_VACIO, N, ELEMENTOS_REPETIDOS } from '../../util/constantes';

@Component({
  selector: 'app-permutacion-c-repeticion',
  imports: [FormularioNNs, BigNumberPipe],
  templateUrl: './permutacion-c-repeticion.html',
  styleUrl: './permutacion-c-repeticion.css',
})
export class PermutacionCRepeticion {
  private _mathService = inject(MathService);
  private _analisisCombinatorioService = inject(AnalisisCombinatorioService);
  
  subN = signal(N);
  superindices = signal<string[]>(ELEMENTOS_REPETIDOS);
  resultado = signal(RESULTADO_VACIO);

  calcular(formValues: FormNNs): void {
    if (formValues.n && formValues.enes) {
      const n = this._mathService.aEnteroGrande(formValues.n);
      
      if (!n) { return; }

      const enes = formValues.enes.split(",").map(v => v.trim());
      
      this.subN.set(formValues.n);
      this.superindices.set(enes);
      this.resultado.set(this._analisisCombinatorioService.permutacionConRepeticion(n, enes).toString());
      
    }
  }

  resetearResultados(): void {
    this.resultado.set(" - ");
    this.subN.set("n");
    this.superindices.set(ELEMENTOS_REPETIDOS);
  }
}
