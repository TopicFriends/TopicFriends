
import {AbstractControl, FormControl} from '@angular/forms'
import {Observable} from 'rxjs/Observable'
import {combineLatest} from 'rxjs/observable/combineLatest'

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

export function arrayOfObservablesToObservableOfArray<T>(arr: Array<Observable<T>>): Observable<Array<T>> {
  const combineLatest2: Observable<Array<T>> = combineLatest<T>(arr)
  return combineLatest2
}
