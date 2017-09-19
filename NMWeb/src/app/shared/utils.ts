
import {AbstractControl, FormControl} from '@angular/forms'

export function setFormControlEnabled(formControl: AbstractControl, enable: boolean) {
  if ( enable ) {
    formControl.enable()
  } else {
    formControl.disable()
  }
}

/**
 * Created by kd on 2017-08-01.
 */

export function getDictionaryValuesAsArray<T>(dictionary: { [p: string]: T }): T[] {
  const values = [];
  if ( dictionary ) {
    for (const key in dictionary) {
      values.push(dictionary[key]);
    }
  }
  return values;
}

export function isNullOrUndefinedOrWhiteSpace(s: string) {
  if ( ! s ) {
    return true
  }
  if ( s.trim() === '' ) {
    return true
  }
  return false
}
