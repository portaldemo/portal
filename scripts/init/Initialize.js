portalApp.run(['$rootScope', '$cookieStore', '$window', "$interval", "$location", "UtilityService", function($rootScope, $cookieStore, $window, $interval, $location, UtilityService) {
    $rootScope.loading = false;
    $rootScope.disabledBG = false;
    $rootScope.isHeaderVisible = false;

    $rootScope.environment = "dev";


    //$rootScope.baseUrl =  "http://192.168.100.53:8888"
    $rootScope.baseUrl =  "http://localhost:8888"

    $rootScope.isLeftMenuRequired = false;
    $rootScope.isNavbarRequired = false;
    
    $rootScope.emailId = 'admin@portal.com'
    $rootScope.password = 'Admin@123'

    $rootScope.apiUrls = {
        "login":"/Automation/auth/login",
        "logout":"/Automation/user/logout",
        "users":"/Automation/user",
        "addUser":"/Automation/user/add",
        "updateUser":"/Automation/user/update",
        "activateUser":"/Automation/user/activate",
        "deactivateUser":"/Automation/user/deactivate",
        "deleteUser":"/Automation/user",
        "roles":"/Automation/role",
        "addRole":"/Automation/user/add",
        "changePassword":"/Automation/auth/createpassword",
        "verifyPasswordToken":"/Automation/auth/verifytoken",
        "forgotPassword":"/Automation/auth/forgotpassword",
        "updatePassword":"/Automation/user/changepassword"     
    };

    $rootScope.routingUrls = {};

    $rootScope.handleAJAXResponseError = function(status, error, callbackFn) {
        $rootScope.loading = false;
        if(status == 401) {
          UtilityService.addErrorMessage("Your session has timed out. Please login again.");
          $rootScope.resetUserSession();
          $window.location.href = "#login";
        } else {
            callbackFn(error, null);
        }
    };

    $rootScope.initUserSession = function(json) {
       $rootScope.addCookie("USER_ID", json.userId);
       $rootScope.addCookie("USER_NAME", json.firstName+' '+json.lastName);
       $rootScope.addCookie("USER_EMAIL", json.emailId);
       $rootScope.addCookie("USER_ACCESS_TOKEN", json.authUser.token);
       $rootScope.addCookie("LOGGED_IN", "Y");
    };

    $rootScope.resetUserSession = function(){
      $rootScope.removeCookie("USER_ID");
      $rootScope.removeCookie("USER_NAME");
      $rootScope.removeCookie("USER_EMAIL");
      $rootScope.removeCookie("USER_ACCESS_TOKEN");
      $rootScope.removeCookie("LOGGED_IN");
      $rootScope.removeCookie("CURRENT_SELECTED_MENU");
      $rootScope.removeCookie("CURRENT_SELECTED_SUB_MENU");
    };

    $rootScope.getUserAccessToken = function() {
      return $rootScope.USER_ACCESS_TOKEN || $rootScope.getCookie("USER_ACCESS_TOKEN");
    };

    $rootScope.getUserID = function() {
      return $rootScope.USER_ID || $rootScope.getCookie("USER_ID");
    };

    $rootScope.getUserName = function() {
      return $rootScope.USER_NAME || $rootScope.getCookie("USER_NAME");
    };

    $rootScope.getUserEmailId = function() {
      return $rootScope.USER_EMAIL || $rootScope.getCookie("USER_EMAIL");
    };

    $rootScope.getLoggedIn = function() {
      return $rootScope.LOGGED_IN || $rootScope.getCookie("LOGGED_IN");
    };

    $rootScope.getPreviligies = function() {
      return $rootScope.getCookie("PREVILIGES");
    };

    $rootScope.addCookie = function(key, value) {
      $cookieStore.put(key, value);
      $rootScope[key] = value;
    };

    $rootScope.removeCookie = function(key) {
      $cookieStore.remove(key);
      $rootScope[key] = null;
    };

    $rootScope.getCookie = function(key) {
      return $cookieStore.get(key);
    };

    $rootScope.isUserLoggedIn = function() {
      return ($rootScope.getLoggedIn() == 'Y');
    };

    $rootScope.doLogout = function() {
      $rootScope.resetUserSession();
      $window.location.href = "#/login";
    };

    $rootScope.isHeaderRequired = function(isHeaderRequired) {
      $rootScope.isHeaderVisible = isHeaderRequired;
      $window.scrollTo(0,0);
    };

    $rootScope.isLeftMenuRequired = function(isLeftMenuRequired) {
      $rootScope.isLeftMenuVisible = isLeftMenuRequired;
    };

    $rootScope.isNavbarRequired = function(isNavbarRequired) {
      $rootScope.isNavbarRequired = isNavbarRequired;
    };

    $rootScope.getBaseUrl = function() {
        return $rootScope.baseUrl;
    }

    $rootScope.gerErrorMessage = function(error) {
     var message = "Something went wrong on server.";
     if(error && error.error_message && null != error && null != error.error_message) {
       message = error.error_message;
     }

     return message;
    };

    $rootScope.isDashboardVisible = function() {
        return true;      
    }

  /**
    Executes for every url change.
  **/
   /*$rootScope.$on('$routeChangeStart', function(event, next, current) {
      try {
        // Checking token
        if(null != next) {
          // checking if route is available for url.
          if(null != next.$$route) {
            // URLS which do not need authentication.
            if(next.$$route.originalPath == "/login" || next.$$route.originalPath == "/createpassword/:token" || next.$$route.originalPath == "/changepassword/:token") {
              // Hiding header and left menu.
              $rootScope.isHeaderRequired(false);
              $rootScope.isLeftMenuRequired(false);
            }
            else {
              // Urls which need to verify session.
              if($rootScope.isUserLoggedIn()) {
               // Showing header.
               $rootScope.isHeaderRequired(true);
               $rootScope.isLeftMenuRequired(true);
              } else {
                // If session is not available.
                $rootScope.isHeaderRequired(false);
                $rootScope.isLeftMenuRequired(false);
                $rootScope.doLogout();
              }
            }
          }
        }
      } catch(err) {

      }
   });*/

    $rootScope.notificationTimer = {"timer": 5000};
    $rootScope.properties = {"DataNotAvailable" : "Data is not available."};

   // UI side add, update success and faild and growl and Validation messages.

   $rootScope.messages = {

    // Login controller
    "passwordBlank" : "Password should not be blank.",
    "emailBlank" : "Email  should not be blank.",
    "emailInvalid" : "Invalid Email.",

    // Change Password controller
    "updatePassword" : "Password updated successfully.",
    "passwordMustContains" : "Passwords must contains:"+"\n" + "1.At least one lowercase letter." + "\n" +" 2.At least one uppercase letter." + "\n" + "3.At least one digit.",
    "passwordLength" : "Password length should be atleast 8 characters.",
    "passwordUnMatched" : "Password does not matched.",
    "passwordVerified" : "Verification process completed successfully.",
    "invalidUser" : "User account is invalid.",
    "shortPassword" : "This password is short",
    "strongPassword" : "This password is strong",

    // Forgot Password controller
    "passwordLinkSent" : "A change password link was just sent to the email address that was registered with your account.",

    // Update Password controller : already covered.
    
    // Add User controller
    "userAdded" : "User added successfully.",
    "userDetailsUpdated" : "User details updated successfully.",
    "userFirstNameBlank" : "First Name should not be blank.",
    "userLastNameBlank" : "Last Name should not be blank.",
    "assignOneRole" : "Please assign at least one role.",
    "selectPublisher" : "Please select publisher.",

    // User controller and User Details controller
    "deleteUser" : "Are you sure you want to delete ",
    "userDeleted" : "User deleted successfully.",
    "activateUser" : "Are you sure you want to activate ",
    "userActivated" : "User activated successfully.",
    "deactivateUser" : "Are you sure you want to deactivate ",
    "userDeactivated" : "User deactivated successfully.",

    "phoneNoBlank" : "Phone No should not be blank.",
    "phoneNoWrong" : "Entered Phone No is Wrong.",
    "mobileNoBlank" : "Mobile No should not be blank.",
    "mobileNoWrong" : "Entered Mobile No is Wrong.",

    "roleNameBlank" : "Enter Role Name.",
    "roleDescriptionNameBlank" : "Enter Role Description.",

   };

}]);