import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeFormatTel'
})
export class PipeFormatTelPipe implements PipeTransform {

  transform(value: string): string {
    let result = "";
    let prefix = "+33 "
    for (let i = 0; i < value.length; i++) {
      if(value[i] == '0' && i == 0) {
        // ne fait rien
      }
      else if(i % 2) {
        result += value[i] + " ";
      }
      else {
        result += value[i];
      }
    }
    return prefix + result;
  }

}
