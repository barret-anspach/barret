(function() {
  'use strict';

  angular
    .module('barret')
    .directive('movements', movements);

  /** @ngInject */
  function movements() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/movements/movements.tpl.html',
      scope: {
        list: '=',
        work: '='
      },
      controller: MovementsController,
      link: linkFunc,
      controllerAs: 'mvmt',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function MovementsController($scope, $window, $timeout) {
      var mvmt = this;

      mvmt.currentMvmt = null;
      mvmt.playMvmt = playMvmt;
      mvmt.movementAudio = null;
      mvmt.workTitle = mvmt.work.title.toSlug();
      mvmt.percentProgress = "";

      angular.forEach(mvmt.list, function(movement){
        movement.slug = movement.name.toSlug();
        // TODO: SHOW MOVEMENT LENGTH
        //angular.element($window).bind('load', function() {
        //  var mvmt = document.getElementById(movement.slug);
        //  mvmt.onloadedmetadata = function () {
        //    movement.time = mvmt.duration.toHHMMSS();
        //  }
        //});
      });

      function playMvmt(movement){
        mvmt.movementAudio = document.getElementById(movement.slug);
        var progressBar = document.getElementById(mvmt.workTitle + '_progress_bar_progress');
        var progressTick = document.getElementById(mvmt.workTitle + '_progress_tick');

        var button = document.getElementById(movement.slug + '_button');
        var s = Snap(button.querySelector('svg'));
        var path = s.select('path');
        var buttonSpeed = 250;
        var buttonEasing = mina.easeinout;
        var pathConfig = {
          from: 'M0,24H0V0l24,12z',               // path.attr('d')
          to: 'M8,24H0V0h8V24z M24,0h-8v24h8V0z'  // button.getAttribute('data-path-hover')
        };

        if(_.isEmpty(mvmt.currentMvmt)) {
          movement.isPlaying = true;
          mvmt.currentMvmt = movement;
          path.animate({'path' : pathConfig.to}, buttonSpeed, buttonEasing);
          mvmt.movementAudio.play();
          // TODO: hide progressBar, progressTick
        }
        else if(movement === mvmt.currentMvmt && movement.isPlaying === true) {
          movement.isPlaying = false;
          mvmt.currentMvmt = null;
          path.animate({'path' : pathConfig.from}, buttonSpeed, buttonEasing);
          mvmt.movementAudio.pause();
        }
        else if(movement !== mvmt.currentMvmt && mvmt.currentMvmt.isPlaying === true) {
          document.getElementById(mvmt.currentMvmt.slug).pause();
          Snap(document.getElementById(mvmt.currentMvmt.slug + '_button')
            .querySelector('svg'))
            .select('path')
            .animate({'path' : pathConfig.from}, buttonSpeed, buttonEasing);
          mvmt.currentMvmt.isPlaying = false;
          movement.isPlaying = true;
          mvmt.currentMvmt = movement;
          path.animate({'path' : pathConfig.to}, buttonSpeed, buttonEasing);
          mvmt.movementAudio.play();
        }

        // TODO: QUEUE UP NEXT MOVEMENT (IF THERE'S ANOTHER MOVEMENT)
        //mvmt.movementAudio.onended = function(){
        //  var idx = _.indexOf(mvmt.list, movement);
        //  var nextMvmt = idx < mvmt.list.length ? document.getElementById(mvmt.list[idx + 1].slug) : null;
        //  if(nextMvmt != null){
        //    Snap(document.getElementById(mvmt.currentMvmt.slug + '_button')
        //      .querySelector('svg'))
        //      .select('path')
        //      .animate({'path' : pathConfig.from}, buttonSpeed, buttonEasing);//
        //    mvmt.currentMvmt.isPlaying = false;
        //    nextMvmt.isPlaying = true;
        //    movement = nextMvmt;
        //    mvmt.currentMvmt = nextMvmt;
        //    mvmt.currentMvmt.isPlaying = true;
        //    mvmt.movementAudio.play();
        //  } else {
        //    // turn off player: button 'pause' to 'play' state
        //  }
        //};

        mvmt.movementAudio.ontimeupdate = function(){
          $scope.$apply(function(){
            if(mvmt.currentMvmt){
              mvmt.currentMvmt.currentTime = mvmt.movementAudio.currentTime.toHHMMSS();
            }
            mvmt.percentProgress = ((mvmt.movementAudio.currentTime / mvmt.movementAudio.duration) * 100) + '%';
            progressBar.style.width = mvmt.percentProgress;
            progressTick.style.left = mvmt.percentProgress;
          });
        };
        mvmt.updateProgress();

        // TODO: really: progressTick needs to be draggable,
        // so watch mvmt.movement.onseeking and update progressTick's left position
        // when seeking finds the resulting spot...?
      }
    }

    function linkFunc(scope, elem, attrs, mvmt){
      mvmt.updateProgress = updateProgress;
      function updateProgress(){
        if(!_.isEmpty(mvmt.movement)) {
          mvmt.percentProgress = ((mvmt.movementAudio.currentTime / mvmt.movementAudio.duration) * 100) + '%';
        }
      }
      scope.$watch('mvmt.movementAudio', updateProgress);
    }
  }

})();
