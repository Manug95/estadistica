import { Component, inject, signal } from '@angular/core';
import { MathService } from '../../services/math-service';
import { FormularioNP } from '../formulario-np/formulario-np';
import { FormNP } from '../../models/FormNP';
import { BigNumberPipe } from '../../pipes/big-number-pipe';
import { AnalisisCombinatorioService } from '../../services/analisis-combinatorio-service';
import { RESULTADO_VACIO, N, P } from '../../util/constantes';

@Component({
  selector: 'app-arreglo-simple',
  imports: [FormularioNP, BigNumberPipe],
  templateUrl: './arreglo-simple.html',
  styleUrl: './arreglo-simple.css',
})
export class ArregloSimple {
  private _mathService = inject(MathService);
  private _analisisCombinatorioService = inject(AnalisisCombinatorioService);

  subN = signal(N);
  subP = signal(P);
  resultado = signal(RESULTADO_VACIO);
  nMenorIgualP = false;
  pMayorIgualN = false;

  calcular(formValues: FormNP): void {
    if (formValues.n && formValues.p) {
      this.nMenorIgualP = false;
      this.pMayorIgualN = false;
      
      const n = this._mathService.aEnteroGrande(formValues.n);
      const p = this._mathService.aEnteroGrande(formValues.p);
      
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
      this.resultado.set(this._analisisCombinatorioService.arregloSimple(n, p).toString());
      
    }
  }

  resetearResultados(): void {
    this.resultado.set(RESULTADO_VACIO);
    this.subN.set(N);
    this.subP.set(P);
  }
}
