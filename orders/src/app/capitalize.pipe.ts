import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.split('-').map( mot => mot[0].toUpperCase() + mot.slice(1) ).join(' ');
  }

}
