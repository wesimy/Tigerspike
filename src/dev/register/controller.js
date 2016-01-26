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
