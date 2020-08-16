import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'centsToEur'
})
export class CentsToEurPipe implements PipeTransform {

  transform(value: any): any {
    return (value / 100).toFixed(2);
  }

}
