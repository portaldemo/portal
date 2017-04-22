portalApp.controller('ForgotPasswordController', function($scope, $window, $rootScope, $location, ValidatorService, AuthService, UtilityService) {
  $rootScope.isHeaderVisible = false;
  $scope.init = function () {
    $scope.errormassage = "";
    $scope.forgotpassword = {};

  };

  // Function forgotPassword called on click on forgotPassword button
  $scope.forgotPassword = function()
  {
    if(!validateForm()) {
      try {
        $rootScope.loading = true;
        AuthService.forgotPassword($scope.forgotpassword, function(error, json) {
          if (json == "") {
            $rootScope.loading = false
            UtilityService.addSuccessMessage($rootScope.messages.passwordLinkSent);
            $scope.swapScreen('login');
          } else {
            $rootScope.loading = false;
            UtilityService.addErrorMessage($rootScope.gerErrorMessage(error));
          }
        });
      } catch(err) {
        $rootScope.loading = false;
      }
    }
  };

  function validateForm() {
    var isValidationErrors = false;
    resetValidation();
    // Validation email
    if(ValidatorService.isBlankString($scope.forgotpassword.emailId)  ) {
        $scope.forgotpasswordValidationErrors.email = true;
        isValidationErrors = true;
        $scope.forgotpasswordValidationErrors.emailErrorMsg = $rootScope.messages.emailBlank;
    } else {
      if(!ValidatorService.isEmailAddress($scope.forgotpassword.emailId)){
        $scope.forgotpasswordValidationErrors.email = true;
        isValidationErrors = true;
        $scope.forgotpasswordValidationErrors.emailErrorMsg = $rootScope.messages.emailInvalid;
      }
    }
    return isValidationErrors;
  }

  function resetValidation() {
    $scope.forgotpasswordValidationErrors = {"email": false};
  }

  $scope.init();
});