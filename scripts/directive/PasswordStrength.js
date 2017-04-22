portalApp.directive("passwordStrength", function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            scope.$watch(attrs.passwordStrength, function(value) {
                if(angular.isDefined(value)){
                    if (value.length >= 12) {
                        scope.strength = 'strong';
                    } else if (value.length == 8 || (value.length > 8 && value.length < 12 )) {
                        scope.strength = 'short';
                    } else {
                        scope.strength = 'weak';
                    }
                }
            });
        }
    };
});