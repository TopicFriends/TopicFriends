import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseOperation} from 'angularfire2/database'
import {Observable} from 'rxjs/Observable'


export interface DbObject<T> extends Observable<T> {
  set(value: any): any;
  update(value: Object): any;
  remove(): any;
}

export interface DbList<T> extends Observable<T[]> {
  // $ref: QueryReference;
  // constructor($ref: QueryReference, subscribe?: <R>(subscriber: Subscriber<R>) => Subscription | Function | void);
  // lift<T, R>(operator: Operator<T, R>): Observable<R>;
  // push(val: any): firebase.database.ThenableReference;
  // update(item: FirebaseOperation, value: Object): firebase.Promise<void>;
  // remove(item?: FirebaseOperation): firebase.Promise<void>;
  // _checkOperationCases(item: FirebaseOperation, cases: FirebaseOperationCases): firebase.Promise<void>;

  push(val: T): any;
  update(id: any, value: T): any;
}


@Injectable()
export class DbService {

  // DB_PREFIX = 'PMProd';
  DB_PREFIX = 'PMTests';

  constructor(
    private db: AngularFireDatabase
  ) {

  }

  /** Idea: could add wrapping/mapping func here */
  objectById<T>(path: string, id: string): DbObject<T> {
    return this.db.object(this.adaptPath(path) + '/' + id);
  }

  /** Idea: could add wrapping/mapping func here */
  list<T>(path: string): DbList<T> {
    return this.db.list(this.adaptPath(path));
  }

  private adaptPath(path: string) {
    return this.DB_PREFIX + '/' + path
  }

}
