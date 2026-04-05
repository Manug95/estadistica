import { Component, inject, output } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatosForm } from '../../models/DatosForm';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-tabla-frec',
  imports: [ReactiveFormsModule, NgbTooltipModule],
  templateUrl: './form-tabla-frec.html',
  styleUrl: './form-tabla-frec.css',
})
export class FormTablaFrec {
  private fb = inject(FormBuilder);
  datosOutput = output<DatosForm>();
  formTablaFrec = this.crearFormArray();

  get observaciones() {
    return this.formTablaFrec.get('observaciones') as FormArray;
  }

  private crearFormArray() {
    return this.fb.group({
      observaciones: this.fb.array(Array(3).fill(null).map(() => this.crearGrupo()))
    });
  }

  private crearGrupo() {
    return this.fb.group({
      valor: ['', Validators.required],
      frecuencia: ['', Validators.required]
    });
  }

  addObservacion() {
    this.observaciones.push(this.crearGrupo());
  }

  onSubmit() {
    if (this.formTablaFrec.valid) {
      let datos: string = "";

      for (let i = 0; i < this.observaciones.length; i++) {
        const fg = this.observaciones.at(i);
        datos += `${(fg.value.valor + "_").repeat(+fg.value.frecuencia)}`;
      }

      this.datosOutput.emit(new DatosForm(datos.slice(0, -1), "_"));
    }
  }

  reestablecerCampos() {
    this.formTablaFrec = this.crearFormArray();
    this.formTablaFrec.markAsPristine();
    this.formTablaFrec.markAsUntouched();
  }

  // tieneErroresRequeridos(): boolean {
  //   // Recorre todos los grupos del array y verifica si alguno tiene el error 'required'
  //   return this.observaciones.controls.some(group => 
  //     group.get('valor')?.hasError('required') || 
  //     group.get('frecuencia')?.hasError('required')
  //   );
  // }
}
