import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanUrl'
})
export class CleanUrlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let string = value.replace('/','');
    string = string.replace('-',' ');
    return string;
  }

}
