portalApp.controller('UserDetailsController', function($scope, $window, $rootScope, $location, $routeParams, $dialogs, SidebarManager, 
                                                        UserService, UtilityService) {
  $rootScope.isHeaderVisible = true;
  $scope.init = function () {
    //SidebarManager.setSlectedMenu($rootScope.sidebarMenus.ADMIN_USERS,$rootScope.sidebarSubMenus.NONE);
   // SidebarManager.isValidPreviliges($rootScope.isUserManagementVisible(), "user details");
    $scope.errormassage = "";
    $scope.userId = $routeParams.id;

    getUserDetails();
    // deactivateUser();
  };

 /**
   * Controls the Delete the user functionality.
   */
  $scope.deleteUser = function(user) {
    var dlg = $dialogs.confirm('Delete User', $rootScope.messages.deleteUser + user.firstName + " ?");
     dlg.result.then(function(btn) {
        try {
          $rootScope.loading = true;
          UserService.deleteUser(user.id,  function(error, json) {
            $rootScope.loading = false;
            // if (json && null != json) {
               $rootScope.loading = false;
               UtilityService.addSuccessMessage($rootScope.messages.userDeleted);
               $location.path("/users");
            //    listUsers();
            // } else if(error && null !== error){
            //   $rootScope.loading = false;
            //   UtilityService.addErrorMessage(error.error_message);
            // }
          });
        } catch(err) {
          $rootScope.loading = false;
        }
    });
  };

   /**
   * Controls the Active deactive the user functionality.
   */
  $scope.userActivate = function(user) {
     var dlg = $dialogs.confirm('Activate User',$rootScope.messages.activateUser + user.firstName + " ?");
     dlg.result.then(function(btn) {
        try {
          var inputParamJson = {"id": user.id};
          $rootScope.loading = true;
          UserService.activateUser(inputParamJson,  function(error, json) {
              $rootScope.loading = false;
              UtilityService.addSuccessMessage($rootScope.messages.userActivated);
              $location.path("/users");
            // if (json && null != json) {

            // } else if(error && null !== error){
            //   $rootScope.loading = false;
            //   UtilityService.addErrorMessage(error.error_message);
            // }
          });
        } catch(err) {
          $rootScope.loading = false;
        }
    });
  };

   /**
   * Controls the deactive the user functionality.
   */
  $scope.deactivateUser = function(user) {
   var dlg = $dialogs.confirm('Deactivate User', $rootScope.messages.deactivateUser + user.firstName + " ?");
     dlg.result.then(function(btn) {
        try {
          var inputParamJson = {"id": user.id};
          $rootScope.loading = true;
          UserService.deactivateUser(inputParamJson,  function(error, json) {
             $rootScope.loading = false;
             UtilityService.addSuccessMessage($rootScope.messages.userDeactivated);
             $location.path("/users");
            // if (json && null != json) {

            // } else if(error && null !== error){
            //   $rootScope.loading = false;
            //   UtilityService.addErrorMessage(error.error_message);
            // }
          });
        } catch(err) {
          $rootScope.loading = false;
        }
    });
  };

  function getUserDetails() {
    try {
      $rootScope.loading = true;
      $scope.userdetail = {'id' : 1, 'firstName' : 'Satish', 'lastName' : 'Rajwade', 'emailId' : 'rsathish@gmail.com', 
                      'role' : 'Administrator', 'status' : 'Active'};
      /*UserService.getUserDetails($scope.userId, function(error, json) {
        if (json && null != json) {
           $rootScope.loading = false;
           $scope.userdetail = json;
        } else {
          $rootScope.loading = false;
          UtilityService.addErrorMessage($rootScope.gerErrorMessage(error));
        }
      });*/
    } catch(err) {
      $rootScope.loading = false;
    }
  }

  $scope.init();

});