portalApp.controller('AdminSidebarController', function($scope, $rootScope, $location) {

  $rootScope.isHeaderVisible = true;
  $scope.userClicked = function ()
  {
    $location.path("/user");
  };

  $scope.rolesClicked = function()
  {
    $location.path("/role");
  };

});