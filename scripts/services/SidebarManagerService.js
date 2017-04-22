/**
 * Service to track a session for application.
 * $cookieStore -> to get and set values in cookies.
 * $rootScope -> to set values in root scope which used to manage the views header and sidebars.
 */
portalApp.service('SidebarManager', function($location, $cookieStore, $rootScope,$window, $location, UtilityService) {
	
 	this.setSlectedMenu = function(menu,submenu) 
 	{ 
 		$rootScope.currentSelectedMenu = menu;
 		$rootScope.currentSelectedSubMenu = submenu;
 		
 		$rootScope.removeCookie("CURRENT_SELECTED_MENU");
 		$rootScope.removeCookie("CURRENT_SELECTED_SUB_MENU");
 		
 		$rootScope.addCookie("CURRENT_SELECTED_MENU", $rootScope.currentSelectedMenu);
 		$rootScope.addCookie("CURRENT_SELECTED_SUB_MENU", $rootScope.currentSelectedSubMenu);
 	};
 	
 	this.checkSlectedMenu = function(menu,submenu) 
 	{ 
 		var selectedMenu = SessionTracker.getValue("CURRENT_SELECTED_MENU");
 		var selectedSubMenu = SessionTracker.getValue("CURRENT_SELECTED_SUB_MENU");
 		
 		if(selectedMenu != menu || selectedSubMenu != submenu )
 		{
 			$rootScope.currentSelectedMenu = menu;
 	 		$rootScope.currentSelectedSubMenu = submenu;
 	 		
 	 		SessionTracker.removeCookie("CURRENT_SELECTED_MENU");
 	 		SessionTracker.removeCookie("CURRENT_SELECTED_SUB_MENU");
 	 		
 	 		$rootScope.addCookie("CURRENT_SELECTED_MENU", $rootScope.currentSelectedMenu);
 	 		$rootScope.addCookie("CURRENT_SELECTED_SUB_MENU", $rootScope.currentSelectedSubMenu);
 		}
 		else
 		{
 			$rootScope.currentSelectedMenu = selectedMenu;
 	 		$rootScope.currentSelectedSubMenu = selectedSubMenu;
 		}
 	};

  this.isValidPreviliges = function(previlige, moduleName)
  {
    if(!previlige) {
      UtilityService.addErrorMessage("Permission denied for " + moduleName + ".");
      $location.path("/dashboard");
    }
  };


});