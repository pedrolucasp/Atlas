(function (angular) {
  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('atlas.config', [])
    .value('atlas.config', {
      debug: true
    });

  // Modules
  angular.module('atlas.components', []);
  angular.module('atlas.services', []);
  angular.module('atlas',
    [
      'atlas.config',
      'atlas.components',
      'atlas.services'
    ]);

})(angular);
