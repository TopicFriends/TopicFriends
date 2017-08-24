import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database'

export class Queryable {
  stringAttribute: string;
  dateAttribute: string
  nestedParent: {
    nestedAttribute
  }
  // query by timestamp
  // TODO: check missing nested fields e.g. orderBy 'nestedParent/child1/child2" but child1 missing already

// Two things to check:
// - sorting and filtering by ISO Date
// - query on nested child obj.history.created.when

}

const exampleData = {
  obj1: {
    history: {
      created: {
        something: {
          when: '2017-08-02_20:41:58.976Z'
        }
      }
    }
  },
  obj2: {
    history: {
      created: {
        something: {
          when: '2017-08-02_20:42:58.976Z'
        }
      }
    }
  },
  obj3: {
    history: {
      created: {
        something: {
          when: '2017-08-02_20:43:58.976Z'
        }
      }
    }
  },
  obj4: {
    history: {
      created: {
        something: {
          when: '2017-08-02_20:44:58.976Z'
        }
      }
    }
  },
  objMissing1: {
    history: {
      created: {
        somethingElse3: 999
      }
    }

  },
  objMissing2: {
    history: {
      somethingElse2: 999
    }

  },
  objMissing3: {
    somethingElse1: 999

  },

}

@Component({
  selector: 'app-check-firebase-query',
  templateUrl: './check-firebase-query.component.html',
  styleUrls: ['./check-firebase-query.component.scss']
})
export class CheckFirebaseQueryComponent implements OnInit {

  exampleVal1 = 'xyz1'
  exampleVal2 = 'xyz2'
  exampleVal3 = 'xyz3'

  constructor(
    private db: AngularFireDatabase
  ) {

  }

  ngOnInit() {
    this.saveExampleData()
    this.queryData()
  }


  private saveExampleData() {
    this.db.object(this.PATH).set(exampleData)
  }


  private PATH = 'Experiments/CheckFirebaseQuery/List'

  private queryData() {
    const opts = {
      query: {
        orderByChild: 'history/created/something/when',
        // startAt: '2017-08-02_20:43:58.976Z'
        // equalTo: '2017-08-02_20:43:58.976Z'
        // equalTo: undefined
        equalTo: null
      }
    }
    return this.db.list(this.PATH, opts)
      .subscribe(x => {
          console.log('query data: ', x)
    }) // FIXME
    // this.db.list('Experiments/CheckFirebaseQuery/List', {
    //   query: {startAt: this.exampleVal2}})
  }
}
