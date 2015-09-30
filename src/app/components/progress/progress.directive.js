(function() {
  'use strict';

  angular
    .module('barret')
    .directive('audio-progress', audioProgress);

  /** @ngInject */
  function audioProgress() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/progress/progress.tpl.html',
      //template: '<div class="progress_bar" ng-style="{\'width\': pr.percentProgress}"></div>',
      scope: {
        movement: '='
      },
      controller: AudioProgressController,
      link: linkFunc,
      controllerAs: 'pr',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function AudioProgressController() {
      var pr = this;
      pr.percentProgress = "0%";
      //pr.movement = document.getElementById(movement.slug);
      window.console.log('pr.movement', pr.movement);
    }

    function linkFunc(scope, elem, attrs, pr){
      scope.$watch( function() {
        return pr.percentProgress
      }, function(newVal, oldVal) {
        console.log('progress!', pr.movement);
        if(newVal){
          window.console.log('progress newVal:', newVal);
          pr.percentProgress = ((newVal.currentTime - newVal.duration) * 100) + '%';
        }
      })

    }
  }

})();
