portalApp.controller('UpdatePasswordController', function($scope,$rootScope, SidebarManager, ValidatorService, UtilityService, $modalInstance, UserService) {
  $scope.init = function () {
    SidebarManager.setSlectedMenu($rootScope.sidebarMenus.DASHBOARD,$rootScope.sidebarSubMenus.NONE);
    $rootScope.isHeaderVisible = true;
    $scope.errormassage = "";
    $scope.updatePassword = {};
    resetValidation();
    $scope.passwordStrength ={"newPasswordStrengthMessage":false, "short": false, "strong": false};
  };
  $scope.updatePasswordClick = function() {
    if(!validateForm()) {
      try {
        $rootScope.loading = true;
        UserService.updatePassword($scope.updatePassword, function(error, json) {
          if (json == "") {
             $rootScope.loading = false;
             $modalInstance.dismiss('cancel');
             UtilityService.addSuccessMessage($rootScope.messages.updatePassword);
          } else {
            $rootScope.loading = false;
            UtilityService.addErrorMessage($rootScope.gerErrorMessage(error));
          }
        });
        console.log($scope.updatePassword);
      } catch(err) {
        console.log(err);
        $rootScope.loading = false;
      }
    }
  };

  function validateForm() {
    var isValidationErrors = false;
    resetValidation();
    if(ValidatorService.isBlankString($scope.updatePassword.oldPassword)) {
      isValidationErrors = true;
      $scope.updatePasswordValidationErrors.oldPassword = true;
      $scope.updatePasswordValidationErrors.oldPasswordErrorMsg = $rootScope.messages.passwordBlank;
    }
    if(ValidatorService.isBlankString($scope.updatePassword.newPassword)) {
      isValidationErrors = true;
      $scope.updatePasswordValidationErrors.newPassword = true;
      $scope.passwordStrength.newPasswordStrengthMessage = false;
       $scope.passwordStrength.strong = false;
      $scope.passwordStrength.short = false;
      $scope.updatePasswordValidationErrors.newPasswordErrorMsg = $rootScope.messages.passwordBlank;
    } else if($scope.updatePassword.newPassword.length < 8){
      isValidationErrors = true;
      $scope.updatePasswordValidationErrors.newPassword = true;
      $scope.passwordStrength.strong = false;
      $scope.passwordStrength.short = false;
      $scope.updatePasswordValidationErrors.newPasswordErrorMsg = $rootScope.messages.passwordLength;
    }else {
      if (!ValidatorService.isValidPassword($scope.updatePassword.newPassword)) {
        isValidationErrors = true;
        $scope.updatePasswordValidationErrors.newPassword = true;
        $scope.passwordStrength.newPasswordStrengthMessage = false;
        $scope.passwordStrength.strong = false;
        $scope.passwordStrength.short = false;
        $scope.updatePasswordValidationErrors.newPasswordErrorMsg = $rootScope.messages.passwordMustContains;
      }
    }

    if(ValidatorService.isBlankString($scope.updatePassword.confirmPassword)) {
      isValidationErrors = true;
      $scope.updatePasswordValidationErrors.confirmPassword = true;
      $scope.updatePasswordValidationErrors.confirmPasswordErrorMsg = $rootScope.messages.passwordBlank;
    }

    if(!$scope.updatePasswordValidationErrors.confirmPassword  && !$scope.updatePasswordValidationErrors.newPassword) {
      if($scope.updatePassword.newPassword  !== $scope.updatePassword.confirmPassword) {
         isValidationErrors = true;
         $scope.updatePasswordValidationErrors.confirmPassword = true;
         $scope.updatePasswordValidationErrors.confirmPasswordErrorMsg = $rootScope.messages.passwordUnMatched;
      }
    }

    return isValidationErrors;
  }

  $scope.newPasswprdChanged = function() {
    if(ValidatorService.isBlankString($scope.updatePassword.newPassword)) {
      isValidationErrors = true;
      $scope.updatePasswordValidationErrors.newPassword = true;
      $scope.passwordStrength.strong = false;
      $scope.passwordStrength.short = false;
      $scope.passwordStrength.newPasswordStrengthMessage = false;
      $scope.updatePasswordValidationErrors.newPasswordErrorMsg = $rootScope.messages.passwordBlank;
    } else if($scope.updatePassword.newPassword.length < 8){
      isValidationErrors = true;
      $scope.updatePasswordValidationErrors.newPassword = true;
       $scope.passwordStrength.strong = false;
      $scope.passwordStrength.short = false;
      $scope.updatePasswordValidationErrors.newPasswordErrorMsg = $rootScope.messages.passwordLength;
    } else if (!ValidatorService.isValidPassword($scope.updatePassword.newPassword)) {
        isValidationErrors = true;
        $scope.updatePasswordValidationErrors.newPassword = true;
        $scope.passwordStrength.strong = false;
        $scope.passwordStrength.short = false;
        $scope.passwordStrength.newPasswordStrengthMessage = false;
        $scope.updatePasswordValidationErrors.newPasswordErrorMsg = $rootScope.messages.passwordMustContains;
    }
    // else if($scope.updatePassword.newPassword.length >= 8 && $scope.updatePassword.newPassword.length < 12 ){
    //    $scope.updatePasswordValidationErrors.newPassword = false;
    //    $scope.passwordStrength.newPasswordStrengthMessage = true;
    //    $scope.passwordStrength.short = true;
    //    $scope.updatePasswordValidationErrors.newPasswordErrorMsg = $rootScope.messages.shortPassword;
    // } else if($scope.updatePassword.newPassword.length > 12 ){
    //    $scope.updatePasswordValidationErrors.newPassword = false;
    //    $scope.passwordStrength.strong = true;
    //    $scope.passwordStrength.newPasswordStrengthMessage = true;
    //    $scope.updatePasswordValidationErrors.newPasswordErrorMsg = $rootScope.messages.strongPassword;
    // }
  }

  function resetValidation() {
    $scope.updatePasswordValidationErrors = {"oldPassword": false, "newPassword": false, "confirmPassword": false};
  }

  //Close change password popup
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.init();
});