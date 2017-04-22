portalApp.controller('TrainingCenterDetailsController', function($scope, $window, $rootScope, $location, $routeParams, $dialogs, SidebarManager, 
                                                        TrainingCenterService, UtilityService) {
  
  $rootScope.isHeaderVisible = true;

  $scope.init = function () {
    $scope.errormassage = "";
    $scope.trainingCenterId = $routeParams.id;
    getTrainingCenterDetails(); 
  };

 /**
   * Controls the Delete the training course functionality.
   */
  $scope.deleteTrainingCenter = function(trainingcenter) {
    
  };

   /**
   * Controls the Active deactive the training course functionality.
   */
  $scope.activateTrainingCenter = function(trainingcenter) {
     
  };

   /**
   * Controls the deactive the training course functionality.
   */
  $scope.deactivateTrainingCenter = function(trainingcenter) {
   
  };

  function getTrainingCenterDetails() {
    try {
      $rootScope.loading = true;
      $scope.trainingCenterDetail = {'id' : 1, 'centername' : 'Pune training center', 'state' : {'id' : 1, 'name' : 'MAHARASHTRA'}, 
      'city' : 'Pune', 'type' : 'Regional', 'description' : 'All Courses conducted at this training center',
      'conductedTrainingCourses' : 'Motorcycle Basic, Diesel Electrical Basic, Engine Experts, Spare Parts Training' };
    } catch(err) {
      $rootScope.loading = false;
    }
  }

  $scope.init();

});