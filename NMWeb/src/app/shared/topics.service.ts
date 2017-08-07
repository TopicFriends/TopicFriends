import {Injectable, Input} from '@angular/core';
import {TagEntry} from '../user-profile/tag-entry'

function tag(name: string, logo?: string) {
  return new TagEntry(name, logo);
}

function tagNoIcon(name: string) {
  return new TagEntry(name, null);
}

/** Will cause double width for icon, because the logotipo's font otherwise is too tiny */
function tagLogoTipo(name: string, logo?: string) {
  return tag(name, logo); // pass visual hint later
}


@Injectable()
export class TopicsService {

  constructor() { }

  // All possible tags
  // @Input() public inputTagList: TagEntry[] = [tag('Angular'), tag('Ionic'), tag('Firebase')];
  /** I moved it here, because @Input stopped working for some reason and I am to distracted to troubleshoot it :-\ */
  public topics: TagEntry[] = this.transformTags([
    tag('Angular'), tag('Ionic'), tag('Firebase'),
    tag('Protractor'), tag('Karma'), tag('Jasmine'),
    tag('PHP'), tag('Material Design', null/** TODO: has icon: https://material.io */ ), tag('TypeScript'),
    tag('Django'), tag('Python'), tag('Ruby'), tagLogoTipo('Ruby On Rails'),
    tag('PeopleMatcher'),
    tag('UAP', null),
    tag('Android'), tag('Kotlin'), tag('KotlinJS', null), tag('Java'), 'C++', 'C',
    tagNoIcon('C#'), tagNoIcon('ASP.NET'), tagNoIcon('ASP.NET MVC'), tagNoIcon('ASP.NET Core MVC') /* https://github.com/aspnet/Mvc */,
    tag('iOS'), tag('Swift'), tag('Objective C', null),
    tag('D3'),
    tag('Angular DI', null), tag('Angular Modules', null), tag('Angular Router', null), 'Webpack',
    tagNoIcon('Web Development'), tagNoIcon('CMS'), tagNoIcon('Selenium'), tagNoIcon('Blog Software'),
    tag('VR', null),
    'JavaScript', tag('ECMAScript', 'es6'),
    'Elm', 'Scala', tag('.NET', 'dotnet'), tag('.NET Core', null), 'Docker', 'ElasticSearch',
    tagLogoTipo('Ember'), 'React', 'Redux', tagNoIcon('React Native'), 'Xamarin', tagNoIcon('Xamarin.Forms'),
    'Git',
    tag('TensorFlow', null), 'OpenCV',
    'Appium', tagNoIcon('Robotium'),
    'JHipster', tagLogoTipo('Meteor'), tagLogoTipo('Hoodie'),
    'Laravel', 'CakePHP', 'Zend Framework',
    tag('CSS3', 'css-3'), tag('Responsive Design', null), tag('HTML5', 'html-5'),
    tag('PWA', null), tag('REST', null), tag('HTTP', null), tag('WebSocket'), 'WebRTC', tagLogoTipo('Upwork'),
    tagLogoTipo('NodeJS'), tagLogoTipo('NPM'),
    tagLogoTipo('Sass'), tagLogoTipo('Stylus'), tagLogoTipo('Less'),
    'Bitcoin', 'Ethereum', 'Steemit', 'Monero',
    'Cryptography', 'Cryptocurrency', 'Blockchain',
    'Cordova', 'PhoneGap',
    tagNoIcon('Geolocation'),
    tagNoIcon('Social graphs'),
    tagNoIcon('NoSQL'), 'PostgreSQL', 'MySQL', 'Oracle',
    tagNoIcon('HMR - Hot Module Replacement'),
    tagNoIcon('RxJS'), tagNoIcon('RxJava'), 'ReactiveX',
    tagNoIcon('Angular Material'), tagNoIcon('AngularFire'), /* Note: versions will be specified separately, thus not "AngularFire2" */
    'SVG', tag('WordPress', 'wordpress-icon'), 'Drupal', 'Joomla', 'jQuery', 'CodeIgniter', 'Symfony',
    'PouchDB', tagNoIcon('CloudBoost'), 'Spring', tagLogoTipo('Vaadin'), 'Yarn',
    'Heroku', 'Jenkins', 'Vagrant', tag('Kubernetes', 'kubernets' /* they have a typo*/),
    tag('Vue.js', 'vue'),
    tag('Linux', 'tux'), 'Debian', 'Ubuntu', tag('SUSE Linux', 'suse'), tag('RedHat Linux', 'redhat'),
    tag('Fedora', 'fedora'), tagLogoTipo('CentOS'), tagNoIcon('Gentoo Linux'), tag('Arch Linux', 'archlinux'),
    'FreeBSD',
    'Redis', 'CouchBase', 'CouchDB', tagLogoTipo('MongoDB'), 'Memcached',
    'PrestaShop', 'WooCommerce', tagNoIcon('osCommerce'), 'Magento', 'Shopify', 'BigCommerce',
    'Travis CI',
    'Wix',
    tagLogoTipo('Lucene'), tagLogoTipo('Solr'),
    tag('macOS', 'macosx'),
    'Kinto',
    'KickStarter',
    'Lua',
    'Sencha',
    'Rust', tagNoIcon('D'),
    tagLogoTipo('AWS'), 'Azure', tagLogoTipo('Babel'), 'Bower', 'Gulp',
    tagNoIcon('Groovy'), 'GWT', 'Haskell', tagNoIcon('Elixir'), 'Erlang',
    tagNoIcon('JetBrains MPS'),
    'Ansible',
    'Perl',
    'Polymer', tag('Web Components', 'webcomponents'),
    'Bootstrap',
    'Capistrano', 'Chef', 'Puppet',
    'Clojure', 'CoffeeScript',
    'Electron',
    'Gradle', 'Grails',
    'Neo4j', 'Hadoop',
    'OpenGL', 'Unity',
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
