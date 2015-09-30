(function() {
  'use strict';

  angular
    .module('barret')
    .service('data', data);

  function data($q) {
    var data = this;

    this.turntableToggle = turntableToggle;
    this.fetchQuery = fetchQuery;
    this.getCollectionById = getCollectionById;
    this.getWorks = getWorks;

    function turntableToggle(){
      var t = document.getElementsByClassName('turntable');
      if($(t).hasClass('turntable-on')){
        $(t).removeClass('turntable-on');
        $(t).addClass('turntable-off');
      } else {
        $(t).removeClass('turntable-off');
        $(t).addClass('turntable-on');
      }
    }

    function fetchQuery(collectionName, params){
      var collection = Parse.Object.extend(collectionName);
      var query = new Parse.Query(collection);
      var deferred = $q.defer();
      if(params) {
        _.each(params, function(v, k){ query.equalTo(k, v) });
      }
      query.find().then(function(results){
        var list = _.map(results, function(res){ return res.toJSON(); });
        deferred.resolve(list);
      });
      return deferred.promise;
    }

    function getCollectionById(id, collection){
      return fetchQuery(collection, {slug: id}).then(function(res){
        var details = res[0];
        return details;
      });
    }

    function getWorks() {
      var ret = {};
      var calls = [];
      var deferred = $q.defer();

      calls.push(fetchQuery("Work"));
      calls.push(fetchQuery("Glyph"));

      $q.all(calls).then(function(res){
        ret.works = res[0];
        ret.glyphs = res[1];

        var glyphIdx = 0;
        angular.forEach(ret.works, function (work) {
          work.slug = work.title.toSlug();
          work.glyph = glyphIdx <= (ret.glyphs.length - 1) ? ret.glyphs[glyphIdx] : ret.glyphs[0];
          glyphIdx++;
        });
        deferred.resolve(ret.works);
      });
      return deferred.promise;
    }


    String.prototype.toSlug = function(){
      var st = this.toLowerCase();
      st = st.replace(/[\u00C0-\u00C5]/ig,'a');
      st = st.replace(/[\u00C8-\u00CB]/ig,'e');
      st = st.replace(/[\u00CC-\u00CF]/ig,'i');
      st = st.replace(/[\u00D2-\u00D6]/ig,'o');
      st = st.replace(/[\u00D9-\u00DC]/ig,'u');
      st = st.replace(/[\u00D1]/ig,'n');
      st = st.replace(/[^a-z0-9 ]+/gi,'');
      st = st.trim().replace(/ /g,'-');
      st = st.replace(/[\-]{2}/g,'');
      return (st.replace(/[^a-z\- ]*/gi,''));
    };

    Number.prototype.toDuration = function(){
      var hr = (this / 3600);
      var min = (this - (hr * 3600)) / 60;
      var sec = this - (hr * 3600) - (min * 60);
      return {
        'hr': hr,
        'min': min,
        'sec': sec
      }
    };

    Number.prototype.toHHMMSS = function () {
      var hours   = Math.floor(this / 3600);
      var minutes = Math.floor((this - (hours * 3600)) / 60);
      var seconds = Math.round(this - (hours * 3600) - (minutes * 60));

      if (hours   < 10) {hours   = "0"+hours;}
      if (minutes < 10) {minutes = "0"+minutes;}
      if (seconds < 10) {seconds = "0"+seconds;}
      var time    = hours == 0 ? minutes+':'+seconds : hours+':'+minutes+':'+seconds;

      return time;
    };
  }

})();
