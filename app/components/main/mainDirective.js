
angularApp.directive('mainDirective', function() {
    return {
        restrict: 'E',
        templateUrl: '/app/components/main/mainView.html',
        controller: 'mainController',
        replace: true
    }
})