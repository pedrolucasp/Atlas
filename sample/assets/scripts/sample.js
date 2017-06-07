(function() {
  var app = angular.module('atlasSample', ['atlas']);

  app.controller('SampleController', SampleController);

  SampleController.$inject = ["$scope"];

  function SampleController($scope) {
    $scope.title     = "Atlas Sample";
    $scope.mapCenter = { lat: null, lng: null };
    $scope.zoomLevel = 11;
  }
})();
