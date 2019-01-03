
angularApp.controller('mainController', function($scope, usersService, $interval) {

    let actualUserIndex = 0,
        userInterval;

    $scope.message = 'Bienvenido';

    $scope.clearUserInterval = function() {

        if (!userInterval) return;
        $interval.cancel(userInterval)
    }

    usersService.getUsers().then(function(users) {
        $scope.users = users;
        $scope.actualUser = users[actualUserIndex];

        userInterval = $interval(function() {
            actualUserIndex++
            $scope.actualUser = users[actualUserIndex % users.length]
        }, 3000)

    });

})