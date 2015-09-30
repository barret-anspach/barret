(function(){
  'use strict';


  angular
    .module('barret')
    .controller('ProjectCtrl', ProjectCtrl);

    function ProjectCtrl($scope, $timeout, $q, $state, data, project) {
      $scope.project = project;
      $scope.state = $state;
    }

})();
