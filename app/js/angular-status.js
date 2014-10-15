'use strict';

google.load('visualization', '1', {packages: ['corechart']});

//TODO jboone hacked routing
var originUrl = "http://best-offer-tool-advisor-next.apps.tln-dev.cegeka.be/bestoffer/status/";


angular.module('statusApp', ['ui.bootstrap', 'statusModule', 'ngRoute']);
angular.module('statusModule', []);


// angular.module('statusApp', ['ui.bootstrap', 'statusModule', 'statisticsModule', 'logModule', 'featureBitModule', 'environmentVariablesModule', 'changelogModule', 'logFilesModule', 'ngRoute']);
// angular.module('statusModule', []);
// angular.module('statisticsModule', []);
// angular.module('logModule', []);
// angular.module('featureBitModule', []);
// angular.module('environmentVariablesModule', []);
// angular.module('changelogModule', []);
// angular.module('logFilesModule', []);

// angular.module('statusApp')
//     .config(function ($routeProvider) {
//         $routeProvider
//             .when('/status', {
//                 templateUrl: 'partials/statusView.html'
//               })
//             .otherwise({redirectTo: '/status'})
//     });