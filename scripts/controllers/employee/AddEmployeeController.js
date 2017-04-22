portalApp.controller('AddEmployeeController', function($scope, $window, $rootScope, $location, $routeParams, 
    $http, SidebarManager, ValidatorService, DealerService, UtilityService) {
  
  
  $scope.init = function () { 
    $scope.errormassage = "";
    $scope.employeeId = $routeParams.id;
    $scope.dealer = {};
    
    if($scope.employeeId) {
      getEmployeeDetails();
    }
    setTitles();
    
  };


  $(function(){
    
    $('#dateofbirth').datepicker({
        dateFormat: 'dd-mm-yy'
    });
    $('#dateofjoining').datepicker({
        dateFormat: 'dd-mm-yy'
    });
    
});

  function setTitles() {
    
    if($scope.employeeId) {
      $scope.update = true;
     $scope.AddEditEmployeeLabel="Update Employee";
    $scope.AddEditEmpbuttonTitle="Update";
    } else {
      $scope.update = false;
     $scope.AddEditEmployeeLabel="Add Employee";
    $scope.AddEditEmpbuttonTitle="Add";
    }
  }

  //Add or Update dealer function for form create button
  $scope.addUpdateDealer = function() {
    if(!validateForm()) {
      if($scope.dealerId) {
        updateDealer();
      } else {
        addDealer();
      }
    }
  };

  function addDealer() {
  
  }

  function updateDealer() {
    
  }


  function getEmployeeDetails() {
    try {
      $rootScope.loading = true;
      $scope.employeeDetail = {'Id' : 1, 'FirstName' : 'Jennye', 'MiddleName' : 'logeer', 'LastName' :  'samsungs', 
      'DateofBirth' : '05/02/1993', 'DesignationId' : 1,
         'ProductHandledId' : 1, 'QulificationId' : 1, 'WorkingCellId' : 1, 'DateofJoining' : '02/11/2016',
         'ExprienceId':1,'MobileNo':"2661616465",'Remarks':'Is good at Working Cell'};
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

  $scope.init();
  });