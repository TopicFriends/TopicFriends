import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo',
  pure: false
})
export class LimitToPipe implements PipeTransform {

  transform(items: any[], amount: number): any[] {
    return items.slice(0, amount);
  }

}
