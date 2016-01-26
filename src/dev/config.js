
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