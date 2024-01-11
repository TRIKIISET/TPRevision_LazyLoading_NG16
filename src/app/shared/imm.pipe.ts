import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imm'
})
export class ImmPipe implements PipeTransform {

  transform(value: string): string {
    return value.split('TU').join(' TU ');
 }

}
