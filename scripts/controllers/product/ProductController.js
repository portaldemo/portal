portalApp.filter('startFrom', function () {
  return function (input, start) {
    if (input) {
      start = +start;
      return input.slice(start);
    }
    return [];
  };
});

portalApp.controller('ProductController', function($scope, $window, $rootScope, $location, $dialogs, SidebarManager, UserService, UtilityService, filterFilter) {

  $scope.init = function () {
    listProducts();
  };

  /**
   * Controls the Delete the user functionality.
   */
  $scope.deleteProduct = function(product) {
    //var dlg = $dialogs.confirm('Delete Product', $rootScope.messages.deleteUser + product.productname + " ?");
  };

  /**
   * Controls the Active deactive the user functionality.
   */
  $scope.activateProduct = function(product) {

  };

   /**
   * Controls the Active deactive the user functionality.
   */
  $scope.deactivateProduct = function(product) {

  };

  function listProducts() {

    $rootScope.loading = true;
    var jsonProducts = [{'id' : 1, 'productname' : '2W', 'description' : 'Two wheeler product', 'status' : 'ACTIVE'},
                    {'id' : 2, 'productname' : '3W', 'description' : 'Three Wheeler product', 'status' : 'ACTIVE'},
                    {'id' : 3, 'productname' : '4W', 'description' : 'Four Wheeler product', 'status' : 'ACTIVE'}
                    ];
    $rootScope.loading = false;
    $scope.products = jsonProducts;
    $scope.totalItems = $scope.products.length;
  }

  // pagination controls
  $scope.currentPage = 1;
  $scope.entryLimit = 5; // users per page
  $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);

  $scope.init();
});
