portalApp.controller('RoleDetailsController', function($scope,$rootScope,$routeParams, SidebarManager, 
                                                        RoleService, UtilityService) {
  $scope.init = function () {
    // SidebarManager.setSlectedMenu($rootScope.sidebarMenus.ADMIN_ROLES,$rootScope.sidebarSubMenus.NONE);
  //   SidebarManager.isValidPreviliges($rootScope.isUserManagementVisible(), "role details");
  	// $rootScope.isHeaderVisible = true;
     $scope.errormassage = "";

	 // $scope.roleId = $routeParams.id;

    // setSelectedRole();
    // privilegesValidations();
    getRoleDetails();
  };

  function getRoleDetails() {
    try {
      $rootScope.loading = true;
      RoleService.getRoleDetails($scope.roleId, function(error, json) {
        if (json && null != json) {
           $rootScope.loading = false;
           $scope.roleDetail = json;
        } else {
          $rootScope.loading = false;
          UtilityService.addErrorMessage(error.error_message);
        }
      });
    } catch(err) {
      $rootScope.loading = false;
    }
  }

  // function setSelectedRole() {
  // 	if(angular.isDefined($scope.roleId)) {
  // 		for(var index = 0; index < $scope.roleDetails.length; index++){
  // 			if($scope.roleId == $scope.roleDetails[index].id) {
  // 				$scope.role = $scope.roleDetails[index];
  // 				break;
  // 			}
  // 		}
  // 	}
  // };

/*function privilegesValidations(){
            setSelectedRole();
                 $scope.privilege = $scope.role.privileges;
                if($scope.privilege.manage == true && $scope.privilege.view == true){
                  document.getElementById("check").disabled= true;

                }
};*/

  $scope.init();
});
