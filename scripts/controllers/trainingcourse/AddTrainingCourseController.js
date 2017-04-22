portalApp.controller('AddTrainingCourseController', function($scope, $window, $rootScope, $location, $routeParams, 
    $http, SidebarManager, ValidatorService, TrainingCourseService, UtilityService) {
  
  $scope.init = function () { 
    $scope.errormassage = "";
    $scope.trainingCourseId = $routeParams.id;
    $scope.trainingCourse = {};
    
    if($scope.trainingCourseId) {
      getTrainingCourseDetails();
    }
    setTitles();
    
  };


  $(function(){
    
    $('#validfrom').datepicker({
        dateFormat: 'dd-mm-yy'
    });
    
});

  function setTitles() {
    if($scope.trainingCourseId) {
      $scope.update = true;
      $scope.buttonTitle = "Update";
      $scope.headerMessage = "Update Training Course";
    } else {
      $scope.update = false;
      $scope.buttonTitle = "Create";
      $scope.headerMessage = "Add Training Course";
    }
  }

  //Add or Update Training course function for form create button
  $scope.addUpdateTrainingCourse = function() {
    if(!validateForm()) {
      if($scope.trainingCourseId) {
        updateTrainingCourse();
      } else {
        addTrainingCourse();
      }
    }
  };

  function addTrainingCourse() {
  
  }

  function updateTrainingCourse() {
    
  }


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