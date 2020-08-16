import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snakeCaseToText'
})
export class SnakeCaseToTextPipe implements PipeTransform {

  transform(value: any): any {
    const val = value.split('_').join(' ');
    return val.charAt(0).toUpperCase() + val.substring(1);
  }
}
