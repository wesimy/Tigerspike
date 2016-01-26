'use strict';
var app = angular.module('TechnicalExercise', [
  'ngSanitize',
    'ngRoute',
  'ngSanitize',
    'ngAnimate'
]);



app.run(function($rootScope){
  $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
    console.log(event, current, previous, rejection);
    
  })
});

app.config(function ( $routeProvider ) {
  $routeProvider
    
     
      .when('/login', {
      templateUrl: 'dev/login/template.html',
      controller: 'LoginCtrl',
      controllerAs: 'login'
    })
  .when('/register', {
      templateUrl: 'dev/register/template.html',
      controller: 'RegisterCtrl',
      controllerAs: 'register'
    })
    .otherwise({
      redirectTo: '/login'
    });
});
app.controller('LoginCtrl', function ($scope) {
  console.log('Login Controller Init');
});

app.controller('RegisterCtrl', function ($scope) {
  console.log('Register Controller Init');
});
