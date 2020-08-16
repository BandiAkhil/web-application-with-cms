import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eurToCents'
})
export class EurToCentsPipe implements PipeTransform {

  transform(value: any): any {
    return Math.round(value * 100);
  }

}
