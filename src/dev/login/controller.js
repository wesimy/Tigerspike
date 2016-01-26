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
