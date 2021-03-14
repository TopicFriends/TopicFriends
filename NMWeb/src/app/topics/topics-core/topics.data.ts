import {
  TagEntry,
  TopicUrls,
} from '../topics-shared/tag-entry'

export function tag(name: string, logo?: string, webSite?: string, related?: TagEntry[], urls?: TopicUrls) {
  return new TagEntry(name, logo, webSite, related, urls);
}

function tagNoIcon(name: string, gitHubLink?: string, related?: TagEntry[], urls?: TopicUrls) {
  return new TagEntry(name, null, null, related, urls);
}

/** Will cause double width for icon, because the logotipo's font otherwise is too tiny */
function tagLogoTipo(name: string, logo?: string, website?, related?: TagEntry[], urls?: TopicUrls) {
  return tag(name, logo, website, related, urls); // pass visual hint later
}

export const firebase = tag('Firebase').setRelated(
  // most are from firebase console left navbar:
  tagNoIcon('Firebase Authentication').setLogo('Firebase'),
  tagNoIcon('Firebase Realtime Database').setLogo('Firebase'),
  tagNoIcon('Firebase Cloud Firestore').setLogo('Firebase'),
  tagNoIcon('Firebase Storage').setLogo('Firebase'),
  tagNoIcon('Firebase Hosting').setLogo('Firebase'),
  tagNoIcon('Firebase Cloud Functions').setLogo('Firebase'),
  tagNoIcon('Firebase Stability').setLogo('Firebase'),
  tagNoIcon('Firebase Crashlytics').setLogo('Crashlytics'),
  tagNoIcon('Firebase Analytics').setLogo('Firebase'),
  tagNoIcon('Firebase Grow').setLogo('Firebase'),
  // Firebase: hosting, analytics, authentication, ...

)
export const angularMaterial = tagNoIcon('Angular Material')
export const angularFire = tagNoIcon('AngularFire')
export const rxJs = tagNoIcon('RxJS')
export const materialDesign = tag('Material Design', null/** TODO: has icon: https://material.io */)
export const typeScript = tag('TypeScript')
export const ionic = tag('Ionic', 'ionic', 'https://ionicframework.com/', [],
  new TopicUrls(
    'https://en.wikipedia.org/wiki/Ionic_(mobile_app_framework)',
    'https://github.com/ionic-team/ionic',
    'https://www.npmjs.com/package/ionic',
    'https://stackoverflow.com/questions/tagged/ionic-framework',
    'https://stackshare.io/ionic',
    'https://twitter.com/Ionicframework',
  ));
export const reactiveX = tag('ReactiveX')
export const angularFlexLayout = tagNoIcon('Angular Flex-Layout', 'https://github.com/angular/flex-layout').setLogo('angular')
export const angularFlexLayoutResponsiveApi = tagNoIcon(
  'Angular Flex-Layout Responsive API', 'https://github.com/angular/flex-layout/wiki/Responsive-API').setLogo('angular')
export const protractor = tag('Protractor')
export const sass = tagLogoTipo('Sass')
export const npm = tagLogoTipo('NPM')
export const karma = tag('Karma')
export const webPack = tag('Webpack')
export const angular = tag('Angular', 'angular', 'https://angular.io/', [
    tag('Angular Change Detection', 'angular'),
    tag('Angular DI', 'angular'),
    tag('Angular Modules', 'angular'),
    tag('Angular Router', 'angular'),
    tag('Angular Reactive Forms', 'angular'),
    tag('Angular Template-Driven Forms', 'angular'),
    angularFlexLayout,
    angularFlexLayoutResponsiveApi,
    tag('Angular Lazy Loading', 'angular'),
  ],
  new TopicUrls(
    'https://en.wikipedia.org/wiki/Angular_(application_platform)',
    'https://github.com/angular/angular',
    null,
    'https://stackoverflow.com/questions/tagged/angular',
    'https://stackshare.io/angular-2',
    'https://twitter.com/angular',
  ));
