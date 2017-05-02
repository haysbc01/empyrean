angular.module('design', ['ngRoute'])
  .config(Config);

Config.$inject = ['$routeProvider'];

function Config($routeProvider){

  $routeProvider
    .when('/', {
      templateUrl : '/html/home.html',
      controller : 'authController',
      controllerAs : 'auth'
    })
    .when('/auth', {
      templateUrl : '/html/auth.html',
      controller : 'authController',
      controllerAs : 'auth'
    })
    .when('/dashboard', {
      templateUrl : '/html/dashboard.html',
      controller : 'dashController',
      controllerAs : 'dash'
    })
}
