function LeftSidebarController($scope, $window,$rootScope, $location, SidebarManager)
{
  $scope.usersClicked = function ()
  {
    SidebarManager.setSlectedMenu($rootScope.sidebarMenus.ADMIN_USERS,$rootScope.sidebarSubMenus.NONE);
    $location.path("/users");
  };
  
  $scope.rolesClicked = function()
  {
    SidebarManager.setSlectedMenu($rootScope.sidebarMenus.ADMIN_ROLES,$rootScope.sidebarSubMenus.NONE);
    $location.path("/roles");
  };

   $scope.dashboardClicked = function()
  {
    SidebarManager.setSlectedMenu($rootScope.sidebarMenus.DASHBOARD,$rootScope.sidebarSubMenus.NONE);
    $location.path("/dashboard");
  };

  $scope.nGageDashboardClicked = function()
  {
    SidebarManager.setSlectedMenu($rootScope.sidebarMenus.NGAGEDASHBOARD,$rootScope.sidebarSubMenus.NONE);
    $location.path("/ngdashboard");
  };

  $scope.nGageReportClicked = function()
  {
    SidebarManager.setSlectedMenu($rootScope.sidebarMenus.NGAGEREPORTS,$rootScope.sidebarSubMenus.NONE);
    $location.path("/ngreports");
  };

  $scope.adtectConfigClicked = function()
  {
    SidebarManager.setSlectedMenu($rootScope.sidebarMenus.ADTECH_CONFIG,$rootScope.sidebarSubMenus.NONE);
    $location.path("/adtechconfig");
  };

   $scope.publishersClicked = function()
  {
    SidebarManager.setSlectedMenu($rootScope.sidebarMenus.ADMIN_PUBLISHERS,
    $rootScope.sidebarSubMenus.NONE);
    $location.path("/publishers");
  };

  $scope.hasoffersConfigClicked = function()
  {
    SidebarManager.setSlectedMenu($rootScope.sidebarMenus.HASOFFERS_CONFIG,$rootScope.sidebarSubMenus.NONE);
    $location.path("/hasofferconfig");
  };

  $scope.hasoffersReportsClicked = function()
  {
    SidebarManager.setSlectedMenu($rootScope.sidebarMenus.HASOFFERS_REPORTS,$rootScope.sidebarSubMenus.NONE);
    $location.path("/hasoffersreport");
  };

};