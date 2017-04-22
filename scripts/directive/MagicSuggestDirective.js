portalApp.directive('magicSuggest', function() {
 return {
        restrict: 'A',
        scope:{
            inputModel      : '=',
    
            callback: '='
        },

        link: function (scope, element, attrs ) {
          var ms = $('#'+ attrs.id).magicSuggest({
            data: scope.inputModel,
            placeholder: 'Search Issue',
            maxDropHeight: 100,
            sortOrder: 'name',
            width:"100%"
          });

          $(ms).on('selectionchange', function(){
            var selectedValues = ms.getValue();
            scope.$apply(scope.callback(selectedValues));
          });
        },
    };
});