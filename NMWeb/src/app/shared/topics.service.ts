import {Injectable, Input} from '@angular/core';
import {TagEntry} from '../user-profile/tag-entry'

function tag(name: string, logo?: string) {
  return new TagEntry(name, logo);
}

function tagNoIcon(name: string, gitHubLink?: string) {
  return new TagEntry(name, null);
}

/** Will cause double width for icon, because the logotipo's font otherwise is too tiny */
function tagLogoTipo(name: string, logo?: string) {
  return tag(name, logo); // pass visual hint later
}

export const angular = tag('Angular')
export const firebase = tag('Firebase')
export const angularMaterial = tagNoIcon('Angular Material')
export const angularFire = tagNoIcon('AngularFire')
export const rxJs = tagNoIcon('RxJS')
export const materialDesign = tag('Material Design', null/** TODO: has icon: https://material.io */ )
export const typeScript = tag('TypeScript')
export const ionic = tag('Ionic')
export const reactiveX = tag('ReactiveX')
export const angularFlexLayout = tagNoIcon('Angular Flex-Layout', 'https://github.com/angular/flex-layout')
export const angularFlexLayoutResponsiveApi = tagNoIcon(
  'Angular Flex-Layout Responsive API', 'https://github.com/angular/flex-layout/wiki/Responsive-API')
export const  protractor = tag('Protractor')
export const sass = tagLogoTipo('Sass')
export const npm = tagLogoTipo('NPM')
export const karma = tag('Karma')
export const jasmine = tag('Jasmine')
export const webPack = tag('Webpack')

@Injectable()
export class TopicsService {

  constructor() { }

