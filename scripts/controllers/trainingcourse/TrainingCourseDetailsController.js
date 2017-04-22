portalApp.controller('TrainingCourseDetailsController', function($scope, $window, $rootScope, $location, $routeParams, $dialogs, SidebarManager, 
                                                        TrainingCourseService, UtilityService) {
  
  $rootScope.isHeaderVisible = true;

  $scope.init = function () {
    $scope.errormassage = "";
    $scope.trainingCourseId = $routeParams.id;
    getTrainingCourseDetails(); 
  };

 /**
   * Controls the Delete the training course functionality.
   */
  $scope.deleteTrainingCourse = function(trainingcourse) {
    
  };

   /**
   * Controls the Active deactive the training course functionality.
   */
  $scope.activateTrainingCourse = function(trainingcourse) {
     
  };

   /**
   * Controls the deactive the training course functionality.
   */
  $scope.deactivateTrainingCourse = function(trainingcourse) {
   
  };

  function getTrainingCourseDetails() {
    try {
      $rootScope.loading = true;
      $scope.trainingCourseDetail = {'id' : 1, 'coursename' : 'Engine Experts', 'duration' : '2', 'type' : 'Field', 
        'validfrom' : '01/04/2017', 'qualification' : 'Diploma, Graduation', 'description' : 'Engine Expert for all products and vehicles',
                      'requiredTrainingCourses' : 'MotorCycle Basic'};
    } catch(err) {
      $rootScope.loading = false;
    }
  }

  $scope.init();

});