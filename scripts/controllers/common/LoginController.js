portalApp.controller('LoginController', function($scope, $window, $rootScope, $location, ValidatorService, AuthService, UtilityService) {
  $rootScope.isHeaderVisible = false;
	$scope.init = function () {
    $scope.errormassage = "";
    $scope.login = {};

    //testing msg
    $scope.message ="hello";
    $rootScope.isLeftMenuRequired = false;
    $rootScope.isNavbarRequired = false;
	};

  // Function login called on click on login button
  $scope.doLogin = function()
  {
    $('#loginErrorMsgDiv').hide();
    //$rootScope.isLeftMenuRequired = true;
    //$rootScope.isNavbarRequired = true;
    //$location.path("/dashboard");

    if(!validateForm()) {

      try {
        //console.log($rootScope.emailId +' '+ $scope.login.emailId);
        //console.log($rootScope.password +' '+ $scope.login.password);
        $rootScope.loading = true;
        //AuthService.login($scope.login, function(error, json) {
        //  if ($json != null) {
          if($scope.login.emailId == $rootScope.emailId &&
           $scope.login.password ==  $rootScope.password) {
             //populateRoles(json);
             //$rootScope.initUserSession(json);
             $rootScope.isLeftMenuRequired = true;
             $rootScope.isNavbarRequired = true;
             $location.path("/dashboard");
          } else {
            $rootScope.loading = false;
            //UtilityService.addErrorMessage($rootScope.gerErrorMessage(error));
            $('#loginErrorMsgDiv').show();
          }
        //});
      } catch(err) {
        $rootScope.loading = false;
      }
    }
  };

  function validateForm() {
    var isValidationErrors = false;
    resetValidation();

    if(ValidatorService.isBlankString($scope.login.password)) {
      isValidationErrors = true;
      $scope.loginValidationErrors.password = true;
      $scope.loginValidationErrors.passwordErrorMsg = $rootScope.messages.passwordBlank;
    }

    // Validation email
    if(ValidatorService.isBlankString($scope.login.emailId)  ) {
        $scope.loginValidationErrors.emailId = true;
        isValidationErrors = true;
        $scope.loginValidationErrors.emailIdErrorMsg = $rootScope.messages.emailIdBlank;
    } else {
      if(!ValidatorService.isEmailAddress($scope.login.emailId)){
        $scope.loginValidationErrors.emailId = true;
        isValidationErrors = true;
        $scope.loginValidationErrors.emailIdErrorMsg = $rootScope.messages.emailIdInvalid;
      }
    }
    return isValidationErrors;
  }

  function resetValidation() {
    $scope.loginValidationErrors = {"emailId": false, "password": false};
  }

  function populateRoles(json) {
    if(json && null != json) {
      var roles = json.roles;
        for(var index = 0; index < roles.length; index++) {
          var role = roles[index];
          for(var step = 0; step < role.accles.length; step++) {
            if(role.accles[step].module === $rootScope.modules.Billing) {
              $rootScope.previliges.Manage_Bill = role.accles[step].manage;
              $rootScope.previliges.View_Bill = role.accles[step].view;
            } else if(role.accles[step].module === $rootScope.modules.UserMgmt) {
              $rootScope.previliges.Manage_UserMgt = role.accles[step].manage;
              $rootScope.previliges.View_UserMgt = role.accles[step].view;
            } else if(role.accles[step].module === $rootScope.modules.Reports) {
              $rootScope.previliges.Manage_Reports = role.accles[step].manage;
              $rootScope.previliges.View_Reports = role.accles[step].view;
            } else if(role.accles[step].module === $rootScope.modules.Campaigns) {
              $rootScope.previliges.Manage_Campaigns = role.accles[step].manage;
              $rootScope.previliges.View_Campaigns = role.accles[step].view;
            }
          }
        }
    }
  }

  $scope.swapScreen = function(id) {
      $('.visible').removeClass('visible animated fadeInUp');
      $('#'+id).addClass('visible animated fadeInUp');
    }

	$scope.init();
});
