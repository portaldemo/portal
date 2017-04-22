portalApp.controller('AddTrainingCenterController', function($scope, $window, $rootScope, $location, $routeParams, 
    $http, SidebarManager, ValidatorService, TrainingCenterService, UtilityService) {
  
  $scope.init = function () { 
    $scope.errormassage = "";
    $scope.trainingCenterID = $routeParams.id;
    $scope.trainingCenter = {};
    
    if($scope.trainingCenterID) {
      getTrainingCenterDetails();
    }
    setTitles();
    
  };


  $(function(){
    
    $('#validfrom').datepicker({
        dateFormat: 'dd-mm-yy'
    });
    
});

  function setTitles() {
    if($scope.trainingCenterID) {
      $scope.update = true;
      $scope.buttonTitle = "Update";
      $scope.headerMessage = "Update Training Center";
    } else {
      $scope.update = false;
      $scope.buttonTitle = "Create";
      $scope.headerMessage = "Add Training Center";
    }
  }

  //Add or Update Training course function for form create button
  $scope.addUpdateTrainingCenter = function() {
    if(!validateForm()) {
      if($scope.trainingCenterID) {
        updateTrainingCenter();
      } else {
        addTrainingCenter();
      }
    }
  };

  function addTrainingCenter() {
  
  }

  function updateTrainingCenter() {
    
  }


  function getTrainingCenterDetails() {
    try {
      $rootScope.loading = true;
      $scope.trainingCenterDetail = {'id' : 1, 'centername' : 'Pune training center', 'stateId' : '1', 
      'city' : 'Pune', 'type' : 'Regional', 'description' : 'All Courses conducted at this training center' };
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