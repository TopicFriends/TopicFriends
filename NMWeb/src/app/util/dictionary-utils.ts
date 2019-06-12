/**
 * Created by kd on 2017-08-01.
 */

export interface Dict<TVal, /*TKey = string*/> { [key: string /*TKey*/]: TVal }

export function getDictionaryValuesAsArray<TItem>(dictionary: Dict<TItem>): TItem[] {
  // console.log('getDictionaryValuesAsArray dictionary', dictionary)
  const values = [];
  if (dictionary) {
    for (const key of Object.getOwnPropertyNames(dictionary)) {
      // if (dictionary.hasOwnProperty(key)) {
      let dictionaryElement = dictionary[key];
      // console.log('getDictionaryValuesAsArray', key, dictionaryElement)
      values.push(dictionaryElement);
      // }
    }
  }
  return values;
}

export function setIdsFromKeys<TItem>(dictionary: Dict<TItem>, idKeyName: string = 'id'): Dict<TItem> {
  // idKeyName = idKeyName || 'id';
  let ownPropertyNames = Object.getOwnPropertyNames(dictionary);
  // console.log('setIdsFromKeys ownPropertyNames', ownPropertyNames);
  for (const id of ownPropertyNames) {
    const curExp = dictionary[id];
    curExp[idKeyName] = id;
    // console.log('setIdsFromKeys', id, curExp);
  }
  return dictionary;
}


export function dictToArrayAssigningIds<TItem>(dictionary: Dict<TItem>, idKeyName: string = 'id'): TItem[] {
  const dictWithIdsFromKeys: Dict<TItem> = setIdsFromKeys(dictionary, idKeyName);
  return getDictionaryValuesAsArray(dictWithIdsFromKeys)
}
