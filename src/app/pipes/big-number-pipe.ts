import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bigNumber',
})
export class BigNumberPipe implements PipeTransform {
  transform(value: bigint | string | number): string {
    if (!value) return '0';
    if (value === " - ") return value;
    
    const bigIntValue = BigInt(value);
    
    // formateador internacional de JS
    // 'es-AR' o 'es-ES' usan el punto para miles
    return new Intl.NumberFormat('es-AR').format(bigIntValue);
  }
}
