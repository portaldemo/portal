portalApp.directive('jqdatepicker', function ($parse) {
    return {
        restrict: 'A',
        require: 'ngModel',
         link: function (scope, element, attrs, ngModelCtrl) {
            var ngModel = $parse(attrs.ngModel);
            element.datepicker({
                dateFormat: 'yy-mm-dd',
                onSelect: function (date) {
                    scope.date = date;
                    scope.$apply(function(scope){
                        // Change binded variable
                        ngModel.assign(scope, date);
                    });
                }
            });
        }
    };
});