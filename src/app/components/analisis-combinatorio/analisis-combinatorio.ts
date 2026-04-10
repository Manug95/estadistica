import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ArregloSimple } from '../arreglo-simple/arreglo-simple';
import { CombinacionSimple } from '../combinacion-simple/combinacion-simple';
import { PermutacionSimple } from '../permutacion-simple/permutacion-simple';
import { ArregloCRepeticion } from '../arreglo-c-repeticion/arreglo-c-repeticion';
import { CombinacionCRepeticion } from '../combinacion-c-repeticion/combinacion-c-repeticion';
import { PermutacionCRepeticion } from '../permutacion-c-repeticion/permutacion-c-repeticion';

@Component({
  selector: 'app-analisis-combinatorio',
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    ArregloSimple, 
    CombinacionSimple, 
    PermutacionSimple, 
    ArregloCRepeticion,
    CombinacionCRepeticion,
    PermutacionCRepeticion
  ],
  templateUrl: './analisis-combinatorio.html',
  styleUrl: './analisis-combinatorio.css',
})
export class AnalisisCombinatorio {
  form = new FormGroup({
    operacion: new FormControl("-", Validators.required)
  });

  get operacion() {
    return this.form.get("operacion");
  }
}
