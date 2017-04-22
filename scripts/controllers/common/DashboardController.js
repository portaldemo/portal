portalApp.controller('DashboardController', function($scope, $window, $rootScope, SidebarManager) {
  $rootScope.isHeaderVisible = true;
  $scope.init = function () {
    $scope.errormassage = "";
  };


  $scope.init();
});