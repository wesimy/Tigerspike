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