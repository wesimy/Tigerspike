app.controller('RegisterationCtrl', ['$scope','$location','RegistrationService',function ($scope, $location,RegistrationService) {
  console.log('Registeration Controller Init');
    // Default Variables
    $scope.User = {
        Forename: '',
        Surname: '',
        Sex:'',
        DOB:'',
        Email:'',
        Verifyemail:'',
        Password:''
    };
    
    $scope.dt = '';
    
    /**
         * @ngdoc object
         * @id RegistrationSaveData
         * @name SubmitData
         * @description
         * This Method submits the form data to the Registration Service
        **/
    $scope.Register = function(data){
        $scope.message = '';
        
        if($scope.registrationform.$valid){
            console.log('Calling Save Data Service');
            RegistrationService.SaveData($scope.User).then(function(d){
                    
                   if(d === true){
                    // Clear The Form
                     $location.path( "/dashboard" );  
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
        
    }
    
}]);
