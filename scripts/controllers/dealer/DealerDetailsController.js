portalApp.controller('DealerDetailsController', function($scope, $window, $rootScope, $location, $routeParams, $dialogs, SidebarManager, 
                                                        DealerService, UtilityService) {
  
  $rootScope.isHeaderVisible = true;

  $scope.init = function () {
    $scope.errormassage = "";
    $scope.dealerId = $routeParams.id;
    getDealerDetails(); 
  };

 /**
   * Controls the Delete the dealer functionality.
   */
  $scope.deleteDealer = function(dealer) {
    
  };

   /**
   * Controls the Active deactive the dealer functionality.
   */
  $scope.activateDealer = function(dealer) {
     
  };

   /**
   * Controls the deactive the dealer functionality.
   */
  $scope.deactivateDealer = function(dealer) {
   
  };

  function getDealerDetails() {
    try {
      $rootScope.loading = true;
      $scope.dealerDetail = {'id' : 1, 'name' : 'ABC Dealer', 'code' : 'd-11232', 'state' : {'id' : 1, 'name' : 'Maharashtra'}, 'city' : 'Pune', 
         'address' : 'S no. 32/4, Shop no. 37, Ambegoan, Pune - 411046', 'status' : 'ACTIVE', 'pincode' : '411046',
         'contactPerson' : 'Mr. Badshah', 'mobileNo' : '9808656732', 'phoneNo' : '0211-545678', 'email' : 'd11232@gmail.com'};
    } catch(err) {
      $rootScope.loading = false;
    }
  }

  $scope.init();

});