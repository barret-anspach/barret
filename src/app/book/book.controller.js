(function(){
  'use strict';

  angular
    .module('barret')
    .controller('BookCtrl', BookCtrl);

    function BookCtrl($scope, $timeout, $q, $state, data, book) {

      $scope.state = $state;
      $scope.book = book;

      angular.forEach($scope.book, function(project){
        if(_.find(project.gallery, function(i){ return i.isFeatured && !_.isEmpty(i.url) })) {
          project.featuredImg = _.find(project.gallery, function(i){ return i.isFeatured });
          window.console.log(project.name, 'project has a featured img', project.featuredImg);
        }
      });
    }

})();

