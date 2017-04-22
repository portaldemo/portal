portalApp.controller('AddDealerController', function($scope, $window, $rootScope, $location, $routeParams, 
    $http, SidebarManager, ValidatorService, DealerService, UtilityService) {
  
  $scope.init = function () { 
    $scope.errormassage = "";
    $scope.dealerId = $routeParams.id;
    $scope.dealer = {};
    
    if($scope.dealerId) {
      getDealerDetails();
    }
    setTitles();
    
  };


  $(function(){
    
    $('#validfrom').datepicker({
        dateFormat: 'dd-mm-yy'
    });
    
});

  function setTitles() {
    if($scope.dealerId) {
      $scope.update = true;
      $scope.buttonTitle = "Update";
      $scope.headerMessage = "Update Dealer";
    } else {
      $scope.update = false;
      $scope.buttonTitle = "Create";
      $scope.headerMessage = "Add Dealer";
    }
  }

  //Add or Update dealer function for form create button
  $scope.addUpdateDealer = function() {
    if(!validateForm()) {
      if($scope.dealerId) {
        updateDealer();
      } else {
        addDealer();
      }
    }
  };

  function addDealer() {
  
  }

  function updateDealer() {
    
  }


  function getDealerDetails() {
    try {
      $rootScope.loading = true;
      $scope.dealerDetail = {'id' : 1, 'name' : 'ABC Dealer', 'code' : 'd-11232', 'stateId' :  1, 'city' : 'Pune', 
        'address' : 'S no. 32/4, Shop no. 37, ABC Dealers building, Ambegoan, Pune - 411046',
         'contactPerson' : 'Mr. Badshah', 'mobileNo' : '980865673', 'phoneNo' : '0211-545678', 'email' : 'd11232@gmail.com'};
    } catch(err) {
      $rootScope.loading = false;
    }
  }

  $scope.onlyLettersAndSomeSpecialChars = function(event) {
    ValidatorService.onlyLetters(event);
  };

  $scope.onlyNumbers = function(event){
    ValidatorService.onlyNumbers(event);
  };

  $scope.init();
});