export const businessNetworking = tag('Business Networking' /* search terms: growing network */, 'generic/business--chart-line')
export const entrepreneurship = tag('Entrepreneurship', 'generic/business--chart-line')
export const jasmine = tag('Jasmine')
export const topics = [
  angular, tagNoIcon('Angular Universal').setLogo('angular'),
  tagNoIcon('AngularJS', null, [],
    new TopicUrls(
      'https://en.wikipedia.org/wiki/AngularJS',
      'https://github.com/angular/angular.js',
      null,
      'https://stackoverflow.com/questions/tagged/angularjs',
      'https://stackshare.io/angularjs',
      null,
    )),
  tagNoIcon('PrimeNG', null,[],
    new TopicUrls(
      null,
      'https://github.com/primefaces/primeng',
      'https://www.npmjs.com/package/primeng',
      'https://stackoverflow.com/questions/tagged/primeng',
      null,
      'https://twitter.com/prime_ng'
    )),
  ionic, firebase,
  tagNoIcon('Web Performance Optimizations'),
  tagNoIcon('Google Maps',null, [],
    new TopicUrls(
      'https://en.wikipedia.org/wiki/Google_Maps',
      'https://github.com/googlemaps/',
      'https://www.npmjs.com/package/google-maps',
      'https://stackoverflow.com/questions/tagged/google-maps',
      'https://stackshare.io/google-maps',
      'https://twitter.com/googlemaps'
    )),
  'Facebook',
  'Twitter',
  'LinkedIn',
  'Google Plus',
  protractor, karma, jasmine,
  // Cucumber
  tagNoIcon('PrimeFaces',null, [],
    new TopicUrls(
      'https://es.wikipedia.org/wiki/PrimeFaces',
      'https://github.com/primefaces/primefaces',
      null,
      'https://stackoverflow.com/questions/tagged/primefaces',
      null,
      'https://twitter.com/primefaces'
    )),
  tag('PHP', 'php', 'http://www.php.net/', [],
    new TopicUrls(
      'https://en.wikipedia.org/wiki/PHP',
      'https://github.com/php',
      'https://www.npmjs.com/search?q=php&page=1&ranking=popularity',
      'https://stackoverflow.com/questions/tagged/php',
      'https://stackshare.io/php',
      'https://twitter.com/php_net'
    )),
  materialDesign, typeScript,
  tag('Django', 'django', 'https://www.djangoproject.com/', [],
    new TopicUrls(
      'https://en.wikipedia.org/wiki/Django_(web_framework)',
      'https://github.com/django/django',
      null,
      'https://stackoverflow.com/questions/tagged/django',
      'https://stackoverflow.com/questions/tagged/django',
      'https://twitter.com/djangoproject'
    )),
  tag('Python', 'python', 'https://www.python.org/', [],
    new TopicUrls(
      'https://en.wikipedia.org/wiki/Python_(programming_language)',
      'https://github.com/python',
      null,
      'https://stackoverflow.com/questions/tagged/python',
      'https://stackshare.io/python',
      'https://twitter.com/ThePSF'
    )),
  tag('Ruby'), tagLogoTipo('Ruby On Rails'),
  tag('PeopleMatcher'),
  tag('TopicFriends', 'PeopleMatcher'),
  tag('UAP', null),
  tag('Android'), tag('Kotlin'), tag('KotlinJS', null), tag('Java'), tagNoIcon('Java EE'), 'C++', 'C',
  tag('C#', 'c_sharp'),
  tagNoIcon('ASP.NET'), tagNoIcon('ASP.NET MVC'), tagNoIcon('ASP.NET Core MVC') /* https://github.com/aspnet/Mvc */,
  tag('F#', 'fsharp'), 'JRuby',
  tag('iOS'), tag('Swift'), tag('Objective-C', null),
  tag('D3'),

  webPack,
  tagNoIcon('Web Development'), tagNoIcon('CMS'), tagNoIcon('Selenium'), tagNoIcon('Blog Software'),
  tagNoIcon('Blogging'),
  tagNoIcon('VR'),
  'JavaScript', tag('ECMAScript', 'es6'),
  'Elm', 'Scala', tag('.NET', 'dotnet'), tag('.NET Core', null), 'Docker', 'ElasticSearch',
  tagNoIcon('Akka'),
  tagLogoTipo('Ember'), 'React', 'Redux', 'MobX', tagNoIcon('React Native'),
  'Xamarin', tagNoIcon('Xamarin.Forms'),
  'Git',
  tag('TensorFlow', 'tensorflow'), 'OpenCV', /* (AI) Brain.js - GPU accelerated Neural networks in JavaScript - https://brain.js.org/#/ */
  'Appium', tagNoIcon('Robotium'),
  'JHipster', tagLogoTipo('Meteor'), tagLogoTipo('Hoodie'),
  'Laravel', 'CakePHP', 'Zend Framework', 'CodeIgniter', 'Symfony',
  tag('CSS3', 'css-3'), tag('Responsive Design', null), tag('HTML5', 'html-5'),
  tag('PWA', null), tagNoIcon('SPA'), tag('REST', null), tag('HTTP', null), tag('WebSocket'), 'WebRTC', tagLogoTipo('Upwork'),
  tagLogoTipo('NodeJS').setName('Node.JS'), npm,
  tag('Seneca', 'seneca', 'http://senecajs.org/', [], new TopicUrls(
    null,
    'https://github.com/senecajs/seneca',
    'https://www.npmjs.com/package/seneca',
    'https://stackoverflow.com/questions/tagged/seneca',
    'https://stackshare.io/seneca',
    'https://twitter.com/senecajs',
    null
  )),
  tag('Swagger', 'swagger', 'https://swagger.io/', [], new TopicUrls(
    'https://en.wikipedia.org/wiki/Swagger_(software)',
    'https://github.com/swagger-api/swagger-core',
    'https://www.npmjs.com/package/swagger',
    'https://stackoverflow.com/questions/tagged/swagger',
    'https://stackshare.io/swagger-ui' /* not really swagger itself */,
    'https://twitter.com/swaggerapi',
    'https://alternativeto.net/software/swagger-io',
    'https://github.com/swagger-api/swagger-core/releases',
    'https://npm.runkit.com/swagger',
  )),
  sass, tagLogoTipo('Stylus'), tagLogoTipo('Less'),
  'Bitcoin', 'Ethereum', 'Steemit', 'Monero',
  tagNoIcon('Cryptocurrency'), tagNoIcon('Blockchain'), tagNoIcon('Cryptography'),
  // TODO: segregated witness (SegWit)
  'Cordova', 'PhoneGap',
  tagNoIcon('Game Design'),
  tagNoIcon('Game Development'),
  tagNoIcon('Geolocation'),
  tagNoIcon('Social graphs'), 'Open Graph',
  tagNoIcon('NoSQL'), 'PostgreSQL', 'MySQL', 'Oracle', // TODO: sqlite
  tagNoIcon('HMR - Hot Module Replacement'),
  rxJs, tagNoIcon('RxJava'), reactiveX,
  angularMaterial, angularFire, /* Note: versions will be specified separately, thus not "AngularFire2" */
  'SVG', tag('WordPress', 'wordpress-icon'), 'Drupal', 'Joomla', tagLogoTipo('jQuery'), 'jQuery Mobile', tagNoIcon('jQuery UI'),
  'PouchDB', tagNoIcon('CloudBoost'), 'Spring', tagLogoTipo('Vaadin'), 'Yarn',
  'Heroku', 'Jenkins', 'Vagrant', tag('Kubernetes', 'kubernets' /* they have a typo*/),
  tag('Vue.js', 'vue'), /* TODO: Weex - like Ionic for Vue? By Alibaba Group on Apache foundation */ /* TODO Rax by Alibaba, works with Weex */
  tag('Linux', 'tux'), tag('Debian Linux', 'debian'), tag('Ubuntu Linux', 'ubuntu') , tag('SUSE Linux', 'suse'),
  tag('RedHat Linux', 'redhat'),
  tag('Fedora Linux' /* Officially just "Fedora", but better for filtering*/, 'fedora'),
  tagNoIcon('Fedora' /* Just for compatibility with older data that I (Karol) have in firebase */),
  tagLogoTipo('CentOS Linux', 'centos'),
  tagNoIcon('Gentoo Linux'), tag('Arch Linux', 'archlinux'),
  'FreeBSD',
  'Redis', 'CouchBase', 'CouchDB', tagLogoTipo('MongoDB'), 'Memcached', 'RabbitMQ',
  tagNoIcon('Mongoose'),
  'PrestaShop', 'WooCommerce', tagNoIcon('osCommerce'), 'Magento', 'Shopify', tagNoIcon('BigCommerce'),
  tagNoIcon('E-Commerce'),
  tagNoIcon('Merchandising'),
  'Travis CI',
  'CircleCI',
  tagNoIcon('Continuous Integration'),
  tagNoIcon('Continuous Delivery'),
  // TODO: Grafana -- The open observability platform - Grafana is the open source analytics & monitoring solution for every database -- tool for beautiful monitoring and metric analytics & dashboards for Graphite, InfluxDB & Prometheus, Elasticsearch
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
  'Clojure',  'CoffeeScript', /* TODO ClojureScript */
  'Electron',
  tagNoIcon('MyBatis'),
  'Gradle', 'Grails',
  'Neo4j', 'Hadoop',
  tagLogoTipo('OpenGL'), 'Unity',
  // tagLogoTipo('Backbone.js', 'backbone-icon'),
  tag('Backbone.js', 'backbone-icon'),
  tagNoIcon('Backend'),
  'Socket.IO',
  tagLogoTipo('Express', 'express', 'https://expressjs.com', [
      tag('Kraken.js', 'krakenjs', 'http://krakenjs.com/'),
      tag('FeathersJS', 'feathersjs', 'https://feathersjs.com/'),
      tag('KeystoneJS', 'keystonejs', 'http://keystonejs.com/'),
      tag('LoopBack', 'loopback', 'https://loopback.io/'),
      tag('MEAN Stack', 'meanio', 'http://mean.io/'),
      tag('Sails', 'sails', 'http://sailsjs.com/'),
    ], new TopicUrls(
    'https://en.wikipedia.org/wiki/Express.js',
    'https://github.com/expressjs/express',
    'https://www.npmjs.com/package/express',
    'https://stackoverflow.com/questions/tagged/express',
    'https://stackshare.io/expressjs',
    'https://twitter.com/expressjs',
    // TOOD: 'https://alternativeto.net/software/expressjs/',
    )
  ),
  'Sinatra',
  tagNoIcon('ngrx' /* I've also seen different capitalizations: NgRx, ngRx etc */),
  'Flask', tagNoIcon('Pylons'), tagNoIcon('Zope'),
  tagNoIcon('UX'), tagNoIcon('UI'), tagNoIcon('Usability'), tagNoIcon('Accessibility'),
  'GraphQL', 'Grunt', tag('Browserify', 'browserify-icon'),
  'Hibernate', tagNoIcon('NHibernate'), 'MariaDB', 'Material-UI',
  tagNoIcon('FinTech'), tagNoIcon('PropTech'),

  tagNoIcon('Law'), tagNoIcon('LOPD'),
  tagNoIcon('SEO'), tagNoIcon('JBoss'),
  tagNoIcon('Functional Programming'), tag('EC2', 'aws-ec2'), tagNoIcon('GCP'),
  'CocoaPods',
  tagLogoTipo('ArangoDB'),
  'Auth0',
  'Mapbox',
  tag('GitHub', 'github-icon'),
  tagNoIcon('Stencil'), /* Ionic */
  'OData', tagNoIcon('PowerBI'), tagNoIcon('SignalR'), // Mark S.
  tagNoIcon('Voice Interfaces'),
  tagNoIcon('Amazon Alexa'),
  tagNoIcon('Amazon Echo'),
  tagNoIcon('Google Home'),
  // TODO: Google Assistant
  tagNoIcon('Cortana'),
  tagNoIcon('Google Docs'),
  tagNoIcon('Google AdWords'),
  tagNoIcon('Google AdSense'),
  tagNoIcon('Google Analytics'),
  tagNoIcon('Frontend'),
  tagNoIcon('Telerik UI'),
  tagNoIcon('Kendo UI'),
  'NativeScript',
  tagNoIcon('SOAP'),
  tagNoIcon('Microsoft SQL Server'),
  tagNoIcon('Microsoft Excel'),
  tagNoIcon('Microsoft Word'),
  tagNoIcon('Microservices'),
  tagNoIcon('Testing'),
  tagNoIcon('Quality Assurance'),
  tagNoIcon('Quality Engineering'),
  'Markdown',

  tag('English Language', 'flags/english'),
  tag('Spanish Language', 'flags/spanish'),
  tag('French Language', 'flags/french'),
  tag('Portuguese Language', 'flags/portuguese'),
  tag('German Language', 'flags/german'),
  tag('Italian Language', 'flags/italian'),
  tag('Polish Language', 'flags/polish'),
  tag('Russian Language', 'flags/russian'),
  tag('Chinese Language', 'flags/chinese'),
  tag('Japanese Language', 'flags/japanese'),
  tag('Arabic Language', 'flags/arabic'),
  tag('Hindi Language', 'flags/hindi'),
  tag('Turkish Language', 'flags/turkish'),
  tag('Bengali Language', 'flags/bengali'),
  tag('Korean Language', 'flags/korean'),
  tag('Vietnamese Language', 'flags/vietnamese'),
  tag('Malay Language', 'flags/malay'),
  tag('Ukrainian Language', 'flags/ukrainian'),
  tag('Dutch Language', 'flags/dutch'),
  tag('Thai Language', 'flags/thai'),
  tag('Urdu Language', 'flags/hindi'),
  tag('Cantonese Language', 'flags/chinese'),
  tag('Telugu Language', 'flags/hindi'),
  tag('Wu Language', 'flags/chinese'),
  tag('Tamil Language', 'flags/hindi'),
  tag('Persian Language', 'flags/persian'),
  tag('Marathi Language', 'flags/hindi'),
  tag('Malayalam Language', 'flags/hindi'),
  tag('Minnan Language', 'flags/chinese'),
  tag('Gujarati Language', 'flags/hindi'),
  tag('Punjabi Language', 'flags/hindi'),
  tag('Swedish Language', 'flags/swedish'),
  tag('Javanese Language', 'flags/indonesian'),
  tag('Indonesian Language', 'flags/indonesian'),
  tag('Danish Language', 'flags/danish'),
  tag('Finnish Language', 'flags/finnish'),
  tag('Armenian Language', 'flags/armenian'),
  tag('Catalan Language', 'flags/catalan'),
  tag('Romanian Language', 'flags/romanian'),
  tag('Lithuanian Language', 'flags/lithuanian'),
  tag('Latvian Language', 'flags/latvian'),
  tag('Byelorussian Language', 'flags/byelorussian'),
  tag('Estonian Language', 'flags/estonian'),
  tag('Greek Language', 'flags/greek'),
  tag('Serbian Language', 'flags/serbian'),
  tag('Macedonian Language', 'flags/macedonian'),
  tag('Albanian Language', 'flags/albanian'),
  tag('Croatian Language', 'flags/croatian'),
  tag('Bosnian Language', 'flags/bosnian'),
  tag('Moldavian Language', 'flags/moldavian'),
  tag('Bulgarian Language', 'flags/bulgarian'),
  tag('Hungarian Language', 'flags/hungarian'),
  tag('Luxembourgish Language', 'flags/luxembourgish'),
  tag('Irish Language', 'flags/irish'),
  tag('Icelandic Language', 'flags/icelandic'),
  tag('Norwegian Language', 'flags/norwegian'),
  tag('Slovenian Language', 'flags/slovenian'),
  tag('Czech Language', 'flags/czech'),
  tag('Slovak Language', 'flags/slovak'),
  tag('Georgian Language', 'flags/georgian'),
  tag('Azeri Language', 'flags/azeri'),
  tag('Kazakh Language', 'flags/kazakh'),
  tag('Kashubian Language', 'flags/polish'),
  tag('Afrikaans Language', 'flags/afrikaans'),
  tag('Hebrew Language', 'flags/hebrew'),
  tag('Maltese Language', 'flags/maltese'),
  tag('Latin Language', 'flags/latin'),
  tag('Montenegrin Language', 'flags/montenegrin'),
  tag('Pashto Language', 'flags/pashto'),
  tag('Filipino Language', 'flags/filipino'),
  tag('Burmese Language', 'flags/burmese'),
  tag('Lao Language', 'flags/lao'),
  tag('Nepali Language', 'flags/nepali'),
  tag('Dzongkha Language', 'flags/dzongkha'),
  tag('Turkmen Language', 'flags/turkmen'),
  tag('Somali Language', 'flags/somali'),
  tag('Amharic Language', 'flags/amharic'),
  tag('Fijian Language', 'flags/fijian'),
  tag('Mongolian Language', 'flags/mongolian'),
  tag('Tajik Language', 'flags/tajik'),
  tag('Uzbek Language', 'flags/uzbek'),
  tag('Kyrgyz Language', 'flags/kyrgyz'),
  tag('Jamaican Language', 'flags/jamaican'),
  tag('Haitian Language', 'flags/haitian'),
  tag('Sinhala Language', 'flags/sinhala'),
  tag('Dhivehi Language', 'flags/dhivehi'),
  tag('Faroese Language', 'flags/faroese'),
  tag('Kiribati Language', 'flags/kiribati'),

  tagNoIcon('Bioinformatics'), tag('Layouts', 'generic/palette-solid'),
  tag('Graphic Design', 'generic/palette-solid'), tag('Logo Design', 'generic/palette-solid'),
  tagNoIcon('Social Media'),
  tagNoIcon('Social Media Marketing'),
  tagNoIcon('Web Design'),
  tagNoIcon('Web Analytics'),

  tag('Business').setLogo('generic/business--chart-line').setRelated(
    tagNoIcon('Venture Capital').setLogo('generic/business--chart-line'),
    tagNoIcon('Seed Funding').setLogo('generic/business--chart-line'),
    tagNoIcon('Angel Investment').setLogo('generic/business--chart-line'),
    tagNoIcon('Bootstrapping').setLogo('generic/business--chart-line'),
    tagNoIcon('Internet Business').setLogo('generic/business--chart-line'),
    tagNoIcon('Finance').setLogo('generic/business--chart-line'),
    tagNoIcon('Financing').setLogo('generic/business--chart-line'),
    tagNoIcon('Marketing').setLogo('generic/business--chart-line'),
    tagNoIcon('Search Engine Marketing').setLogo('generic/business--chart-line') /* TODO: add acronym: SEM */,
    tagNoIcon('Inbound Marketing').setLogo('generic/business--chart-line'),
    tagNoIcon('Advertising').setLogo('generic/business--chart-line'),
    entrepreneurship,
    businessNetworking,
    tagNoIcon('Business Development').setLogo('generic/business--chart-line'),
    tagNoIcon('Small Business').setLogo('generic/business--chart-line'),
    tagNoIcon('Business Administration').setLogo('generic/business--chart-line'),
    tagNoIcon('Startups').setLogo('generic/business--chart-line'),
    tagNoIcon('Startup Financing').setLogo('generic/business--chart-line'),
    tagNoIcon('Y Combinator').setLogo('ycombinator').setLogo('generic/business--chart-line'),
    tagNoIcon('Freelance').setLogo('generic/business--chart-line'),
    tagNoIcon('Freelance Platforms').setLogo('generic/business--chart-line'),
    tagNoIcon('Freelancer.com').setLogo('generic/business--chart-line'),
    tagNoIcon('Toptal').setLogo('generic/business--chart-line'),
    tagNoIcon('Trabajador Autónomo (Spain)').setLogo('generic/business--chart-line'),
    tagNoIcon('Recruitment').setLogo('generic/business--chart-line'),
    tagNoIcon('Human Resources').setLogo('generic/business--chart-line'),
    tagNoIcon('Management').setLogo('generic/business--chart-line'),
    tagNoIcon('Project Management').setLogo('generic/business--chart-line'),
    tagNoIcon('Sales').setLogo('generic/business--chart-line'),
    tagNoIcon('Logistics').setLogo('generic/business--chart-line'),
    tagNoIcon('Supply Chain').setLogo('generic/business--chart-line'),
  ),

  tagNoIcon('Mobile apps'),
  tagNoIcon('Neuroscience').setLogo('generic/brain-solid'),
  tagNoIcon('Ecopreneurship'),
  tagNoIcon('Neural Networks'),
  tagNoIcon('Convolutional Neural Networks'),
  tagNoIcon('Machine Learning'),
  tagNoIcon('Artificial Intelligence'),
  tagNoIcon('Deep Learning'),
  tagNoIcon('DeepMind'),
  tagNoIcon('Big Data'),
  tagNoIcon('MapReduce'),
  tagNoIcon('Apache Mahout'),
  tagNoIcon('Google Bigtable'),
  tag('Apache HBase', 'hbase'),
  tag('Apache Mesos', 'mesos'),
  tag('Apache Drill', null),
  tag('Apache ZooKeeper', null),
  tagNoIcon('Data Science'),
  tagNoIcon('Data Analytics'),
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
  tag('Geomarketing', 'generic/business--chart-line'),
  tagNoIcon('LAMP Stack'),
  tag('Cyber Security', 'generic/lock-solid'),
  tagNoIcon('Chart.js'),
  tagNoIcon('Robotics'),
  tagNoIcon('Lego Mindstorms'),
  tagNoIcon('CSS Flexbox'),
  tagNoIcon('CSS Grid Layout'),
  tag('Economy', 'generic/business--chart-line'),
  tag('Economics', 'generic/business--chart-line'),
  tagNoIcon('Underscore_Test'),
  tag('R Language', 'r-lang'),
  'nginx',
  'WebAssembly' /* TODO: short name: Wasm */,
  'Struts',
  'Yammer',
  tagNoIcon('Office 365'),
  tagNoIcon('OneDrive'),
  tagNoIcon('Algorithms'),
  tagNoIcon('Data Structures'),
  // TODO: Codility, Leetcode
  tagNoIcon('Computer Networks'),
  tagNoIcon('Green Economy'),
  tagNoIcon('CleanTech'),
  tagNoIcon('Windows Phone'),
  tagNoIcon('Windows Forms'),
  tagNoIcon('Wearable Computing'),
  tagNoIcon('iWatch'),
  'Semantic UI',
  'Foundation',
  tagNoIcon('Email Deliverability'),
  tagNoIcon('LXD'),
  tagNoIcon('Adobe Photoshop'),
  tagNoIcon('Adobe Illustrator'),
  tagNoIcon('Adobe After Effects'),
  tagNoIcon('Calabash'),
  tagNoIcon('Calabash iOS'),
  tagNoIcon('Calabash Android'),
  'Jira',
  'GitLab',
  tagNoIcon('Mapbox Studio'),
  tagNoIcon('SystemJS'),
  'json',
  'OAuth',
  'jspm',
  tagNoIcon('ag-Grid'),
  'SendGrid',
  'MailChimp',
  tag('Sauce Labs', 'saucelabs'),
  tag('Waffle'),
  tag('Protocol Buffers', null, 'https://developers.google.com/protocol-buffers/'),
  tag('Sketch'),
  tag('FIWARE', null, 'https://www.fiware.org/'),
  tag('Smart City', null),
  tag('Sustainable Development', null),
  tag('Apache Thrift', null, 'https://thrift.apache.org/'),
  tag('OpenID', null, 'http://openid.net/'),
  tag('OpenID Connect', null, 'http://openid.net/connect/'),
  tag('Hibernate Envers', null, 'http://hibernate.org/orm/envers/'),
  tag('Liquibase', null, 'http://www.liquibase.org/'),
  tag('Flyway', null, 'https://flywaydb.org/'),
  tag('Spring Boot', null, 'https://projects.spring.io/spring-boot/'),
  tag('Dropwizard', null, 'http://www.dropwizard.io/'),
  tag('Algolia', undefined, 'https://www.algolia.com/'),
  tag('Digital Marketing', null).setLogo('generic/business--chart-line'),
  tag('Django Rest Framework', null, 'http://www.django-rest-framework.org/'),
  tag('Python pandas', null, 'http://pandas.pydata.org/'),
  tag('NumPy', null, 'http://www.numpy.org/'),
  tag('Payment Processing', null),
  tag('Digital Payments', null),
  tag('Mobile Payments', null),
  tag('Materialize', 'materializecss', 'http://materializecss.com/'),
  tag('Browsersync', 'browsersync', 'https://www.browsersync.io/'),
  tag('BrowserStack', 'browserstack', 'https://www.browserstack.com/'),
  tag('Promises', 'promises',),
  tag('NATS', null, 'https://nats.io/'),
  // tag('', null, ''),

  //, Green Tech, IoT, IoE
  // web3, Truffle Framework, Distributed Ledger Technology, Attention Economy, Ethlance, Steem,
  // remix, mist, DApp, DAO, TheDao
  // Smart contracts, Solidity, Private coin,
  // Ionic Creator, Bootstrap Studio
  // Hybris
  // Internationalization (i18n), localization (l11n), translations
  // English / Spanish language practice / interchange
  // CSS View Encapsulation, Shadow DOM
  // Celery
  // RhoMobile
  /* Mark:                       Just created a profile on there. It's looking very good 👍
   A couple of things for you to add to the list:
   // DONE: ProtoBuf, OpenID Connect */
  tag('Security', 'generic/lock-solid'),
  tag('Computer Security', 'generic/lock-solid'),
  tag('Computer Network Security', 'generic/lock-solid'),
  // TODO: Hacking (Karl Hiramoto)
  tag('Moleculer', undefined, 'https://moleculer.services/', [], new TopicUrls(
    null,
    'https://github.com/ice-services/moleculer',
    'https://www.npmjs.com/package/moleculer',
    null,
    null,
    'https://twitter.com/MoleculerJS',
    null,
    'https://github.com/ice-services/moleculer/blob/master/CHANGELOG.md',
    'https://runkit.com/icebob/moleculer-quick-start',
  )),
  tagNoIcon('Træfik'),
  tagNoIcon('Alpine Linux'),
  tagNoIcon('TCP/IP'), // NOTE: slash - special char for storing in firebase
  tagNoIcon('SQL'),
  tagNoIcon('Remote Work'),
  tagNoIcon('Consulting'),
  tagNoIcon('Chirimoya'),
  // TODO: Accelerated Mobile Pages
  // TODO: Business Intelligence
  /* DONE: hibernate
   DONE: Hibernate envers - Adam Warski
   DONE: Liquibase / Flyway - wersjonowanie SQL
   DONE: Spring Boot / Dropwizard / JHipster */

  tagLogoTipo('Arduino'),
  'Raspberry Pi',
  tag('Voice over IP', 'generic/network-wired-solid'),


  // Alex Moron:
  // Deployment
  // Web Hosting
  // Debugging
  // Adobe Premiere

  // DONE: algolia
  // angellist
  // self-driving cars/vehicles
  // Electric vehicles
  // Tesla
  // TODO: Hyperloop
  // TODO: check Malaga meetup topics

  // TODO: Handlebars.js, Mustashe / Mustache?
  // LoDash, Underscore.js, Ramda


  // PWA: AppShell, Workbox, Service Workers, HTTP Push
  // IndexedDB, LocalStorage
  // ngx-bootstrap

  // TODO: NestJS: A progressive Node.js framework for building efficient and scalable server-side applications on top of TypeScript & JavaScript (ES6 / ES7 / ES8) heavily inspired by Angular 😻🚀

  // CI: Continous Integration, CD: Continuous Delivery
  // RethinkDB
  tagNoIcon('Web Animations API'),
  'Jest',

  tagNoIcon('Electronic Voting'), tagNoIcon('Activism'), tagNoIcon('Volunteering'),

  tagNoIcon('Figma'),
  tagNoIcon('Affinity Designer'),
  tag('Psychology', 'generic/brain-solid'),
  tag('Self-Improvement', 'generic/brain-solid'),
  tagNoIcon('StackBlitz'),
  tagNoIcon('Java Server Faces (JSF)'),
  tag('Dexie.js', 'dexie-js'),
  'Aurelia',
  'Marionette',
  tagNoIcon('Cypress' /* From David Atencia GitHub repo :) */) ,
  'Dart', tagLogoTipo('Flutter'), /* TODO: Flutter Web: https://github.com/flutter/flutter_web */
  'Angular Dart',
  tag('Codelyzer'),
  'Knockout',
  // TODO: SaaS (from Ali P.), PaaS, *aaS with Acronyms.
  // TODO: Go Language (Leo, Karl Hiramoto)
  // TODO: SparQL
  'Preact',
  // TODO: next, nuxt (Vue.js framework) https://nuxtjs.org , rollup.js
  // TODO: https://svelte.dev/
  // TODO: gatsby - static renderer that uses React;
  // Contentful, Netflicy -- from Lemoncode(rs)
  // TODO: Server Side Rendering (SSR)
  // TODO: Streaming SSR - https://www.youtube.com/watch?v=k-A2VfuUROg
  // TODO: Spectrum - https://github.com/withspectrum/spectrum/issues/3303
  // TODO: ARCore, Sceneform
  // TODO: Tensorflow.js
  // Chrome OS
  // TODO: asm.js, Emscripten
  // TODO: https://github.com/AssemblyScript/assemblyscript
  // TODO: Android Jetpack
  // TODO: webGL, three.js (Adam 3d printing etc) and smth for scene graph
  // TODO: Vega lite
  // TODO: R, R Studio
  // TODO: Fuchsia OS
  // TODO: Microsoft Blazor -- enables developers to create web apps using C# and HTML -- Run on WebAssembly or the server
  // SuperTest, SuperAgent (NodeJS HTTP API, testing)
  // TODO: GraalVM (by Oracle; runs Java, NodeJS?)
  // TODO: TypeORM
  // TODO: !!! Flow - https://flow.org/en/
  // TODO: OCaml - Flow is written in it (has icon SVG); ML, Caml
  // TODO: lisp, common lisp, CLOS
  // Scheme
  // TODO Haxe (has icon)
  // TODO Julia Language (machine learning etc) https://julialang.org/

  // ========= Fun / sports:
  // TODO: hiking, bicycle, motorcycles (Moi?, Jakob), travel, volleyball, beach volleyball, beer, party (parties), natural language learning, language exchanges, dating

  tag('Interpersonal Networking' /* to disambiguate from computer networking */, 'generic/users-solid') /* search terms: growing network */,
  tag('Hiking','generic/fun/hiking-solid') /* search terms: trail, walking trips, mountain trekking */,
  tag('Trekking','generic/fun/hiking-solid') /* search terms: trail, walking trips, mountain trekking */,
  tag('Car trips','generic/fun/hiking-solid' /* FIXME: Vianey: put car  ico*/) /* search terms: trail, walking trips, mountain trekking */,
  tag('Bicycle','generic/fun/bicycle-solid') /* search terms: bike */,
  tag('Road Bicycle','generic/fun/bicycle-solid') /* search terms: bike */,
  tag('Mountain Bicycle','generic/fun/bicycle-solid') /* search terms: bike */,
  tag('Motorcycles','generic/fun/motorcycle-solid' /* search terms: bike, motorbike, bikers */),
  tag('Volleyball','generic/fun/volleyball-ball-solid' /* search terms: voley, volei (Spanish) */),
  tag('Beach Volleyball','generic/fun/volleyball-ball-solid' /* search terms: voley, volei (Spanish) */),
  tag('Beach', 'generic/fun/umbrella-beach-solid' /* Playa */),
  tag('Beach Sports', 'generic/fun/umbrella-beach-solid' /* Playa */),
  tagNoIcon('Sports'),
  tag('Travels','generic/fun/globe-americas-solid.svg'),
  tag('Beer','generic/fun/beer-solid.svg'),
  tag('Drinking Alcohol','generic/fun/beer-solid'),
  tag('Drinking Tea','generic/fun/mug-hot-solid.svg'),
  tag('Drinking Coffee','generic/fun/coffee-solid.svg'),
  tag('Eat lunch together','generic/fun/utensils-solid'),
  tag('Eat breakfast together','generic/fun/bread-slice-solid'),
  tag('Eat dinner together','generic/fun/utensils-solid.svg'),
  tag('Parties','generic/fun/glass-cheers-solid.svg'),
  tag('Language Exchanges','generic/fun/comments-solid.svg'),
  tag('Swimming','generic/fun/swimmer-solid'),
  tag('Tennis','generic/fun/tennis-ball-svgrepo-com.svg'),
  tag('Padel','generic/fun/tennis-ball-svgrepo-com.svg'),/* search terms: paddle paddel */
  tag('Paddle Tennis','generic/fun/tennis-ball-svgrepo-com.svg'),/* search terms: paddle paddel */
  tag('Table Tennis','generic/fun/table-tennis-solid.svg'),/* search terms: ping pong */
  tag('Football', 'generic/fun/futbol-solid.svg'),/* search terms: soccer */
  tag('Basketball','generic/fun/basketball-ball-solid.svg'),
  'Badminton',
  tag('Gym', 'generic/fun/dumbbell-solid.svg'),
  tag('Socialising','generic/fun/user-friends-solid.svg'),/* search term: hanging out */
  tag('Playing Drums','generic/fun/drum-solid'), /* TODO: search terms: drumming */
  tag('Paintball','generic/fun/rifle-gun-svgrepo-com.svg'),
  tag( 'Outdoors','generic/fun/cloud-sun-solid.svg'),
  tag('Nature','generic/fun/tree-solid.svg'),
  tag('Museums','generic/fun/palette-solid.svg'),
  tag('Archery','generic/fun/bullseye-solid.svg'),
  tag('Airsoft Gun','generic/fun/gun-svgrepo-com.svg'),
  tag('Playing Guitar','generic/fun/guitar-solid.svg'),
  tag('Playing Electric guitar','generic/fun/electric-guitar-svgrepo-com.svg'),
  tag('Movies','generic/fun/snacks-popcorn-svgrepo-com.svg'),
  tag('Board Games','generic/fun/two-puzzle-pieces-svgrepo-com.svg' /* FIXME */),
  tag('Chess','generic/fun/chess-solid.svg'),
  tag('Yoga','generic/fun/man-on-yoga-posture-of-relaxation-svgrepo-com.svg'),
  tag('Skiing','generic/fun/skiing-solid.svg'),
  tag('Music','generic/fun/music-solid.svg'),
  tag('Live Music','generic/fun/dancer-with-music-svgrepo-com.svg'),
  tag('Youtuber','generic/fun/youtube-brands.svg'),
  tag('Ice Skating','generic/fun/skating-solid.svg'),
  tag('Roller Skating','generic/fun/roller-skate-skate-svgrepo-com.svg'),
  tag('Running','generic/fun/running-solid.svg'),
  tag('Marathon Running','generic/fun/marathon-svgrepo-com.svg'),
  tag('Boxing','generic/fun/boxing-svgrepo-com.svg'),
  tag('Karate','generic/fun/karate-svgrepo-com.svg'),
  tag('Kayaking','generic/fun/kayak-svgrepo-com.svg'),
  tag('Rafting','generic/fun/rafting-fun-recreation-play-svgrepo-com.svg'),
  tag('Boating','generic/fun/yachting-svgrepo-com.svg'),
  tag('Motocross','generic/fun/motocross-svgrepo-com.svg'),
  tag('Theater','generic/fun/theater-svgrepo-com.svg' /* search keyword: theatre (other spelling) */),
  tag('Skateboarding ','generic/fun/skateboard-svgrepo-com.svg'),
  tag('Wine Tasting','generic/fun/wine-bottle-svgrepo-com.svg'),
  tag('Triathlon','generic/fun/triathlon-svgrepo-com.svg'),
  tag('Monocycle','generic/fun/unicycle-svgrepo-com.svg'), // unicycle
  tagNoIcon('Surfing'),
  tagNoIcon('Stand up paddleboarding'), /* FIXME uppercase */
  tagNoIcon('Windsurfing'),
  tagNoIcon('Kitesurfing'),
  tagNoIcon('Paragliding '),
  tagNoIcon('Cooking '),
  tagNoIcon('Business Lunch '),
  tagNoIcon('Mountain Climbing'),
  tagNoIcon('Camping'),
  tagNoIcon('Digital Nomading'),
  tagNoIcon('Video Games'),
  tagNoIcon('Plants Parents'), // FIXME: is such a name?
  tagNoIcon('Gardening '),
  tagNoIcon('Social Dance '),
  tagNoIcon('CouchSurfing '),
  tagNoIcon('Nomading'),
  tagNoIcon('Chilling'),
  tagNoIcon('Beach Day'),
  tagNoIcon('Tinkering/Mechanics'),
  tagNoIcon('Nordic Walking'),
  tagNoIcon('Jogging'),
  tagNoIcon('Martial Arts'),
  tagNoIcon('Craft Beer'),
  tagNoIcon('Microbrewery'),
  tagNoIcon('Live Sport'),
  tagNoIcon('Going to Concerts'),
  tagNoIcon('Do It Yourself (DIY)'),
  tag('Metal Music', 'generic/fun/heavy-metal-sharpen-guitar-like-an-insect-svgrepo-com.svg'),
  tagNoIcon('Hip-Hop Music'),
  tag('Rock Music', 'generic/fun/heavy-metal-concert-svgrepo-com.svg'),
  tagNoIcon('Missionary Work'),
  tagNoIcon('Charities'),
  tagNoIcon('Charity Work'),
  tagNoIcon('Red Cross'),
  tagNoIcon('Social Worker'),
  tagNoIcon('Coaching'),
  tagNoIcon('Life Coaching'),
  tagNoIcon('Mentoring'),
  tagNoIcon('Community Service'),
]
 //skatebord
 //wine tasting
 //craft beer
 //microbrewery
 //triathlon

 //nordic walking
 // Skateboarding
 // Jogging
  // martial arts
  // Nordic walking
  // opera, live sports
  // going to concerts
