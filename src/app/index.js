'use strict';

angular.module('barret', [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngResource',
    'ui.router',
    'ngMaterial'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;

Parse.initialize("1Pcgf1sCkpwshtEaCiRvIkYzKgqpahQEZfuYgmdw", "FCbgR0mh3GDKW1MpElCUG1LcfKDm9ttzVZ3FPVIR");


//var TestObject = Parse.Object.extend("TestObject");
//var testObject = new TestObject();
//testObject.save({foo: "bar"}).then(function(object) {
//  alert("yay! it worked");
//});
