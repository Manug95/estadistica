import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { DatosForm } from '../../models/DatosForm';

@Component({
  selector: 'app-form-observaciones',
  imports: [NgbTooltipModule, ReactiveFormsModule, CommonModule],
  templateUrl: './form-observaciones.html',
  styleUrl: './form-observaciones.css',
})
export class FormObservaciones {
  datosOutput = output<DatosForm>();

  tooltipDatos = "Los datos de las observaciones separados por el \"Separador\"";
  tooltipSeparador = "Caracter que separa las diferentes observaciones una de la otra";

  placeholderDatos = "Puede copiar y pegar los datos desde el practico o escribirlos manualmente";

  datosForm = new FormGroup({
    datos: new FormControl("", Validators.required),
    separador: new FormControl(";", Validators.required)
  });

  get datos() {
    return this.datosForm.get("datos");
  }

  get separador() {
    return this.datosForm.get("separador");
  }

  onSubmit() {
    const df = new DatosForm(this.datos?.value ?? "", this.separador?.value ?? ";");
    this.datosOutput.emit(df);
  }

  reestablecerCampos() {
    this.datosForm.setValue({ datos: "", separador: ";" });
    this.datosForm.markAsPristine();
    this.datosForm.markAsUntouched();
  }
}
