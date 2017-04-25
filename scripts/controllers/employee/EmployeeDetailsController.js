portalApp.controller('EmployeeDetailsController', function($scope, $window, $rootScope, $location, $dialogs, SidebarManager,
	DealerService, UtilityService, filterFilter) {

  var Init=function(){
    $scope.Employee={'Id' : 1, 'EmployeeName' : 'Jennye logeer samsungs', 'EmployeeCode' : '10001-Tech-001',
		'DateofBirth' : '05/02/1993', 'Designation' : 'TL', 'ProductHandled' : 'Abc', 'Qulification' : 'BE',
		'DateofJoining' : '02/11/2016', 'Exprience':'1 year','MobileNo':"2661616465"};

  }

  Init();
});
