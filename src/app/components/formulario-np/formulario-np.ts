import { Component, input, output } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { FormNP } from '../../models/FormNP';
import { bigIntValidator, mayorACeroValidator } from '../../util/FormValidators';

@Component({
  selector: 'app-formulario-np',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-np.html',
  styleUrl: './formulario-np.css',
})
export class FormularioNP {
  form = new FormGroup({
    n: new FormControl("", [
      Validators.required,
      bigIntValidator,
      mayorACeroValidator
    ]),
    p: new FormControl("", [
      Validators.required,
      bigIntValidator,
      mayorACeroValidator
    ])
  });

  formValues = output<FormNP>();
  resetear = output<void>();

  nMenorIgualP = input(false);
  pMayorIgualN = input(false);

  get n() {
    return this.form.get("n");
  }

  get p() {
    return this.form.get("p");
  }

  onSubmit() {
    if (this.n?.value && this.p?.value)
      this.formValues.emit(new FormNP(this.n?.value, this.p?.value));
  }

  resetearResultados(): void {
    this.n?.setValue("");
    this.n?.markAsPristine();
    this.n?.markAsUntouched();
    this.p?.setValue("");
    this.p?.markAsPristine();
    this.p?.markAsUntouched();

    this.resetear.emit();
  }
}
