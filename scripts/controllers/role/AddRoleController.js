//portalApp.controller('AddRoleController', function($scope, $window, $rootScope, $location, $routeParams, $http, SidebarManager, ValidatorService, RoleService, UtilityService) {
 portalApp.controller('AddRoleController', function($scope, $window, $rootScope, $location, $routeParams, 
  $http, SidebarManager, ValidatorService, RoleService, UserService, UtilityService) {
  $scope.init = function () {

    $scope.errormassage = "";
    //$scope.userId = $routeParams.id;
    $scope.roleDetail = {}; 
    setTitles();
  };

  function setTitles() {

    //$scope.update = false;
    $scope.buttonTitle = "Create";
    $scope.headerMessage = "Add Role";

  };
 
  /*$scope.loadTags = function(query) {
    return $http.get('scripts/controllers/roles.json');
  };*/

  //Add user function for form create button
  $scope.addUpdateRole = function() {
    if(!validateForm()) {
      if($scope.userId) {
        updateRole();
      } else {
        addRole();
      }
    }
  };

  function addRole() {
    try {
        $rootScope.loading = true;
        RoleService.addRole($scope.roleDetail, function(error, json) {
          if (json && null != json) {
             $rootScope.loading = false;
           //  UtilityService.addSuccessMessage($rootScope.messages.roleAdded);
             $location.path("/roles");
          } else {
            $rootScope.loading = false;
            UtilityService.addErrorMessage($rootScope.gerErrorMessage(error));
          }
        });
      } catch(err) {
        $rootScope.loading = false;
      }
  }

  function updateRole() {
    try {
        $rootScope.loading = true;
        RoleService.updateRole($scope.roleDetail, function(error, json) {
          if (json && null != json) {
             $rootScope.loading = false;
           //  UtilityService.addSuccessMessage($rootScope.messages.roleDetailsUpdated);
             $location.path("/roles");
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

    if(ValidatorService.isBlankString($scope.roleDetail.roleName)) {
      isValidationErrors = true;
      $scope.roleValidationErrors.roleName = true;
      $scope.roleValidationErrors.roleNameErrorMsg = $rootScope.messages.roleNameBlank;
    }

    if(ValidatorService.isBlankString($scope.roleDetail.roleDescription)) {
      isValidationErrors = true;
      $scope.roleValidationErrors.roleDescription = true;
      $scope.roleValidationErrors.roleDescriptionErrorMsg = $rootScope.messages.roleDescriptionNameBlank;
    }

    return isValidationErrors;
  }

  function resetValidation() {
    $scope.roleValidationErrors = { "roleName":false,"roleDescription": false };
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