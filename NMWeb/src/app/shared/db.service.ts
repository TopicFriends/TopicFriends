import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database-deprecated'
import {Observable} from 'rxjs/Observable'
import { FormControl } from '@angular/forms'
import { FormDef } from '../util/formUtils/formUtils'

export interface DbObject<T> extends Observable<T> {
  set?(value: T): any;
  update?(value: Object): any; // todo: partial<T>
  remove?(): any;
}

export interface DbListReadOnly<T> extends Observable<T[]> {

}

export interface DbList<T> extends DbListReadOnly<T> {
  // $ref: QueryReference;
  // constructor($ref: QueryReference, subscribe?: <R>(subscriber: Subscriber<R>) => Subscription | Function | void);
  // lift<T, R>(operator: Operator<T, R>): Observable<R>;
  // push(val: any): firebase.database.ThenableReference;
  // update(item: FirebaseOperation, value: Object): firebase.Promise<void>;
  // remove(item?: FirebaseOperation): firebase.Promise<void>;
  // _checkOperationCases(item: FirebaseOperation, cases: FirebaseOperationCases): firebase.Promise<void>;

  push?(val: T): any;
  update?(id: any, value: T): any;
}

@Injectable()
export class DbService {

  // DB_PREFIX = 'PMProd';
  // DB_PREFIX = 'PMProd';
  DB_PREFIX = 'TPProd'; // PRODUCTION // FIXME: TopicPeople/Prod
  // DB_PREFIX = 'TPTests';
  // DB_PREFIX = 'TPEmpty';

  constructor(
    private db: AngularFireDatabase,
  ) {

  }

  /** Idea: could add wrapping/mapping func here */
  objectById<T>(path: string, id: string): DbObject<T> {
    return this.db.object(this.adaptPath(path) + '/' + id);
  }

  /** Idea: could add wrapping/mapping func here */
  objectByPath<T>(path: string): DbObject<T> {
    return this.db.object(this.adaptPath(path));
  }

  /** Idea: could add optional wrapping/mapping func here */
  list<T>(path: string): DbList<T> {
    return this.db.list(this.adaptPath(path));
  }

  /** Idea: could add optional wrapping/mapping func here */
  listQueried<T>(path: string, query: any): DbList<T> {
    return this.db.list(this.adaptPath(path), query);
  }

  private adaptPath(path: string) {
    return this.DB_PREFIX + '/' + path
  }

  bindForm<TItem>(dbItem: DbObject<TItem>, controls: FormDef<TItem>) {
    const keys = Object.keys(controls)
    dbItem.take(1).subscribe(fromFirebase => {
      for ( let key of keys ) {
        controls[key].setValue(fromFirebase && fromFirebase[key])
      }
    })
    for ( let key of keys ) {
      // TODO: throttleTime / debounce
      controls[key].valueChanges.subscribe(controlVal => {
        if ( controlVal === undefined ) {
          controlVal = null // for Firebase which does not like `undefined` as field value
        }
        const patch = {}
        patch[key] = controlVal
        dbItem.update(patch)
      })
    }
  }
}
