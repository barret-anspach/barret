(function(){
  'use strict';

  angular
    .module('barret')
    .controller('MainCtrl', MainCtrl);

    function MainCtrl($scope, $timeout, $q, data) {
      $scope.turntableToggle = data.turntableToggle;
    }
})();
