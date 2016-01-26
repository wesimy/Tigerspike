app.controller('LoginCtrl', ['$scope','$location','LoginService',function ($scope, $location, LoginService) {
  console.log('Login Controller Init');
    
    // Default Variables
    $scope.User = {
        Username: '',
        Password: ''
    };
    
    
    /**
         * @ngdoc object
         * @id RegistrationSaveData
         * @name SubmitData
         * @description
         * This Method submits the form data to the Registration Service
        **/
    $scope.Login = function(data){
        if($scope.loginform.$valid){
            console.log('Calling Save Data Service');
            LoginService.AuthUser($scope.User).then(function(d){     
                   if(d === true){
                    // Redirect To Login
                    $location.path( "/dashboard" )   
                   }
                    // Do Something
                   else{
                       console.log('user is not valid');
                    }
            
            });
        }
    }
    
   
    
}]);
