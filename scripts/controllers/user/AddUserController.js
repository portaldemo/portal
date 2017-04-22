portalApp.controller('AddUserController', function($scope, $window, $rootScope, $location, $routeParams, 
  $http, SidebarManager, ValidatorService, RoleService, UserService, UtilityService) {
  $scope.init = function () {
    //SidebarManager.setSlectedMenu($rootScope.sidebarMenus.ADMIN_USERS,$rootScope.sidebarSubMenus.NONE);
   // SidebarManager.isValidPreviliges($rootScope.previliges.Manage_UserMgt, "add user");
    $scope.errormassage = "";
    $scope.userId = $routeParams.id;
    $scope.user = {};
    $scope.selectedRoles = [];
    listRoles(); 
    
    if($scope.userId) {
      getUserDetails();
    }
    
    setTitles();
    
  };

  function setTitles() {
    if($scope.userId) {
      $scope.update = true;
      $scope.buttonTitle = "Update";
      $scope.headerMessage = "Update User";
    } else {
      $scope.update = false;
      $scope.buttonTitle = "Create";
      $scope.headerMessage = "Add User";
    }
  }

  $scope.loadTags = function(query) {
    return $http.get('scripts/controllers/roles.json');
  };

  //Add user function for form create button
  $scope.addUpdateUser = function() {
    if(!validateForm()) {
      $scope.user.roles = getRoles();
      if($scope.userId) {
        updateUser();
      } else {
        addUser();
      }
    }
  };

  function addUser() {
    try {
        $rootScope.loading = true;
        UserService.addUser($scope.user, function(error, json) {
          if (json && null != json) {
             $rootScope.loading = false;
             UtilityService.addSuccessMessage($rootScope.messages.userAdded);
             $location.path("/users");
          } else {
            $rootScope.loading = false;
            UtilityService.addErrorMessage($rootScope.gerErrorMessage(error));
          }
        });
      } catch(err) {
        $rootScope.loading = false;
      }
  }

  function updateUser() {
    try {
        $rootScope.loading = true;
        UserService.updateUser($scope.user, function(error, json) {
          if (json && null != json) {
             $rootScope.loading = false;
             UtilityService.addSuccessMessage($rootScope.messages.userDetailsUpdated);
             $location.path("/users");
          } else {
            $rootScope.loading = false;
            UtilityService.addErrorMessage($rootScope.gerErrorMessage(error));
          }
        });
      } catch(err) {
        $rootScope.loading = false;
      }
  }

  function validateForm() {
    var isValidationErrors = false;
    resetValidation();
    console.log($scope.user);
    if(ValidatorService.isBlankString($scope.user.firstName)) {
      isValidationErrors = true;
      $scope.userValidationErrors.firstName = true;
      $scope.userValidationErrors.firstNameErrorMsg = $rootScope.messages.userFirstNameBlank;
    }

    if(ValidatorService.isBlankString($scope.user.lastName)) {
      isValidationErrors = true;
      $scope.userValidationErrors.lastName = true;
      $scope.userValidationErrors.lastNameErrorMsg = $rootScope.messages.userLastNameBlank;
    }

    // Validation email
    if(ValidatorService.isBlankString($scope.user.emailId)  ) {
        $scope.userValidationErrors.email = true;
        isValidationErrors = true;
        $scope.userValidationErrors.emailErrorMsg = $rootScope.messages.emailBlank;
    } else {
      if(!ValidatorService.isEmailAddress($scope.user.emailId)){
        $scope.userValidationErrors.email = true;
        isValidationErrors = true;
        $scope.userValidationErrors.emailErrorMsg = $rootScope.messages.emailInvalid;
      }
    }

    if(!$scope.selectedRoles.length > 0) {
      isValidationErrors = true;
      $scope.userValidationErrors.roles = true;
      $scope.userValidationErrors.roleErrorMsg = $rootScope.messages.assignOneRole;
    }

     if(ValidatorService.isBlankString($scope.user.publisher.id)) {
      isValidationErrors = true;
      $scope.userValidationErrors.publisher = true;
      $scope.userValidationErrors.publisherErrorMsg = $rootScope.messages.selectPublisher;
     }

    return isValidationErrors;
  }

  $scope.refreshOuptPutModel = function(value) {
    $scope.roles.result = value;
    console.log("In controller  " + $scope.roles.result);
  }

  function resetValidation() {
    $scope.userValidationErrors = {"firstName": false, "lastName": false, "email": false, "roles": false, "publisher": false};
  }

  function getRoles() {
    var roles = [];
     angular.forEach($scope.selectedRoles, function(role, index) {
        roles.push({"id": role});
     });

     return roles;
  }

  function listRoles() {
    try {
      $rootScope.loading = true;
      RoleService.listRoles(function(error, json) {
        if (json && null != json) {
           $rootScope.loading = false;
           $scope.roles = json;
        } else {
          $rootScope.loading = false;
        }
      });
    } catch(err) {
      $rootScope.loading = false;
    }
  }

  function getUserDetails() {
    try {
      $rootScope.loading = true;
      $scope.user = {'id' : 1, 'firstName' : 'Satish', 'lastName' : 'Rajwade', 'emailId' : 'rsathish@gmail.com', 
                      'roles' : [{'id': 0, 'name' : 'Administrator'}], 'status' : 'Active'};
      setSelectedRoles();
      /*if($scope.userId) {
          $rootScope.loading = true;
          UserService.getUserDetails($scope.userId, function(error, json) {
            if (json && null != json) {
               $rootScope.loading = false;
               $scope.user = json;
               setSelectedRoles();
            } else {
              $rootScope.loading = false;
              UtilityService.addErrorMessage($rootScope.gerErrorMessage(error));
            }
          });
      }*/
    } catch(err) {
      $rootScope.loading = false;
    }
  }

  function setSelectedRoles() {
     angular.forEach($scope.user.roles, function(role, index) {
        $scope.selectedRoles.push(role.id);
     });
  }


  $scope.onlyLettersAndSomeSpecialChars = function(event) {
    // console.log(event.keyCode);
    if (event.ctrlKey || event.altKey) {
      event.preventDefault();
    } else {
      var key = event.keyCode;
      if (!((key == 8) || (key == 9) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90) || (key == 16) || (key == 173)  || (key == 190) || (key == 189))) {
        event.preventDefault();
      }
    }
  };

  $scope.init();
});