(function(){
  'use strict';

  angular
    .module('barret')
    .controller('MusicCtrl', MusicCtrl);

  function MusicCtrl($scope, $timeout, $q, $state, $sce, data, works) {

    window.console.log('works:', works);
    $scope.works = works;
    $scope.turntableToggle = data.turntableToggle;
    $scope.trustSrc = function(src){
      return $sce.trustAsResourceUrl(src);
    };
  }
})();
