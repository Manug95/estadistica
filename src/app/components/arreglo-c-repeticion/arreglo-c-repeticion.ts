import { Component, inject, signal } from '@angular/core';
import { MathService } from '../../services/math-service';
import { FormularioNP } from '../formulario-np/formulario-np';
import { FormNP } from '../../models/FormNP';
import { BigNumberPipe } from '../../pipes/big-number-pipe';
import { AnalisisCombinatorioService } from '../../services/analisis-combinatorio-service';
import { RESULTADO_VACIO, N, P } from '../../util/constantes';

@Component({
  selector: 'app-arreglo-c-repeticion',
  imports: [FormularioNP, BigNumberPipe],
  templateUrl: './arreglo-c-repeticion.html',
  styleUrl: './arreglo-c-repeticion.css',
})
export class ArregloCRepeticion {
  private _mathService = inject(MathService);
  private _analisisCombinatorioService = inject(AnalisisCombinatorioService);

  subN = signal(N);
  subP = signal(P);
  resultado = signal(RESULTADO_VACIO);

  calcular(formValues: FormNP): void {
    if (formValues.n && formValues.p) {
      
      const n = this._mathService.aEnteroGrande(formValues.n);
      const p = this._mathService.aEnteroGrande(formValues.p);
      
      if (!n) { return; }
      if (!p) { return; }
      
      this.subN.set(formValues.n);
      this.subP.set(formValues.p);
      this.resultado.set(this._analisisCombinatorioService.arregloConRepeticion(n, p).toString());
      
    }
  }

  resetearResultados(): void {
    this.resultado.set(RESULTADO_VACIO);
    this.subN.set(N);
    this.subP.set(P);
  }
}
