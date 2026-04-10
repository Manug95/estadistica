import { Component, output } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { bigIntValidator, mayorACeroValidator } from '../../util/FormValidators';

@Component({
  selector: 'app-formulario-n',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-n.html',
  styleUrl: './formulario-n.css',
})
export class FormularioN {
  form = new FormGroup({
    n: new FormControl("", [
      Validators.required,
      bigIntValidator,
      mayorACeroValidator
    ])
  });

  formValues = output<string>();
  resetear = output<void>();

  get n() {
    return this.form.get("n");
  }

  onSubmit() {
    if (this.n?.value)
      this.formValues.emit(this.n?.value);
  }

  resetearResultados(): void {
    this.n?.setValue("");
    this.n?.markAsPristine();
    this.n?.markAsUntouched();

    this.resetear.emit();
  }
}
