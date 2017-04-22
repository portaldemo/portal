portalApp.controller('EmployeeController', function($scope, $window, $rootScope, $location, $dialogs, SidebarManager, 
	DealerService, UtilityService, filterFilter) {
  
  var Init=function(){
    $scope.Employee={};
    $scope.Employees=[
      {Id:1,Name:"Jhon arrow",MobileNo:885582528,Status:"Trained",Channel:"Showroom",Designation:"Documentation"},
      {Id:2,Name:"Mark bhon",MobileNo:925582528,Status:"Un-Trained",Channel:"Showroom",Designation:"Reciptionist"},
      {Id:3,Name:"Reha suree",MobileNo:885582528,Status:"Trained",Channel:"Showroom",Designation:"DEMO Team"},
      {Id:4,Name:"Nanci bron",MobileNo:945582528,Status:"Un-Trained",Channel:"Showroom",Designation:"Documentation"},
      {Id:5,Name:"Jacab Horn",MobileNo:865582528,Status:"Un-Trained",Channel:"Showroom",Designation:"Sales Executive"},
      {Id:6,Name:"Smith kelly",MobileNo:835582528,Status:"Trained",Channel:"Showroom",Designation:"Cashir"},
    ];
  }

  Init();
});