  // All possible tags
  // @Input() public inputTagList: TagEntry[] = [tag('Angular'), tag('Ionic'), tag('Firebase')];
  /** I moved it here, because @Input stopped working for some reason and I am to distracted to troubleshoot it :-\ */
  public topics: TagEntry[] = this.transformTags([
    angular, tagNoIcon('Angular Change Detection'), tagNoIcon('Angular Universal'), tagNoIcon('AngularJS'),
    tagNoIcon('PrimeNG'), ionic, firebase,
    tagNoIcon('Web Performance Optimizations'),
    tagNoIcon('Google Maps'),
    'Facebook',
    'Twitter',
    'LinkedIn',
    'Google Plus',
    protractor, karma, jasmine,
    tagNoIcon('PrimeFaces'),
    tag('PHP'), materialDesign, typeScript,
    tag('Django'), tag('Python'), tag('Ruby'), tagLogoTipo('Ruby On Rails'),
    tag('PeopleMatcher'),
    tag('UAP', null),
    tag('Android'), tag('Kotlin'), tag('KotlinJS', null), tag('Java'), tagNoIcon('Java EE'), 'C++', 'C',
    tagNoIcon('C#'), tagNoIcon('ASP.NET'), tagNoIcon('ASP.NET MVC'), tagNoIcon('ASP.NET Core MVC') /* https://github.com/aspnet/Mvc */,
    tag('iOS'), tag('Swift'), tag('Objective-C', null),
    tag('D3'),
    tag('Angular DI', null), tag('Angular Modules', null), tag('Angular Router', null),
    tagNoIcon('Angular Reactive Forms'), tagNoIcon('Angular Template-Driven Forms'),
    webPack,
    tagNoIcon('Web Development'), tagNoIcon('CMS'), tagNoIcon('Selenium'), tagNoIcon('Blog Software'),
    tagNoIcon('VR'),
    'JavaScript', tag('ECMAScript', 'es6'),
    'Elm', 'Scala', tag('.NET', 'dotnet'), tag('.NET Core', null), 'Docker', 'ElasticSearch',
    tagLogoTipo('Ember'), 'React', 'Redux', 'MobX', tagNoIcon('React Native'), 'Xamarin', tagNoIcon('Xamarin.Forms'),
    'Git',
    tag('TensorFlow', null), 'OpenCV',
    'Appium', tagNoIcon('Robotium'),
    'JHipster', tagLogoTipo('Meteor'), tagLogoTipo('Hoodie'),
    'Laravel', 'CakePHP', 'Zend Framework', 'CodeIgniter', 'Symfony',
    tag('CSS3', 'css-3'), tag('Responsive Design', null), tag('HTML5', 'html-5'),
    tag('PWA', null), tagNoIcon('SPA'), tag('REST', null), tag('HTTP', null), tag('WebSocket'), 'WebRTC', tagLogoTipo('Upwork'),
    tagLogoTipo('NodeJS'), npm,
    sass, tagLogoTipo('Stylus'), tagLogoTipo('Less'),
    'Bitcoin', 'Ethereum', 'Steemit', 'Monero',
    tagNoIcon('Cryptocurrency'), tagNoIcon('Blockchain'), tagNoIcon('Cryptography'),
    'Cordova', 'PhoneGap',
    tagNoIcon('Geolocation'),
    tagNoIcon('Social graphs'), 'Open Graph',
    tagNoIcon('NoSQL'), 'PostgreSQL', 'MySQL', 'Oracle',
    tagNoIcon('HMR - Hot Module Replacement'),
    rxJs, tagNoIcon('RxJava'), reactiveX,
    angularMaterial, angularFire, /* Note: versions will be specified separately, thus not "AngularFire2" */
    'SVG', tag('WordPress', 'wordpress-icon'), 'Drupal', 'Joomla', tagLogoTipo('jQuery'), 'jQuery Mobile',
    'PouchDB', tagNoIcon('CloudBoost'), 'Spring', tagLogoTipo('Vaadin'), 'Yarn',
    'Heroku', 'Jenkins', 'Vagrant', tag('Kubernetes', 'kubernets' /* they have a typo*/),
    tag('Vue.js', 'vue'),
    tag('Linux', 'tux'), tag('Debian Linux', 'debian'), tag('Ubuntu Linux', 'ubuntu') , tag('SUSE Linux', 'suse'),
    tag('RedHat Linux', 'redhat'),
    tag('Fedora Linux' /* Officially just "Fedora", but better for filtering*/, 'fedora'), tagLogoTipo('CentOS Linux', 'centos'),
    tagNoIcon('Gentoo Linux'), tag('Arch Linux', 'archlinux'),
    'FreeBSD',
    'Redis', 'CouchBase', 'CouchDB', tagLogoTipo('MongoDB'), 'Memcached',
    'PrestaShop', 'WooCommerce', tagNoIcon('osCommerce'), 'Magento', 'Shopify', tagNoIcon('BigCommerce'),
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
    'Bootstrap', tagNoIcon('Clarity Design System') /* https://vmware.github.io/clarity/ */ ,
    'Capistrano', 'Chef', 'Puppet',
    'Clojure', 'CoffeeScript',
    'Electron',
    'Gradle', 'Grails',
    'Neo4j', 'Hadoop',
    tagLogoTipo('OpenGL'), 'Unity',
    // tagLogoTipo('Backbone.js', 'backbone-icon'),
    tag('Backbone.js', 'backbone-icon'),
    tagNoIcon('Backend'),
    tagLogoTipo('Express'), 'Socket.IO',
    'Sinatra',
    tagNoIcon('ngrx' /* I've also seen different capitalizations: NgRx, ngRx etc */),
    'Flask', tagNoIcon('Pylons'), tagNoIcon('Zope'),
    tagNoIcon('UX'), tagNoIcon('UI'), tagNoIcon('Usability'), tagNoIcon('Accessibility'),
    'GraphQL', 'Grunt', tag('Browserify', 'browserify-icon'),
    'Hibernate', tagNoIcon('NHibernate'), 'MariaDB', 'Material-UI',
    tagNoIcon('FinTech'), tagNoIcon('PropTech'), tagNoIcon('Startups'),
    tagNoIcon('Finance'), tagNoIcon('Financing'),
    tagNoIcon('Law'),
    tagNoIcon('SEO'), tagNoIcon('JBoss'),
    tagNoIcon('Marketing'), tagNoIcon('Advertising'),
    tagNoIcon('Functional Programming'), tag('EC2', 'aws-ec2'), tagNoIcon('GCP'),
    'CocoaPods',
    tagLogoTipo('ArangoDB'),
    'Auth0',
    'Mapbox',
    tag('GitHub', 'github-icon'),
    tagNoIcon('Stencil'), /* Ionic */
    'OData', tagNoIcon('PowerBI'), tagNoIcon('SignalR'), // Mark S.
    angularFlexLayout, angularFlexLayoutResponsiveApi,
    // Voice interfaces, Alexa etc (O. Carracedo)
    tagNoIcon('Frontend'),
    tagNoIcon('Telerik UI'),
    tagNoIcon('Kendo UI'),
    'NativeScript',
    tagNoIcon('SOAP'),
    tagNoIcon('Microsoft SQL Server'),
    tagNoIcon('Microservices'),
    tagNoIcon('Testing'),
    tagNoIcon('Quality Assurance'),
    tagNoIcon('Quality Engineering'),
    'Markdown',
    tagNoIcon('English Language'), tagNoIcon('Spanish Language'),
    tagNoIcon('French Language'), tagNoIcon('Portuguese Language'), tagNoIcon('German Language'),
    tagNoIcon('Italian Language'), tagNoIcon('Polish Language'),
    tagNoIcon('Russian Language'), tagNoIcon('Chinese Language'), tagNoIcon('Japanese Language'),
    tagNoIcon('Arabic Language'), tagNoIcon('Hindi Language'), tagNoIcon('Turkish Language'),
    tagNoIcon('Bioinformatics'), tagNoIcon('Layouts'), tagNoIcon('Graphic Design'), tagNoIcon('Logo Design'),
    tagNoIcon('Venture Capital'), tagNoIcon('Seed Funding'), tagNoIcon('Angel Investment'), tagNoIcon('Bootstrapping'),
    tagNoIcon('Social Media'),
    tagNoIcon('Internet Business'), tagNoIcon('Business'),
    tagNoIcon('Entrepreneurship'), tagNoIcon('Business Development'), tagNoIcon('Small Business'), tagNoIcon('Business Administration'),
    tagNoIcon('Mobile apps'),
    tagNoIcon('Neuroscience'),
    tagNoIcon('Ecopreneurship'),
    tagNoIcon('Neural Networks'),
    tagNoIcon('Convolutional Neural Networks'),
    tagNoIcon('Machine Learning'),
    tagNoIcon('Artificial Intelligence'),
    tagNoIcon('Deep Learning'),
    tagNoIcon('Deep Mind'),
    tagNoIcon('Big Data'),
    tagNoIcon('Data Mining'),
    tagNoIcon('Data Warehousing'),
    tagNoIcon('DevOps'),
    tagNoIcon('System Administration'),
    tagNoIcon('Open Source'),
    tagNoIcon('Augmented Reality'),
    tagNoIcon('Photography'),
    tagNoIcon('Video Editing'),
    tagNoIcon('YouTube'),
    tagNoIcon('Explainer Videos'),
    tagNoIcon('Geomarketing'),
    tag('R Language', 'r-lang'),
    // TopTal, Freelance, Freelance Platforms, freelancer.com, elance
    'Semantic UI',
    'Foundation',
    // Adobe photoshop, Adobe illustrator, Adobe After Effects
    // calabash
    // GitHub. Jira. GitLab.
    // Mapbox Studio
    // json, oauth
    // saucelabs, waffle, Sketch
    // TODO: check Malaga meetup topics
    // FIWARE, Smart City, Green Tech, IoT, IoE
    // web3, Truffle Framework, Distributed Ledger Technology, Attention Economy, Ethlance, Steem,
    // remix, mist, DApp, DAO, TheDao
    // Smart contracts, Solidity, Private coin,
    // Ionic Creator, Bootstrap Studio
    // Hybris
    // Internationalization (i18n), localization (l11n), translations
    // English / Spanish language practice / interchange
    // CSS View Encapsulation, Shadow DOM
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

  getTopicById(topicId: string): TagEntry {
    const retVal = this.topics.find(it => it.name === topicId)
    console.log('getTopicById', topicId, retVal)
    return retVal
  }
}
