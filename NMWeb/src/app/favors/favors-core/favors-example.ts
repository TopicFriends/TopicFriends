import { Favor } from './Favor'
import {
  Dict,
  dictToArrayAssigningIds,
} from '../../util/dictionary-utils'

function f(param: Favor) {
  return param
}

export class ExampleFavors {
  favor1 = f({
    topics: 'Angular Ionic TypeScript Firebase',
    title: 'App improvements',
  })
  favor2= f({
    title: 'Data loading script',
    topics: 'Node.JS TypeScript MongoDB',
  })
  favor3= f({
    title: 'Tweaking native Android notifications',
    topics: 'Android Cordova',
  })
}

export const exampleFavors = dictToArrayAssigningIds(new ExampleFavors() as any as Dict<Favor>)

