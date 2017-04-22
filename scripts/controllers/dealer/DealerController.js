
portalApp.filter('startFrom', function () {
  return function (input, start) {
    if (input) {
      start = +start;
      return input.slice(start);
    }
    return [];
  };
});


portalApp.controller('DealerController', function($scope, $window, $rootScope, $location, $dialogs, SidebarManager, 
	DealerService, UtilityService, filterFilter) {
  $scope.init = function () {

    listDealers();
  };

  /**
   * Controls the Delete the dealer functionality.
   */
  $scope.deleteDealer = function(dealer) {
    
  };

  /**
   * Controls the Activate the dealer functionality.
   */
  $scope.ActivateDealer = function(dealer) {   
  
  };

   /**
   * Controls the deactivate the dealer functionality.
   */
  $scope.deactivateDealer = function(dealer) {
     
  };


  function listDealers() {

    $rootScope.loading = true;
    var jsonDealers = [
        {'id' : 1, 'name' : 'ABC Dealer', 'code' : 'd-11232', 'state' : {'id' : 1, 'name' : 'Maharashtra'}, 'city' : 'Pune', 
         'contactPerson' : 'Mr. Badshah', 'mobileNo' : '9808656732', 'phoneNo' : '0211-545678', 'email' : 'd11232@gmail.com'},
        {'id' : 2, 'name' : 'XYZ Dealer', 'code' : 'd-21345', 'state' : {'id' : 2, 'name' : 'Karnataka'}, 'city' : 'Banglore', 
         'contactPerson' : 'Mr. N. Rakesh', 'mobileNo' : '9108673234', 'phoneNo' : '0211-545678', 'email' : 'd21345@gmail.com'},
         {'id' : 3, 'name' : 'M/S PQR Dealer', 'code' : 'd-10876', 'state' : {'id' : 3, 'name' : 'Punjab'}, 'city' : 'Chandigadh', 
         'contactPerson' : 'Mr. SArtaj Singh', 'mobileNo' : '9808656732', 'phoneNo' : '0211-545678', 'email' : 'd10876@gmail.com'},
         {'id' : 4, 'name' : 'M/S LMN Dealer', 'code' : 'd-11256', 'state' : {'id' : 1, 'name' : 'Maharashtra'}, 'city' : 'Mumbai', 
         'contactPerson' : 'Mr. Vijay Patole', 'mobileNo' : '9808656732', 'phoneNo' : '0211-545678', 'email' : 'd11256@gmail.com'},
         {'id' : 5, 'name' : 'M/S RTS Dealer', 'code' : 'd-21678', 'state' : {'id' : 4, 'name' : 'Tamilnadu'}, 'city' : 'Chennai', 
         'contactPerson' : 'Mr. VVS Raju', 'mobileNo' : '9808656732', 'phoneNo' : '0211-545678', 'email' : 'd21678@gmail.com'},
         {'id' : 6, 'name' : 'M/S ZQR Dealer', 'code' : 'd-18765', 'state' : {'id' : 5, 'name' : 'Gujrat'}, 'city' : 'Surat', 
         'contactPerson' : 'Mr. Satish Patel', 'mobileNo' : '9808656732', 'phoneNo' : '0211-545678', 'email' : 'd18765@gmail.com'}             
       ];
    $rootScope.loading = false;
    $scope.dealers = jsonDealers;
    $scope.totalItems = $scope.dealers.length;
  }

  // pagination controls
  $scope.currentPage = 1;
  $scope.entryLimit = 10; //
  $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);

  $scope.init();
});
