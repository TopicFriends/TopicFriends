export class Topic {

  id

  parts?: TopicMap

  addIsA(topic: Topic | TopicStub) {
    return this
  }

  addUses(topic: Topic | TopicStub) {
    return this
  }

  addSupports(topic: Topic | TopicStub) {
    return this
  }

}

function t(param?: { short?: string; logo?: string, org? } | any): Topic {
  return new Topic()
}

export interface TopicStub {
  short?: string
  org?: string
  logo?: string
  parts?: TopicMap
  uses?: Array<TopicUsedStub | TopicStub>
  isA?: TopicStub | Array<TopicUsedStub | TopicStub>
  /** Is capable of */
  supports?: Array<TopicUsedStub | TopicStub>
}

export interface ITopicsCollection {
  [topicId: string]: TopicStub
}

export interface TopicMap {
  [topicId: string]: TopicStub
}

export interface TopicUsedStub {
  topic: TopicStub
  since?: string
  comments: string
}

// export interface TopicUsedMap {
//   [topicId: string]: TopicStub | Topic
// }

export interface ITopicsCollection2 {
  topics: TopicMap
}

//
// export class TopicsCollectionTest1 implements ITopicsCollection {
//   x = {org: "test"}
// }

export class TopicsCollectionTest implements ITopicsCollection2 {
  topics: {
    x: {org: "test"}
  }
}

export class TopicsColl3 {
  Java: TopicStub & {parts: {Swing: TopicStub}} = {short: 'Jav Jav 2',
    parts: {
      Swing: {short: 'sw'}
    }
  }
  Code_Generation: TopicStub =  {}
  "Test space": TopicStub =  {}
  "Domain-Specific Language": TopicStub =  {short: 'DSL'}
  "Model-Driven Architecture": TopicStub =  {short: 'MDA'}

  "Meta Programming System": TopicStub =  {short: 'MPS', logo: 'mps-example', org: 'JetBrains',
    isA: [
      this["Domain-Specific Language"],
    ],
    uses: [
      {topic: this.Java, since: '2017', comments: 'uses Java for XYZ'},
    ],
    supports: [
      this.Code_Generation
    ],
    parts: {
      Generator: {},
      TextGen: {},
      Editor: {},
    }
  }
  Smth_That_Uses_MPS_TextGen: TopicStub = {
    short: 'smth',
    uses: [
      this.Java.parts.Swing,
      this.Java,
    ]
  }
}

export class TopicsCollection2 implements ITopicsCollection2 {
  topics: TopicMap = {
    Java: {short: 'Jav Jav'},
    Code_Generation: {},
    "Test space": {},
    "Domain-Specific Language": {short: 'DSL'},
    "Model-Driven Architecture": {short: 'MDA'},

    "Meta Programming System": {short: 'MPS', logo: 'mps-example', org: 'JetBrains',
      isA: [
        this.topics["Domain-Specific Language"],
      ],
      uses: [
        {topic: this.topics.Java, since: '2017', comments: 'uses Java for XYZ'},
      ],
      supports: [
        this.topics.Code_Generation
      ],
      parts: {
        Generator: {},
        TextGen: {},
        Editor: {},
      }
    },
    // Angular: {
    //   parts: {
    //     Router: {} /* id will be "Angular_Router" */,
    //     Change_Detection: {},
    //   }
    // },
    Smth_That_Uses_Angular_Router: {
      uses: [
        this.topics.Angular.parts.Router
      ]
    },
    // Ionic: {
    //   parts: {
    //     Stencil: {},
    //   },
    //   uses: [
    //     this.topics.Angular,
    //   ]
    // },

    User_Interface_Library: {short: 'UI Lib'},

    "Riot.JS": {isA: this.topics.User_Interface_Library},
  }

}


export class TopicsCollection /* implements ITopicsCollection*/ {
  //
  // Java = t()
  // Code_Generation = t()
  // "Test space" = {}
  // "Domain-Specific Language" = t({short: 'DSL'})
  // "Model-Driven Architecture" = t({short: 'MDA'})
  //
  //
  // "Meta Programming System" = t({short: 'MPS', logo: 'mps-example', org: 'JetBrains'})
  //   .addIsA(this["Domain-Specific Language"])
  //   .addUses(this.Java)
  //   .addUses(this.Code_Generation)
  //   .addSupports(this.Code_Generation)
  // // Approach 1 to parent-child:
  // "MPS Generator" = t(this["Meta Programming System"])
  // "MPS TextGen" = t(this["Meta Programming System"])
  // "MPS Editor" = t(this["Meta Programming System"])
  //
  // // Approach 2 to parent-child:
  // Angular = {
  //   parts: {
  //     Router: t() /* id will be "Angular_Router" */,
  //     Change_Detection: t(),
  //   }
  // }
  //
  // Smth_That_Uses_Angular_Router = t()
  //   .addUses(this.Angular.parts.Router)
  //
  // Ionic = {
  //   children: {
  //     Stencil: t()
  //   }
  // } // FIXME!!!! How to declare Stencil here?
  //
  //
  //
  // UI_Library = t()
  //
  // "Riot.JS" = t()
  //   .addIsA(this.UI_Library)
  //


  //

  // ng-bootstrap and ngx-bootstrap

  // TODO: music (Zardax Torremolinos, Alex MorNie)
  // TODO HyperApp (Jairo)
  // TODO Riot JS (Jairo)



  // =====

  // note: only topic fields in this class

  // THEN iterate over the objects and assign id-s based on

  // Idea: can use MPS as DSL for defining topics and generating code
  // BUT: when this becomes user-editable in firebase anyway, this will not make sense probably
}

export const TOPICS = new TopicsColl3()

export function processTopicsCollection(tc: TopicsCollection) {
  for (let topicKey of Object.keys(tc)) {
    console.log('topic key: ', topicKey)
    console.log('topic val: ', tc[topicKey])
  }
}




