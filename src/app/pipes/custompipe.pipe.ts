import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: number, exponent?: number): Number {
    debugger
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);

    
  }

}
