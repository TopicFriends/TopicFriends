import {Injectable, Input} from '@angular/core';
import {TagEntry} from '../user-profile/tag-entry'

function tag(name: string, logo?: string) {
  return new TagEntry(name, logo);
}

function tagLogoTipo(name: string, logo?: string) {
  return tag(name, logo); // pass visual hint later
}


@Injectable()
export class TopicsService {

  constructor() { }

  // All possible tags
  // @Input() public inputTagList: TagEntry[] = [tag('Angular'), tag('Ionic'), tag('Firebase')];
  /** I moved it here, because @Input stopped working for some reason and I am to distracted to troubleshoot it :-\ */
  @Input() public inputs: TagEntry[] = this.transformTags([
    tag('Angular'), tag('Ionic'), tag('Firebase'),
    tag('Protractor'), tag('Karma'), tag('Jasmine'),
    tag('PHP'), tag('Material Design', null), tag('TypeScript'),
    tag('Django'), tag('Python'), tag('Ruby'), tag('Ruby On Rails'),
    tag('PeopleMatcher'),
    tag('Android'), tag('Kotlin'), 'KotlinJS', tag('Java'),
    tag('iOS'), tag('Swift'), 'Objective C',
    tag('D3'),
    tag('Angular DI', null), tag('Angular Modules', null), tag('Angular Router', null), 'Webpack',
    tag('VR', null),
    'JavaScript', tag('ECMAScript', 'es6'),
    'Elm', 'Scala', tag('.NET', 'dotnet'), '.NET Core', 'Docker', 'ElasticSearch',
    tagLogoTipo('Ember'), 'React', 'Git', 'TensorFlow', 'JHipster', tagLogoTipo('Meteor'), tagLogoTipo('Hoodie'),
    'Laravel',
  ]);


  private transformTags(inputList: (TagEntry|string)[]): TagEntry[] {
    return inputList.map(el => {
      if (el instanceof TagEntry) {
        return el;
      } else {
        return tag(el);
      }
    })
  }

}
