(function() {
  var app = angular.module('atlasSample', ['atlas']);

  app.controller('SampleController', SampleController);

  SampleController.$inject = ["$scope"];

  function SampleController($scope) {
    $scope.title     = "Atlas Sample";
    $scope.mapCenter = { lat: null, lng: null };
    $scope.zoomLevel = 11;

    $scope.changeZoomLevel = function() {
      $scope.zoomLevel = 15;
    }

    $scope.changeCenter = function() {
      $scope.mapCenter = { lat: -34.397, lng: 150.644 };
    }
  }
})();
