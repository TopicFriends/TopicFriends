import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireObject, AngularFireList} from 'angularfire2/database'
import {Observable} from 'rxjs/Observable'

export interface DbObject<T> extends Observable<T> {
  set?(value: T): any;
  update?(value: Object): any; // todo: partial<T>
  remove?(): any;
}

export interface DbListReadOnly<T> extends Observable<T[]> {

}

export interface DbList<T> extends Observable<T> {
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
    private db: AngularFireDatabase
  ) {

  }

  /** Idea: could add wrapping/mapping func here */
  objectById<T>(path: string, id: string): Observable<any> {
    return this.db.object(this.adaptPath(path) + '/' + id).valueChanges();
  }

  /** Idea: could add wrapping/mapping func here */
  objectByPath<T>(path: string): Observable<any> {
    return this.db.object(this.adaptPath(path)).valueChanges();
  }

  /** Idea: could add wrapping/mapping func here */
  list<T>(path: string): Observable<any[]> {
    return this.db.list(this.adaptPath(path)).valueChanges();
  }

  /** Idea: could add wrapping/mapping func here */
  listQueried<T>(path: string, query: any): Observable<any> {
    return this.db.list(this.adaptPath(path), query).valueChanges();
  }

  private adaptPath(path: string) {
    return this.DB_PREFIX + '/' + path
  }

}
