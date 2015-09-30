(function() {
  'use strict';

  angular
    .module('barret')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('cv', {
        url:'/cv',
        templateUrl: 'app/cv/cv.html',
        controller: 'CvCtrl',
        resolve: {
          cv: function(data) {
            return data.fetchQuery("Cv");
          }
        }
      })
      .state('book', {
        url:'/book',
        templateUrl: 'app/book/book.html',
        controller: 'BookCtrl',
        resolve: {
          book: function(data) {
            return data.fetchQuery("Book");
          }
        }
      })
      .state('music', {
        url:'/music',
        templateUrl: 'app/music/music.html',
        controller: 'MusicCtrl',
        resolve: {
          works: function(data) {
            return data.getWorks();
          }
        }
      })
      .state('project', {
        url:'/book/:id',
        templateUrl: 'app/book/book.project.html',
        controller: 'ProjectCtrl',
        resolve: {
          project: function(data, $stateParams) {
            return data.getCollectionById($stateParams.id, 'Book');
          }
        }
      })
    ;

    $urlRouterProvider.otherwise('/');
  }

})();
