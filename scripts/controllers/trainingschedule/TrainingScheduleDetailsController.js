portalApp.controller('TrainingScheduleDetailsController', function($scope, $window, $rootScope, $location, $routeParams, $dialogs, SidebarManager, 
                                                        TrainingScheduleService, UtilityService) {
  
  $rootScope.isHeaderVisible = true;

  $scope.init = function () {
    $scope.errormassage = "";
    $scope.trainingScheduleId = $routeParams.id;
    getTrainingScheduleDetails(); 
  };

 /**
   * Controls the Delete the training schedule functionality.
   */
  $scope.deleteTrainingSchedule = function(trainingschedule) {
    
  };

   /**
   * Controls the Active deactive the training schedule functionality.
   */
  $scope.activateTrainingSchedule = function(trainingschedule) {
     
  };

   /**
   * Controls the deactive the training schedule functionality.
   */
  $scope.deactivateTrainingSchedule = function(trainingschedule) {
   
  };

  function getTrainingScheduleDetails() {
    try {
      $rootScope.loading = true;
      $scope.trainingScheduleDetail = {'id' : 1, 'trainingCenter' : 'Pune training center', 'trainingCourse' : 'MotorCycle Basic', 
      'courseDuration' : '2', 'courseValidFrom' : '10/03/2017', 'startDate' : '22/04/2017', 'endDate' : '25/04/2017', 
      'trainerName' : 'Mr. Arun Jadhav', 'description' : 'All Courses conducted at this training center' };
    } catch(err) {
      $rootScope.loading = false;
    }
  }

  $scope.init();

});