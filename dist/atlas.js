(function (angular) {
  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module("atlas.config", [])
    .value("atlas.config", {
      debug: true
    });

  // Modules
  angular.module("atlas.components", []);
  angular.module("atlas.services", []);
  angular.module("atlas",
    [
      "atlas.config",
      "atlas.components",
      "atlas.services"
    ]);

})(angular);

(function() {
  var AtlasMap = {
    controller: AtlasMapController,
    bindings: {
      config: "<",
      center: "<",
      zoom: "<"
    },
    template: [
      "<div class='atlas-map-container'>",
        "<div class='atlas-map' style='height: 100%;'></div>",
      "</div>"
    ].join(" ")
  };

  AtlasMapController.$inject = ["$scope", "$element", "$attrs"];

  function AtlasMapController($scope, $element, $attrs) {
    var ctrl           = this;
    ctrl.map           = {};
    var defaultOptions = {
      zoom: 15,
      mapTypeId: window.google.maps.MapTypeId.SATELLITE,
      center: { lat: -25.363, lng: 131.044 }
    };

    ctrl.$onInit = function() {
      if (window.google.maps && window.google.maps.Map) {

        // Maybe we will need a "class" to hold and process
        // all the map data. Maybe delegate this to a factory of Maps?
        var mapElement = angular.element($element).children().children()[0];
        var google     = window.google;
        var options    = angular.extend(defaultOptions, {
          zoom: ctrl.zoom,
          center: (ctrl.center.lat ? convertLatLng(ctrl.center.lat, ctrl.center.lng) : defaultOptions.center )
        });

        ctrl.map    = new google.maps.Map(mapElement, options);
        ctrl.zoom   = options.zoom;
        ctrl.center = options.center;
      } else {
        throw new Error("DependencyError: Expected Google Maps Library, but it wasn't found.");
      }
    };

    ctrl.$onChanges = function(changes) {
      if (changes.center && !changes.center.isFirstChange()) {
        setCenter(changes.center.currentValue);
      }

      if (changes.zoom && !changes.zoom.isFirstChange()) {
        if (changes.zoom.currentValue) {
          setZoomLevel(changes.zoom.currentValue);
        }
      }
    };

    ctrl.updateState = function(obj) {
      angular.extend(ctrl.state, obj);
    };

    function setZoomLevel(zoomLevel) {
      ctrl.map.setZoom(parseInt(zoomLevel));
    }

    function setCenter(centerObject) {
      ctrl.map.setCenter(centerObject);
    }

    function convertLatLng(lat, lng) {
      return new google.maps.LatLng(parseFloat(lat), parseFloat(lng));
    }
  }

  // Export
  angular.module("atlas.components")
  .component("atlasMap", AtlasMap);
})();
