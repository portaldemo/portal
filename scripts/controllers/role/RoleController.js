portalApp.controller('RoleController', function($scope, $window, $rootScope, $location, SidebarManager, RoleService, UtilityService) {
  
  $scope.init = function () {
    //$rootScope.isHeaderVisible = true;
    //SidebarManager.setSlectedMenu($rootScope.sidebarMenus.ADMIN_ROLES,$rootScope.sidebarSubMenus.NONE);
    //SidebarManager.isValidPreviliges($rootScope.isUserManagementVisible(), "roles");
    $scope.errormassage = "";
    listRoles();
  };

  //Get Roles
  function listRoles() {
    try {
      //$rootScope.loading = true;
      RoleService.listRoles(function(error, json) {
        if (json && null != json) {
           //$rootScope.loading = false;
           $scope.roles = json;
           console.log($scope.roles);
        } else {
          //$rootScope.loading = false;
          UtilityService.addErrorMessage($rootScope.gerErrorMessage(error));
        }
      });
    } catch(err) {
      $rootScope.loading = false;
    }
  }

  //Search Roles
  $scope.searchFilter = function (role) {
    var search = new RegExp($scope.searchRole, 'i');
    return !$scope.searchRole || search.test(role.name) || search.test(role.description);
  };
  $scope.init();
});