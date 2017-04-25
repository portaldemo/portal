portalApp.controller('AddProductController', function($scope, $window, $rootScope, $location, $routeParams,
  $http, SidebarManager, ValidatorService, RoleService, UserService, UtilityService) {

  $scope.init = function () {
    $scope.errormassage = "";
    $scope.productId = $routeParams.id;
    $scope.product = {};

    if($scope.productId) {
      getProductDetails();
    }

    setTitles();

  };

  function setTitles() {
    if($scope.productId) {
      $scope.update = true;
      $scope.buttonTitle = "Update";
      $scope.headerMessage = "Update Product";
    } else {
      $scope.update = false;
      $scope.buttonTitle = "Create";
      $scope.headerMessage = "Add Product";
    }
  }

  //Add user function for form create button
  $scope.addUpdateProduct = function() {
    if(!validateForm()) {

      if($scope.productId) {
        updateProduct();
      } else {
        addProduct();
      }
    }
  };

  function addProduct() {

  }

  function updateProduct() {

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


  function getProductDetails() {
    try {
      $rootScope.loading = true;
      $scope.product = {'id' : 1, 'productname' : '2W', 'description' : 'Two wheeler product', 'status' : 'ACTIVE'};
    } catch(err) {
      $rootScope.loading = false;
    }
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
