portalApp.filter('startFrom', function () {
  return function (input, start) {
    if (input) {
      start = +start;
      return input.slice(start);
    }
    return [];
  };
});

portalApp.controller('UserController', function($scope, $window, $rootScope, $location, $dialogs, SidebarManager, UserService, UtilityService, filterFilter) {
  $scope.init = function () {
    /*$rootScope.isHeaderVisible = true;
    SidebarManager.setSlectedMenu($rootScope.sidebarMenus.ADMIN_USERS,$rootScope.sidebarSubMenus.NONE);
    SidebarManager.isValidPreviliges($rootScope.isUserManagementVisible() , "users");
    $scope.errormassage = "";
    //testing msg
    $scope.message ="welcome";*/
    //console.log('listUsers');
    listUsers();

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
            UtilityService.addSuccessMessage($rootScope.messages.userDeleted);
            listUsers();
            // if (json && null != json) {
            //    $rootScope.loading = false;
            //    UtilityService.addSuccessMessage("User deleted successfully.");
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
     var dlg = $dialogs.confirm('Activate User', $rootScope.messages.activateUser + user.firstName + " ?");
     dlg.result.then(function(btn) {
        try {
          var inputParamJson = {"id": user.id};
          $rootScope.loading = true;
          UserService.activateUser(inputParamJson,  function(error, json) {
              $rootScope.loading = false;
              UtilityService.addSuccessMessage($rootScope.messages.userActivated);
              listUsers();
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
   * Controls the Active deactive the user functionality.
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
             listUsers();
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


  function listUsers() {

    $rootScope.loading = true;
    var jsonUsers = [{'id' : 1, 'firstName' : 'Satish', 'lastName' : 'Rajwade', 'emailId' : 'rsathish@gmail.com', 
                      'role' : 'Administrator', 'status' : 'Active'},
                    {'id' : 2, 'firstName' : 'Vijay', 'lastName' : 'Solanki', 'emailId' : 'svijay@gmail.com', 
                      'role' : 'Administrator', 'status' : 'Active'},
                    {'id' : 3, 'firstName' : 'Parag', 'lastName' : 'Waghmare', 'emailId' : 'wparag@gmail.com', 
                      'role' : 'Administrator', 'status' : 'Active'}
                    ];
    $rootScope.loading = false;
    $scope.users = jsonUsers;
    $scope.totalItems = $scope.users.length;
    /*try {
      //$rootScope.loading = true;
      UserService.listUsers(function(error, json) {
        if (json && null != json) {

           $rootScope.loading = false;
           $scope.users = json;
           $scope.totalItems = $scope.users.length;
           //setUserRoles();
        } else {
          $rootScope.loading = false;
          UtilityService.addErrorMessage($rootScope.gerErrorMessage(error));
        }
      });
    } catch(err) {
      $rootScope.loading = false;
    }*/
  }

  function setUserRoles() {
    if($scope.users && null !== $scope.users) {
      for(var index = 0; index < $scope.users.length; index++) {
        var user = $scope.users[index];
        if(user.roles) {
          var role = "";
           for(var step = 0; step < user.roles.length; step++) {
            role = role + user.roles[step].name;
            if(step !== user.roles.length - 1) {
              role = role +", ";
            }
           }
           user.role = role;
        }
      }
    }
  }

  //Search Users
  $scope.searchFilter = function (user) {
    var search = new RegExp($scope.searchUser, 'i');
    return !$scope.searchUser || search.test(user.firstName) ||
            search.test(user.lastName) || search.test(user.emailId) ||
            search.test(user.role)|| search.test(user.status);
  };

  // pagination controls
  $scope.currentPage = 1;
  $scope.entryLimit = 5; // users per page
  $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);

  // $watch search to update pagination
  $scope.$watch('searchUser', function (newVal, oldVal) {
    try {
      $scope.filtered = filterFilter($scope.users, newVal);
      $scope.totalItems = $scope.filtered.length;
      $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
      $scope.currentPage = 1;
    }
    catch(err) {
      $rootScope.loading = false;
    }
  }, true);
  $scope.init();
});