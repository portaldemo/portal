portalApp.filter('startFrom', function () {
  return function (input, start) {
    if (input) {
      start = +start;
      return input.slice(start);
    }
    return [];
  };
});

portalApp.controller('TrainingCourseController', function($scope, $window, $rootScope, $location, $dialogs, SidebarManager, TrainingCourseService, UtilityService, filterFilter) {
  $scope.init = function () {

    listTrainingCourses();
  };

  /**
   * Controls the Delete the training course functionality.
   */
  $scope.deleteTrainingCourse = function(trainingcourse) {
    
  };

  /**
   * Controls the Activate the training course functionality.
   */
  $scope.ActivateTrainingCourse = function(trainingcourse) {   
  
  };

   /**
   * Controls the deactivate the training course functionality.
   */
  $scope.deactivateTrainingCourse = function(trainingcourse) {
     
  };


  function listTrainingCourses() {

    $rootScope.loading = true;
    var jsonTrainingCourses = [
                    {'id' : 1, 'coursename' : 'Engine Experts', 'duration' : '2 Days', 'type' : 'Field', 
        'validfrom' : '01/04/2017', 'qualification' : 'ITI, Diploma, Graduation', 'description' : 'Engine Expert for all products and vehicles',
                      'requiredTrainingCourses' : 'MotorCycle Basic'},
                    {'id' : 2, 'coursename' : 'Electrical Refresher Diesel', 'duration' : '4 Days', 'type' : 'Field', 
                      'validfrom' : '04/03/2017', 'qualification' : 'Diploma, Graduation', 'description' : 'Electrical Refresher Diesel for all products and vehicles',
                      'requiredTrainingCourses' : 'N/A'},
                    {'id' : 3, 'coursename' : 'MotorCycle Basic', 'duration' : '3 Days', 'type' : 'Field', 
                      'validfrom' : '01/02/2017', 'qualification' : 'SSC, HSC, Diploma', 'description' : 'MotorCycle biasic knowledge of all products and vehicles',
                      'requiredTrainingCourses' : 'N/A'},  
                    ];
    $rootScope.loading = false;
    $scope.trainingcourses = jsonTrainingCourses;
    $scope.totalItems = $scope.trainingcourses.length;
  }

  // pagination controls
  $scope.currentPage = 1;
  $scope.entryLimit = 5; // training courses per page
  $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);

  // $watch search to update pagination
  $scope.$watch('searchTrainingCourse', function (newVal, oldVal) {
    try {
      $scope.filtered = filterFilter($scope.trainingcourses, newVal);
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