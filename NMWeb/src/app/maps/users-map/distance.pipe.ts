import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distance'
})
export class DistancePipe implements PipeTransform {

  transform(value: any): any {
    let answer:string;
    if(value < 1000) {
      answer = value.toString() + ' meters';
    } else {
      answer = Math.floor(value/1000).toString() + ' kilometers';
    }
    return answer;
  }

}
