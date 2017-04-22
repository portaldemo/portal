/**
 * Service to track a session for application.
 * $cookieStore -> to get and set values in cookies.
 * $rootScope -> to set values in root scope which used to manage the views header and sidebars.
 */
portalApp.service('SessionTracker', function($location, $cookieStore, $rootScope,$window, $http, $interval) {
	
	/**
	 * Sets the required values in $rootScope.
	 */
	this.setRequiredRootScopeValues = function() 
 	{ 
		$rootScope.visible = true;
		$rootScope.accountType = this.getValue("NZ_ACCOUNT_TYPE");
		$rootScope.userFirstName = this.getValue("NZ_USER_FIRST_NAME");
		
		$rootScope.currentSelectedMenu = this.getValue("CURRENT_SELECTED_MENU");
 		$rootScope.currentSelectedSubMenu = this.getValue("CURRENT_SELECTED_SUB_MENU");
		
 	};
	
 	/**
 	 * Adds value in cookie for given key.
 	 */
 	this.addValue = function(key, value) 
 	{ 
 		$cookieStore.put(key, value);
 	};
 
 	/**
 	 * Adds value in cookie for given key.
 	 */
 	this.removeValue = function(key) 
 	{ 
 		$cookieStore.remove(key);
 	};
 	
 	/**
 	 * Gives value from cookies for specified key.
 	 */
    this.getValue = function(key) 
    {
    	return $cookieStore.get(key);
    };
     
    /**
     * Validate user session.
     */
    this.isSessionValid = function() 
    { 
    	if($cookieStore.get("NZ_ACCOUNT_TYPE") == '' || $cookieStore.get("NZ_ACCOUNT_TYPE") == null || $cookieStore.get("NZ_ACCOUNT_TYPE") == 'undefined'
    	  || $cookieStore.get("NZ_ACCESS_TOKEN") == '' || $cookieStore.get("NZ_ACCESS_TOKEN") == null || $cookieStore.get("NZ_ACCESS_TOKEN") == 'undefined'
    	  || $cookieStore.get("NZ_USER_NAME") == '' || $cookieStore.get("NZ_USER_NAME") == null || $cookieStore.get("NZ_USER_NAME") == 'undefined'
    	  || $cookieStore.get("NZ_USER_ID") == '' || $cookieStore.get("NZ_USER_ID") == null || $cookieStore.get("NZ_USER_ID") == 'undefined'
    	  || $cookieStore.get("NZ_USER_FIRST_NAME") == '' || $cookieStore.get("NZ_USER_FIRST_NAME") == null || $cookieStore.get("NZ_USER_FIRST_NAME") == 'undefined'){
    		this.clearCookies();
    		return false;
		} else {
    		this.setRequiredRootScopeValues();
    		return true;
    	}
    };
    
    /**
     * Validate user session.
     */
    this.validateURL = function(token) 
    { 
    	if($rootScope.accountType == 'Premium')
    	{
    	  if($rootScope.adminUrls.indexOf(token) >= 0)
   		  {
    		  $location.path("/dashboard");
   		  }
    	}
    	else
    	{
    		if($rootScope.adminUrls.indexOf(token) < 0)
     		{
    			$location.path("/admindashboard");
     		}
    	}
    };
    
    
    /**
 	 * Clears values from cookies.
 	 */
    this.clearCookies = function() 
    { 
    	$cookieStore.remove("NZ_ACCOUNT_TYPE");
    	$cookieStore.remove("NZ_ACCESS_TOKEN");
    	$cookieStore.remove("NZ_USER_NAME");
    	$cookieStore.remove("NZ_USER_ID");
    	$cookieStore.remove("CURRENT_SELECTED_MENU");
    	$cookieStore.remove("CURRENT_SELECTED_SUB_MENU");
    	$cookieStore.remove("NZ_USER_FIRST_NAME");
    	$rootScope.visible = false;
  		$rootScope.accountType = null;
  		$rootScope.currentSelectedMenu = 0;
  		$rootScope.currentSelectedSubMenu = 0; 
  		$rootScope.userFirstName = '';
		
		if(null != $rootScope.servicesCountPoller)
		{
			$interval.cancel($rootScope.servicesCountPoller); 
			$rootScope.servicesCountPoller = null;
		}
		
		if(null != $rootScope.notificationPollar)
		{
			$interval.cancel($rootScope.notificationPollar); 
			$rootScope.notificationPollar = null;
		}
    };
    
 	/**
 	 * Adds value in cookie for given key.
 	 */
 	this.logoutUser = function() 
 	{ 
 	// Validating session.
		if(this.isSessionValid())
		{
			// Manipulating URL.
			var baseUrl = $window.location.protocol + "//" + $window.location.hostname;
			
			if($window.location.port != '' && $window.location.port !='undefined' && $window.location.port != null )
			{
				baseUrl = baseUrl +":" + $window.location.port;
			}
			
			var url = baseUrl + $rootScope.apiUrls.logout; 
			
			// Input json for logout API
			var logoutData = "{'logout':{'token':'" + this.getValue("CL_ACCESS_TOKEN") + "'}}";
			
			delete $http.defaults.headers.common['X-Requested-With'];
			
			// Rest Call to logout
			$http({
			    url: url,
			    method: 'POST',
			    data: logoutData 
			}).success(function(data, status) {
				 console.log('logged out successfully');
				 $window.location.href = baseUrl +"/cl/index.html";
			}).error(function(data, status) {
			    console.log('failed');
			    $window.location.href = baseUrl +"/cl/index.html";
			}); 
			
			this.clearCookies();
		}
 	};
	 
});