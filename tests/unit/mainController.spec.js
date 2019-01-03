
describe('mainController', function() {

    let users = [
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret"
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Antonette"
        },
        {
          "id": 3,
          "name": "Clementine Bauch",
          "username": "Samantha"
        }],
        usersService,
        $q,
        $scope,
        $controller,
        $interval

    // inject the module
    beforeEach(module('angularApp'))
    
    // inject the services
    beforeEach(inject(function(_usersService_, _$q_, _$rootScope_, _$controller_, _$interval_) {
        usersService = _usersService_;
        $interval = _$interval_;
        $q = _$q_;
        $scope = _$rootScope_.$new();
        $controller = _$controller_
    }))

    // fake the user service for every test
    beforeEach(function() {
        spyOn(usersService, 'getUsers').and.callFake(function() {
            let deferred = $q.defer();
            deferred.resolve(users);
            return deferred.promise;
        })
    })

    // build the controller
    beforeEach(function() {
        $controller('mainController', {
            $scope: $scope
        })

        $scope.$apply();
    })

    it('Should rotate the actualUser after every 3 seconds', function() {

        expect($scope.actualUser).toBe(users[0])
        $interval.flush(3000)
        expect($scope.actualUser).toBe(users[1])
        $interval.flush(3000)
        expect($scope.actualUser).toBe(users[2])
        
    })

    it('Should stop the user inteval when the button is clicked', function() {

        expect($scope.actualUser).toBe(users[0])
        $interval.flush(3000)
        expect($scope.actualUser).toBe(users[1])
        $scope.clearUserInterval();
        $interval.flush(3000)
        expect($scope.actualUser).toBe(users[1])
    })
})