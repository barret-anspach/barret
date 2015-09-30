(function(){
  'use strict';

  angular
    .module('barret')
    .controller('CvCtrl', CvCtrl);

    function CvCtrl($scope, data, cv){
      window.console.log('cv:', cv);
      $scope.cv = cv[0];
      $scope.turntableToggle = data.turntableToggle;
    }

})();
