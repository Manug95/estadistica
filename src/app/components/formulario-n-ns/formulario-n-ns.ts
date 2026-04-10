import { Component, output } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { bigIntValidator, mayorACeroValidator, listaNumerosNaturalesValidator } from '../../util/FormValidators';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormNNs } from '../../models/FormNNs';

@Component({
  selector: 'app-formulario-n-ns',
  imports: [ReactiveFormsModule, NgbTooltipModule],
  templateUrl: './formulario-n-ns.html',
  styleUrl: './formulario-n-ns.css',
})
export class FormularioNNs {
  form = new FormGroup({
    n: new FormControl("", [
      Validators.required,
      bigIntValidator,
      mayorACeroValidator
    ]),
    enes: new FormControl("", [
      Validators.required,
      listaNumerosNaturalesValidator
    ])
  });

  formValues = output<FormNNs>();
  resetear = output<void>();

  get n() {
    return this.form.get("n");
  }

  get enes() {
    return this.form.get("enes");
  }

  onSubmit() {
    if (this.n?.value && this.enes?.value)
      this.formValues.emit(new FormNNs(this.n?.value, this.enes?.value));
  }

  resetearResultados(): void {
    this.n?.setValue("");
    this.n?.markAsPristine();
    this.n?.markAsUntouched();
    this.enes?.setValue("");
    this.enes?.markAsPristine();
    this.enes?.markAsUntouched();

    this.resetear.emit();
  }
}
