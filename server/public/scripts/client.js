var app = angular.module('HeroApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/heroList', {
      templateUrl: '/views/hero-list.html',
      controller: 'HeroListController',
      controllerAs: 'hlc'
    })
    .when('/addHero', {
      templateUrl: '/views/hero-entry.html',
      controller: 'AddHeroController',
      controllerAs: 'ah'
    })
    .otherwise({
      redirectTo: 'heroList'
    });
}]);
