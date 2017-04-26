portalApp.controller('ChangePasswordController', function($scope, $window, $rootScope, $location, $routeParams, ValidatorService, UtilityService, AuthService) {

  $scope.init = function () {
    $rootScope.isHeaderVisible = false;
    $scope.errormassage = "";
    $scope.token = $routeParams.token;
    $scope.changePassword = {};
    resetValidation();
    $scope.passwordStrength ={"newPasswordStrengthMessage":false, "short": false, "strong": false};
  };

  $scope.changePasswordClick = function() {
    if(!validateForm()) {
      try {
        $scope.changePassword.token = $scope.token;
        $location.path("/login");
      } catch(err) {
        console.log(err);
        $rootScope.loading = false;
      }
    }
  };

  function validateForm() {
    var isValidationErrors = false;
    resetValidation();

    if(ValidatorService.isBlankString($scope.changePassword.password)) {
      isValidationErrors = true;
      $scope.changePasswordValidationErrors.password = true;
      $scope.changePasswordValidationErrors.newPasswordErrorMsg = $rootScope.messages.passwordBlank;
      $scope.passwordStrength.strong = false;
      $scope.passwordStrength.short = false;
      $scope.passwordStrength.newPasswordStrengthMessage = false;
    } else if($scope.changePassword.password.length < 8){
      isValidationErrors = true;
      $scope.changePasswordValidationErrors.password = true;
      $scope.passwordStrength.strong = false;
      $scope.passwordStrength.short = false;
      $scope.passwordStrength.newPasswordStrengthMessage = false;
      $scope.changePasswordValidationErrors.newPasswordErrorMsg = $rootScope.messages.passwordLength;
    }else {
       if (!ValidatorService.isValidPassword($scope.changePassword.password)) {
        isValidationErrors = true;
        $scope.changePasswordValidationErrors.password = true;
        $scope.changePasswordValidationErrors.newPasswordErrorMsg = $rootScope.messages.passwordMustContains;
        $scope.passwordStrength.strong = false;
        $scope.passwordStrength.short = false;
        $scope.passwordStrength.newPasswordStrengthMessage = false;
      }
    }

    if(ValidatorService.isBlankString($scope.changePassword.confirmPassword)) {
      isValidationErrors = true;
      $scope.changePasswordValidationErrors.confirmPassword = true;
      $scope.changePasswordValidationErrors.confirmPasswordErrorMsg = $scope.messages.passwordBlank;
    }

    if(!$scope.changePasswordValidationErrors.confirmPassword  && !$scope.changePasswordValidationErrors.password) {
      if($scope.changePassword.password !== $scope.changePassword.confirmPassword) {
         isValidationErrors = true;
         $scope.changePasswordValidationErrors.confirmPassword = true;
         $scope.changePasswordValidationErrors.confirmPasswordErrorMsg = $rootScope.messages.passwordUnMatched;
      }
    }

    return isValidationErrors;
  }

   $scope.newPasswprdChanged = function() {
    if(ValidatorService.isBlankString($scope.changePassword.password)) {
      isValidationErrors = true;
      $scope.changePasswordValidationErrors.password = true;
      $scope.passwordStrength.strong = false;
      $scope.passwordStrength.short = false;
      $scope.passwordStrength.newPasswordStrengthMessage = false;
      $scope.changePasswordValidationErrors.newPasswordErrorMsg = $rootScope.messages.passwordBlank;
    } else if($scope.changePassword.password.length < 8){
      isValidationErrors = true;
      $scope.changePasswordValidationErrors.password = true;
      $scope.passwordStrength.strong = false;
      $scope.passwordStrength.short = false;
      $scope.changePasswordValidationErrors.newPasswordErrorMsg = $rootScope.messages.passwordLength;
    } else if (!ValidatorService.isValidPassword($scope.changePassword.password)) {
        isValidationErrors = true;
        $scope.changePasswordValidationErrors.password = true;
        $scope.passwordStrength.strong = false;
        $scope.passwordStrength.short = false;
        $scope.passwordStrength.newPasswordStrengthMessage = false;
        $scope.changePasswordValidationErrors.newPasswordErrorMsg = $rootScope.messages.passwordMustContains;
    }
  }

  function resetValidation() {
    $scope.changePasswordValidationErrors = {"password": false, "confirmPassword": false};
  }

  function verifyPasswordToken() {
     try {
        $scope.changePassword.token = $scope.token;
        $rootScope.loading = true;
        AuthService.verifyChangePasswordToken($scope.changePassword, function(error, json) {
          if (json && null != json) {
             $rootScope.loading = false;
             if(json === "true") {
                UtilityService.addSuccessMessage($rootScope.messages.passwordVerified);
             } else {
                UtilityService.addErrorMessage($rootScope.messages.invalidUser);
                $rootScope.resetUserSession();
                $location.path("/login");
             }
          } else {
            $rootScope.loading = false;
             UtilityService.addErrorMessage($rootScope.gerErrorMessage(error));
             $rootScope.resetUserSession();
             $location.path("/login");
          }
        });
      } catch(err) {
        console.log(err);
        $rootScope.loading = false;
      }
  }

  $scope.init();
});
