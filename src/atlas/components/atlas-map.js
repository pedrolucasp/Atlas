(function() {
  var AtlasMap = {
    controller: AtlasMapController,
    template: [
      "<div class='atlas-map-container'>",
        "<div class='atlas-map'></div>",
      "</div>"
    ].join(" ")
  };

  function AtlasMapController($scope, $element, $attrs) {
    var ctrl    = this;
    var options = {};
    ctrl.state  = {
      map: {},
      zoom: null,
      center: {
        lat: null,
        lng: null
      }
    };

    ctrl.$onInit = function() {
      initialize();
    };

    ctrl.updateState = function(obj) {
      angular.merge(ctrl.state, obj);
    };

    function assemblyMap() {
      // Maybe we will need a "class" to hold and process
      // all the map data. Maybe delegate this to a factory of Maps?
      var el = angular.element($element[0]).find('.atlas-map')[0];

      var mapState = {
        map: new google.maps.Map(el, options),
        zoom: options.zoom,
        center: options.center
      };

      ctrl.updateState(mapState);
    }

    function initialize() {
      if (window.google.maps && window.google.maps.Map) {
        assemblyMap();
      } else {
        throw new Error('DependencyError: Expected Google Maps Library, but it wasn\'t found.');
      }
    }
  }

  // Export
  angular.module('atlas.components')
  .component('atlasMap', AtlasMap);
})();
