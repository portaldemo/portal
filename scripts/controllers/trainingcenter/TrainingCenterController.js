portalApp.filter('startFrom', function () {
  return function (input, start) {
    if (input) {
      start = +start;
      return input.slice(start);
    }
    return [];
  };
});

portalApp.controller('TrainingCenterController', function($scope, $window, $rootScope, $location, $dialogs, SidebarManager, TrainingCenterService, UtilityService, filterFilter) {
  $scope.init = function () {

    listTrainingCenters();
  };

  /**
   * Controls the Delete the training course functionality.
   */
  $scope.deleteTrainingCenter = function(trainingcenter) {
    
  };

  /**
   * Controls the Activate the training course functionality.
   */
  $scope.ActivateTrainingCenter = function(trainingcenter) {   
  
  };

   /**
   * Controls the deactivate the training course functionality.
   */
  $scope.deactivateTrainingCenter = function(trainingcenter) {
     
  };


  function listTrainingCenters() {

    $rootScope.loading = true;
    var jsonTrainingCenters = [
      {'id' : 1, 'centername' : 'Pune training center', 'state' : {'id' : 1, 'name' : 'Mahahrashtra'}, 'city' : 'Pune', 'status' : 'ACTIVE' },
      {'id' : 2, 'centername' : 'Banglore training center', 'state' : {'id' : 2, 'name' : 'Karnataka'}, 'city' : 'Banglore', 'status' : 'ACTIVE' },
      {'id' : 3, 'centername' : 'Mumbai training center', 'state' : {'id' : 1, 'name' : 'Mahahrashtra'}, 'city' : 'Mumbai', 'status' : 'INACTIVE'  },
      {'id' : 4, 'centername' : 'Kolhapur training center', 'state' : {'id' : 1, 'name' : 'Mahahrashtra'}, 'city' : 'Kolhapur', 'status' : 'ACTIVE'  },
      {'id' : 5, 'centername' : 'Manglore training center', 'state' : {'id' : 2, 'name' : 'Karnataka'}, 'city' : 'Manglore', 'status' : 'ACTIVE'  },
      {'id' : 6, 'centername' : 'Shivamogga training center', 'state' : {'id' : 2, 'name' : 'Karnataka'}, 'city' : 'Shivamogga', 'status' : 'INACTIVE'  },  
      {'id' : 7, 'centername' : 'Solapur training center', 'state' : {'id' : 1, 'name' : 'Mahahrashtra'}, 'city' : 'Solapur', 'status' : 'ACTIVE'  },  
      {'id' : 8, 'centername' : 'Nashik training center', 'state' : {'id' : 1, 'name' : 'Mahahrashtra'}, 'city' : 'Nashik' , 'status' : 'INACTIVE' },  
      {'id' : 9, 'centername' : 'Tumakuru training center', 'state' : {'id' : 2, 'name' : 'Karnataka'}, 'city' : 'Tumakuru', 'status' : 'ACTIVE'  },  
      {'id' : 10, 'centername' : 'Thane training center', 'state' : {'id' : 1, 'name' : 'Mahahrashtra'}, 'city' : 'Thane' , 'status' : 'ACTIVE' },  
    ];
    $rootScope.loading = false;
    $scope.trainingcenters = jsonTrainingCenters;
    $scope.totalItems = $scope.trainingcenters.length;
  }

  // pagination controls
  $scope.currentPage = 1;
  $scope.entryLimit = 7; // training courses per page
  $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);

  // $watch search to update pagination
  $scope.$watch('searchTrainingCourse', function (newVal, oldVal) {
    try {
      $scope.filtered = filterFilter($scope.trainingcenters, newVal);
      $scope.totalItems = $scope.filtered.length;
      $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
      $scope.currentPage = 1;
    }
    catch(err) {
      $rootScope.loading = false;
    }
  }, true);

  $scope.init();
});