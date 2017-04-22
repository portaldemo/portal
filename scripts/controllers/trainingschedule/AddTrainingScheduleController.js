portalApp.controller('AddTrainingScheduleController', function($scope, $window, $rootScope, $location, $routeParams, 
    $http, SidebarManager, ValidatorService, TrainingScheduleService, UtilityService) {
  
  $scope.init = function () { 
    $scope.errormassage = "";
    $scope.trainingScheduleID = $routeParams.id;
    $scope.trainingSchedule = {};
    
    if($scope.trainingScheduleID) {
      getTrainingScheduleDetails();
    }
    setTitles();
    
  };


  $(function(){
    
    $('#validfrom').datepicker({
        dateFormat: 'dd-mm-yy'
    });
    
});

  function setTitles() {
    if($scope.trainingScheduleID) {
      $scope.update = true;
      $scope.buttonTitle = "Update";
      $scope.headerMessage = "Update Training Schedule";
    } else {
      $scope.update = false;
      $scope.buttonTitle = "Create";
      $scope.headerMessage = "Add Training Schedule";
    }
  }

  //Add or Update Training course function for form create button
  $scope.addUpdateTrainingCenter = function() {
    if(!validateForm()) {
      if($scope.trainingScheduleID) {
        updateTrainingSchedule();
      } else {
        addTrainingSchedule();
      }
    }
  };

  function addTrainingSchedule() {
  
  }

  function updateTrainingSchedule() {
    
  }


  function getTrainingScheduleDetails() {
    try {
      $rootScope.loading = true;
      $scope.trainingScheduleDetail = {'id' : 1, 'stateId' : 1, 'trainingCenterId' : 1, 'trainingCourseId' : 2, 
      'courseDuration' : '2', 'courseValidFrom' : '10/03/2017', 'startDate' : '22/04/2017', 'endDate' : '25/04/2017', 
      'trainerName' : 'Mr. Arun Jadhav', 'description' : 'All Courses conducted at this training center' };
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

  $scope.onlyLetters = function(event){
    ValidatorService.onlyLetters(event);
  };

  $scope.init();
});