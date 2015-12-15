(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
angular.module('Website')
.controller('MainCtrl', function($scope){
  $scope.greeting = "Hello"
})
},{}],3:[function(require,module,exports){
require('./public/scripts/app.js');require('./public/scripts/main.controller.js');
},{"./public/scripts/app.js":1,"./public/scripts/main.controller.js":2}]},{},[3]);
