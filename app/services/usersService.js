
angularApp.factory('usersService', function($http, $q) {

    return {
        getUsers: function() {

            let deferred = $q.defer();

            $http.get('https://jsonplaceholder.typicode.com/users')
                    .then(function(response) {
                        deferred.resolve(response.data)
                    })
                    .catch(function(e) {
                        deferred.reject('Something go wrong...')
                    })

            return deferred.promise;
        }
    }
})