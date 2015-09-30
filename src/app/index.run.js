(function(){
  'use strict';

  angular
    .module('barret')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $state) {
    Parse.initialize("1Pcgf1sCkpwshtEaCiRvIkYzKgqpahQEZfuYgmdw", "FCbgR0mh3GDKW1MpElCUG1LcfKDm9ttzVZ3FPVIR");

    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState) {
      !_.isEmpty(fromState.name) ? $state.previous = fromState : null;
    });
  }

})();
