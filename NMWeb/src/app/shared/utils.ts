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
