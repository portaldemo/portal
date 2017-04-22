portalApp.filter('startFrom', function () {
  return function (input, start) {
    if (input) {
      start = +start;
      return input.slice(start);
    }
    return [];
  };
});

portalApp.controller('DashboardController', function($scope, $window, $rootScope, SidebarManager) {
  
  $rootScope.isHeaderVisible = true;
  
  $scope.init = function () {
    $scope.errormassage = "";

    $rootScope.loading = true;
    listUpcomingTrainingSchedules();
    trainedUntrainedStatusGraph();
    $rootScope.loading = false;
  };


  function trainedUntrainedStatusGraph() {

  	
  }

  function listUpcomingTrainingSchedules() {

    
    var jsonTrainingSchedules = [
      {'id' : 1, 'trainingCenter' : 'Pune training center', 'trainingCourse' : 'MotorCycle Basic', 
      'courseDuration' : '2', 'courseValidFrom' : '10/03/2017', 'startDate' : '22/04/2017', 'endDate' : '25/04/2017', 
      'trainerName' : 'Mr. Arun Jadhav', 'description' : 'All Courses conducted at this training center', 'status' : 'ACTIVE' },
      {'id' : 2, 'trainingCenter' : 'Banglore training center', 'trainingCourse' : 'Engine Basic', 
      'courseDuration' : '2', 'courseValidFrom' : '10/03/2017', 'startDate' : '22/04/2017', 'endDate' : '25/04/2017', 
      'trainerName' : 'Mr. N Nagarajan', 'description' : 'All Courses conducted at this training center', 'status' : 'ACTIVE' },
      {'id' : 3, 'trainingCenter' : 'Nashik training center', 'trainingCourse' : 'Ecetrical Engine Experts', 
      'courseDuration' : '2', 'courseValidFrom' : '10/03/2017', 'startDate' : '22/04/2017', 'endDate' : '25/04/2017', 
      'trainerName' : 'Mr. Varun Chavhan', 'description' : 'All Courses conducted at this training center', 'status' : 'ACTIVE' },
      {'id' : 4, 'trainingCenter' : 'Kolhapur training center', 'trainingCourse' : 'Spare Part Repairing', 
      'courseDuration' : '2', 'courseValidFrom' : '10/03/2017', 'startDate' : '22/04/2017', 'endDate' : '25/04/2017', 
      'trainerName' : 'Mr. Arun Jadhav', 'description' : 'All Courses conducted at this training center', 'status' : 'INACTIVE' },
      {'id' : 5, 'trainingCenter' : 'Manglore training center', 'trainingCourse' : 'Spare Part Repairing', 
      'courseDuration' : '2', 'courseValidFrom' : '10/03/2017', 'startDate' : '22/04/2017', 'endDate' : '25/04/2017', 
      'trainerName' : 'Mr. A Satish', 'description' : 'All Courses conducted at this training center', 'status' : 'ACTIVE' }
    ];

    $scope.trainingSchedules = jsonTrainingSchedules;
    $scope.totalItems = $scope.trainingSchedules.length;
  }

// pagination controls
  $scope.currentPage = 1;
  $scope.entryLimit = 5; // training courses per page
  $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);

  // $watch search to update pagination
  $scope.$watch('searchTrainingSchedule', function (newVal, oldVal) {
    try {
      $scope.filtered = filterFilter($scope.trainingSchedules, newVal);
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