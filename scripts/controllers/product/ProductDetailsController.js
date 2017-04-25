portalApp.controller('ProductDetailsController', function($scope, $window, $rootScope, $location, $routeParams, $dialogs, SidebarManager,
                                                        UserService, UtilityService) {
  $rootScope.isHeaderVisible = true;

  $scope.init = function () {
    $scope.errormassage = "";
    $scope.productId = $routeParams.id;
    getProductDetails();
  };

  function getProductDetails() {
    try {
      $rootScope.loading = true;
      $scope.productdetail = {'id' : 1, 'productname' : '2W', 'description' : 'Two wheeler product', 'status' : 'Active'};
    } catch(err) {
      $rootScope.loading = false;
    }
  }

  $scope.init();

});
