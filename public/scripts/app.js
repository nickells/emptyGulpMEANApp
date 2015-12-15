var app = angular.module('Website', ["ui.router"])

app.config(function($stateProvider,$locationProvider){
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'templates/main.template.html',
      controller: 'MainCtrl'
    })
})