portalApp.controller('EmployeeDetailsController', function($scope, $window, $rootScope, $location, $dialogs, SidebarManager, 
	DealerService, UtilityService, filterFilter) {
  
  var Init=function(){
    $scope.Employee={'Id' : 1, 'FirstName' : 'Jennye', 'MiddleName' : 'logeer', 'LastName' :  'samsungs', 
      'DateofBirth' : '05/02/1993', 'Designation' : 'TL',
         'ProductHandled' : 'Abc', 'Qulification' : 'BE', 'WorkingCell' : 'A', 'DateofJoining' : '02/11/2016',
         'Exprience':'1 year','MobileNo':"2661616465",'Remarks':'Is good at Working Cell'};;
    
  }

  Init();
});
