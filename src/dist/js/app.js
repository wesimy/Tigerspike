'use strict';
var app = angular.module('TechnicalExercise', [
  'ngSanitize',
    'ngRoute',
  'ngSanitize',
    'ngAnimate',
    'ngMessages'
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
      controller: 'RegisterationCtrl',
      controllerAs: 'registeration'
    })
  .when('/dashboard', {
      templateUrl: 'dev/dashboard/template.html'      
    })
    .otherwise({
      redirectTo: '/login'
    });
});
app.controller('LoginCtrl', ['$scope','LoginService',function ($scope, LoginService) {
  console.log('Login Controller Init');
    // Default Variables
    $scope.submitted = false;
    $scope.isFormValid = false;
    $scope.User = {
        Username: '',
        Password: ''
    };
    
    // Check Form Validation
    $scope.$watch('loginform.$valid', function(newValue){
        $scope.isFormValid = newValue;
    });
    
    
    
    /**
         * @ngdoc object
         * @id RegistrationSaveData
         * @name SubmitData
         * @description
         * This Method submits the form data to the Registration Service
        **/
    $scope.Login = function(data){
        $scope.submitted = true;
        
        if($scope.isFormValid){
            console.log('Calling Save Data Service');
            LoginService.AuthUser($scope.User).then(function(d){
                    
                   if(d === true){
                    // Clear The Form
                       
                    // Redirect To Login
                       
                   }
                   
                   else{
                       console.log('user is not valid');
                    }
            
            });
        }
    }
    
   
    
}]);

app.service("LoginService", ['$http', '$q', function ($http, $q)
	{
        /**
         * @ngdoc object
         * @id AuthUser
         * @name AuthUser
         * @description
         * This Method submits user info to the server and returns auth (true / false ) .
        **/
		this.AuthUser = function (u)
		{
            
            // Pass the data to the server with a defer promise and handle success / fail call backs
            var deferred = $q.defer();
            
            console.log('LoginService - AuthUser:');
            console.log(u);
            
            // To Be Replaced with $http call
            // On Success
            deferred.resolve(true);
            // On Error
            //deferred.resolve(false);
            return deferred.promise;
		};
        
		
	}]);
app.controller('RegisterationCtrl', ['$scope','RegistrationService',function ($scope, RegistrationService) {
  console.log('Registeration Controller Init');
    // Default Variables
    $scope.submitted = false;
    $scope.message = '';
    $scope.isFormValid = false;
    $scope.User = {
        Forename: '',
        Surname: '',
        Sex:'',
        DOB:'',
        Email:'',
        Verifyemail:'',
        Password:''
    };
    
    // Check Form Validation
    $scope.$watch('registrationform.$valid', function(newValue){
        $scope.isFormValid = newValue;
    });
    
    
    
    /**
         * @ngdoc object
         * @id RegistrationSaveData
         * @name SubmitData
         * @description
         * This Method submits the form data to the Registration Service
        **/
    $scope.Register = function(data){
        $scope.submitted = true;
        $scope.message = '';
        
        if($scope.isFormValid){
            console.log('Calling Save Data Service');
            RegistrationService.SaveData($scope.User).then(function(d){
                    
                   if(d === true){
                    // Clear The Form
                     $scope.ClearForm();
                       
                    // Redirect To Login
                       
                   }
                   
                   else{
                       console.log('Some bad stuff happened');
                    }
            
            });
        }
    }
    
    
    /**
         * @ngdoc object
         * @id RegistrationClearForm
         * @name ClearForm
         * @description
         * This Method clears the registration form and object.
        **/
    $scope.ClearForm = function(){
        $scope.User = {};
        $scope.registrationform.$setPristine();
        $scope.submitted = false;
        $scope.isFormValid = false;
    }
    
}]);

app.service("RegistrationService", ['$http', '$q', function ($http, $q)
	{
        /**
         * @ngdoc object
         * @id SubmitData
         * @name SubmitData
         * @description
         * This Method takes a json data object and pass it to the server.
        **/
		this.SaveData = function (d)
		{
            
            // Pass the data to the server with a defer promise and handle success / fail call backs
            var deferred = $q.defer();
            
            console.log('RegistrationService - SaveData:');
            console.log(d);
            
            // To Be Replaced with $http call
            // On Success
            deferred.resolve(true);
            // On Error
            //deferred.resolve(false);
            return deferred.promise;
		};
        
		
	}]);