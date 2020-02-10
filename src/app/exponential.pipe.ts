import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {
// implementacion de pipe

  transform(value: number): any {
    return Math.pow(value, 2);
  }

}