import { FormControl } from '@angular/forms'

export class ApfFormControl<TVal> extends FormControl {
  get valueTyped(): TVal {
    return this.value as TVal
  }
}
