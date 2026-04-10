import { Component, inject, signal } from '@angular/core';
import { MathService } from '../../services/math-service';
import { FormularioNP } from '../formulario-np/formulario-np';
import { FormNP } from '../../models/FormNP';

@Component({
  selector: 'app-arreglo-c-repeticion',
  imports: [FormularioNP],
  templateUrl: './arreglo-c-repeticion.html',
  styleUrl: './arreglo-c-repeticion.css',
})
export class ArregloCRepeticion {
  private mathService = inject(MathService);

  subN = signal("n");
  subP = signal("p");
  resultado = signal(" - ");

  calcular(formValues: FormNP): void {
    if (formValues.n && formValues.p) {
      
      const n = this.mathService.aEnteroGrande(formValues.n);
      const p = this.mathService.aEnteroGrande(formValues.p);
      
      if (!n) { return; }
      if (!p) { return; }
      
      this.subN.set(formValues.n);
      this.subP.set(formValues.p);
      this.resultado.set(this.arregloConRepeticion(n, p).toString());
      
    }
  }

  arregloConRepeticion(n: bigint, p: bigint): bigint {
    return this.mathService.potenciaBigInt(n, p);
  }

  resetearResultados(): void {
    this.resultado.set(" - ");
    this.subN.set("n");
    this.subP.set("p");
  }
}
