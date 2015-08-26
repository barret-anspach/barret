'use strict';

angular.module('barret')
  .controller('MainCtrl', function ($scope, $timeout, $q) {

    ////////
    // This is a sound project.
    ////////

    //var synth;
    //synth = new Beep.Voice();
    //
    //$scope.playSynth = function(note, duration){
    //  synth.play(note);
    //  //synth.play( note ).play( '4G' ).play( '5C' );
    //  $timeout(function(){
    //    //synth.play( '3C' ).play( '4G' ).play( '5C' )
    //    synth.pause()
    //  }, duration);
    //};
    //
    //
    //$scope.sounds = function(){
    //  $scope.c = document.getElementsByClassName('cell');
    //  angular.forEach($scope.c, function(s){
    //    if(window.getComputedStyle) {
    //      var b = window.getComputedStyle(s, "");
    //      var c = b.backgroundColor.slice(5, b.backgroundColor.length - 1).split(", ");
    //      c[0] = c[0] ? c[0] : 0;
    //      c[1] = c[1] ? c[1] : 0;
    //      c[2] = c[2] ? c[2] : 0;
    //      s.hsl = {
    //        pitch: Math.round(((parseInt(c[0]) / 100) * 400) + 30),
    //        duration: parseInt(c[1]) * 100,
    //        timbre: (parseInt(c[2]) / 100)
    //      };
    //      window.console.log('s.hsl:', s.hsl.pitch);
    //
    //
    //      s.note = new Beep.Trigger(s.hsl.pitch, function(){
    //        this.voices.push(
    //          new Beep.Voice(this.note, this.audioContext)
    //            .setOscillatorType('sine')
    //            .setAttackGain(s.hsl.timbre / 4),
    //
    //          new Beep.Voice( this.note.hertz * 3 / 2, this.audioContext )
    //            .setOscillatorType( 'triangle' )
    //            .setAttackGain(s.hsl.timbre / 50 ),
    //
    //          new Beep.Voice( this.note.hertz * 4, this.audioContext )
    //            .setOscillatorType( 'sawtooth' )
    //            .setAttackGain(s.hsl.timbre / 20 ),
    //
    //          new Beep.Voice( this.note.hertz / 5, this.audioContext )
    //            .setOscillatorType( 'square' )
    //            .setAttackGain(s.hsl.timbre / 10 )
    //        )
    //      });
    //
    //
    //      synth.play(s.note);
    //      $timeout(function(){
    //        synth.pause()
    //      }, s.hsl.duration);
    //    }
    //  });
    //
    //  //this.scoreUnload();
    //  //this.scoreLoad( score );
    //};
    //$scope.sounds();

    //$scope.works = [
    //  {
    //    title: "VVLD",
    //    instrumentation: "orchestra",
    //    duration: 30,
    //    description: "<p>Commissioned by Pacific Northwest Ballet and choreographer Price Suddarth for PNB's 2015–2016 Season.</p>",
    //    tags: [
    //      {name: "Orchestra"},
    //      {name: "Ballet"}
    //    ],
    //    imgUrl: "../assets/images/music/IMG_3597.jpg"
    //  },
    //  {
    //    title: "Millefleurs",
    //    instrumentation: "orchestra",
    //    date: "2012",
    //    duration: 16,
    //    description: "<p>Commissioned by Pacific Northwest Ballet and choreographer Andrew Bartee for PNB's 2013–2014 Season.</p>",
    //    tags: [
    //      {name: "Orchestra"},
    //      {name: "Ballet"}
    //    ],
    //    imgUrl: "../assets/images/music/IMG_2182.jpg"
    //  },
    //  {
    //    title: "The flat land",
    //    instrumentation: "soprano, flute, harp and string trio",
    //    date: "2011",
    //    duration: 6,
    //    description: "<p>Commissioned by soprano Catherine Hancock, and set to \"Prairie Spring\" by Willa Cather.</p><p>Versions for tenor; and soprano, flute and piano four-hands.</p>",
    //    tags: [
    //      {name: "Chamber music"},
    //      {name: "Voice"}
    //    ],
    //    imgUrl: "../assets/images/music/IMG_3572.jpg",
    //  },
    //  {
    //    title: "Etudes",
    //    instrumentation: "piano solo",
    //    date: "207",
    //    duration: 7,
    //    description: "<p>Commissioned and premiered by Andrew Eitel, piano.</p>",
    //    tags: [
    //      {name: "Piano"}
    //    ],
    //    imgUrl: "../assets/images/music/IMG_2610_1024.jpg"
    //  },
    //  {
    //    title: "Concerto",
    //    instrumentation: "piano and chamber orchestra",
    //    date: "2008",
    //    duration: 15,
    //    description: "<p>Commissioned by the <a target=\"_blank\" href=\"http://www.juilliard.edu/newsroom/kit/articles/New-Juilliard-Ensemble.php\">New Juilliard Ensemble</a> through its annual in-​house composition competition, and premiered by NJE in Peter Jay Sharp Theater, The Juilliard School (New York City). <a target=\"_blank\" href=\"http://www.juilliard.edu/faculty/joel-sachs\">Joel Sachs</a>, conductor; <a href=\"http://en.wikipedia.org/wiki/Euntaek_Kim\" target=\"_blank\">Euntaek Kim</a>, piano.</p>",
    //    tags: [
    //      {name: "Orchestra"},
    //      {name: "Concerto"},
    //      {name: "Piano"}
    //    ],
    //    imgUrl: "../assets/images/Tuning-PJS.JPG",
    //    imgCaption: "Photo by Michael Hart."
    //  },
    //  {
    //    title: "Sallie Gardner at a gallop",
    //    instrumentation: "piano",
    //    date: "2010",
    //    duration: 2,
    //    description: "<p>Written for Victor Ngo, piano.</p>",
    //    tags: [
    //      {name: "Piano"}
    //    ],
    //    //imgUrl: "../assets/images/music/IMG_3150.jpg"
    //  },
    //  {
    //    title: "Procession",
    //    instrumentation: "soloist and orchestra",
    //    date: "2007",
    //    duration: 9,
    //    description: "<p>Poem, \"First Intermission,\" by <a href=\"http://brentcunningham.blogspot.com/\">Brent Cunningham</a>, from a book of poems entitled, <a href=\"http://www.uglyducklingpresse.org/catalog/browse/item/?pubID=57\">\"Bird & Forest.\"</a></p>",
    //    tags: [
    //      {name: "Voice"},
    //      {name: "Orchestra"}
    //    ],
    //    imgUrl: "../assets/images/music/IMG_3192.jpg"
    //  },
    //  {
    //    title: "Epigraphs",
    //    instrumentation: "violin and piano",
    //    date: "2010",
    //    duration: 6,
    //    description: "<p>Commissioned and premiered by Sarah Koenig-Plonskier, violin.</p>",
    //    tags: [
    //      {name: "Violin"},
    //      {name: "Piano"}
    //    ],
    //    imgUrl: "../assets/images/music/IMG_2519.jpg",
    //    //bgColor: "indianred"
    //  },
    //  {
    //    title: "Prelude",
    //    instrumentation: "contrabass solo",
    //    date: "208",
    //    duration: 3,
    //    description: "<p>Commissioned and premiered by Andrew Trombley, contrabass. First performed in Morse Hall, The Juilliard School.</p>",
    //    tags: [
    //      {name: "Contrabass"}
    //    ],
    //    //imgUrl: "../assets/images/music/IMG_3454.jpg"
    //  },
    //  {
    //    title: "Four poems by William Carlos Williams",
    //    instrumentation: "soprano and piano",
    //    date: "2005",
    //    duration: 7,
    //    description: "<p>Premiered in Paul Hall, the Juilliard School. Kathleen Jasinskas, soprano, and Michael Brown, piano.</p>",
    //    tags: [
    //      {name: "Soprano"},
    //      {name: "Piano"}
    //    ],
    //    imgUrl: "../assets/images/music/IMG_3571.jpg"
    //  },
    //  {
    //    title: "Act",
    //    instrumentation: "flute and piano",
    //    date: "2005",
    //    duration: 6,
    //    description: "<p>Premiered by Justin Bahrami, flute, and Andrew Eitel, piano. The Liederkranz Center, New York.</p>",
    //    tags: [
    //      {name: "Flute"},
    //      {name: "Piano"}
    //    ],
    //    //imgUrl: "../assets/images/music/IMG_3580.jpg",
    //  },
    //  {
    //    title: "Creator of the stars at night / Conditor alme siderum",
    //    instrumentation: "mixed chorus, piano, organ and string quartet",
    //    date: "2010",
    //    duration: 8,
    //    description: "<p>Setting of the Latin hymn text, \"Conditor alme siderum\" (7 cent.), part of the Advent season's liturgy for Vespers services. Commissioned and premiered by the Westminster Chapel Choir (Bellevue, WA).</p>",
    //    tags: [
    //      {name: "Choir"},
    //      {name: "Piano"},
    //      {name: "String quartet"}
    //    ],
    //    imgUrl: "../assets/images/music/IMG_3007.jpg"
    //  },
    //  {
    //    title: "String Quintet",
    //    instrumentation: "",
    //    date: "",
    //    duration: 8,
    //    description: "<p></p>",
    //    tags: [
    //      {name: "Chamber music"}
    //    ],
    //    imgUrl: "../assets/images/music/IMG_3573.jpg"
    //  }
    //];
    $scope.works = [];

    var Works = Parse.Object.extend("Work");

    $scope.fetchQuery = function(Collection){
      var query = new Parse.Query(Collection);
      var deferred = $q.defer();
      query.find().then(function(results){
        window.console.log('results', results);
        var list = _.map(results, function(res){ return res.toJSON(); });
        deferred.resolve(list);

      });

      return deferred.promise;
    };

    //GET LIST OF WORKS, assign to scoped variable
    $scope.fetchQuery(Works).then(function(res){
      $scope.works = res;
      window.console.log('$scope.works:', $scope.works);
    });

  });
