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