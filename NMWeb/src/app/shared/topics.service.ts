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
  @Input() public topics: TagEntry[] = this.transformTags([
    tag('Angular'), tag('Ionic'), tag('Firebase'),
    tag('Protractor'), tag('Karma'), tag('Jasmine'),
    tag('PHP'), tag('Material Design', null), tag('TypeScript'),
    tag('Django'), tag('Python'), tag('Ruby'), tag('Ruby On Rails'),
    tag('PeopleMatcher'),
    tag('UAP', null),
    tag('Android'), tag('Kotlin'), tag('KotlinJS', null), tag('Java'),
    tag('iOS'), tag('Swift'), tag('Objective C', null),
    tag('D3'),
    tag('Angular DI', null), tag('Angular Modules', null), tag('Angular Router', null), 'Webpack',
    tag('VR', null),
    'JavaScript', tag('ECMAScript', 'es6'),
    'Elm', 'Scala', tag('.NET', 'dotnet'), tag('.NET Core', null), 'Docker', 'ElasticSearch',
    tagLogoTipo('Ember'), 'React', 'Git', tag('TensorFlow', null), 'JHipster', tagLogoTipo('Meteor'), tagLogoTipo('Hoodie'),
    'Laravel',
    tag('CSS3', 'css-3'), tag('Responsive Design', null), tag('HTML5', 'html-5')
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
