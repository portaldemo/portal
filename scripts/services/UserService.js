 portalApp.service('UserService', function($http, $rootScope) {
  
  this.listUsers = function(callbackFn) {
    var api = $rootScope.getBaseUrl() + $rootScope.apiUrls.users;
    //var api = "./data/users.json"
    var authToken = $rootScope.getUserAccessToken();
    
    var config = {headers:{'Content-Type':'application/json', 'X-Auth-Token':authToken, 'X-Auth-Type': 'automation'}};
    //console.log(api);
      $http.get(api)
      .success(function (json) {
        console.log(json);
        if(callbackFn){
          callbackFn(null, json);
        }
      })
      .error(function (errorJson, status) {
        var error = {error_code:errorJson.code, error_message:errorJson.message};
        $rootScope.handleAJAXResponseError(status, error,callbackFn);
      });
  };

  this.getUserDetails = function(userId, callbackFn) {
    var api = $rootScope.getBaseUrl() + $rootScope.apiUrls.users + "/" + userId;
    var authToken = $rootScope.getUserAccessToken();
    
    var config = {headers:{'Content-Type':'application/json', 'X-Auth-Token':authToken, 'X-Auth-Type': 'automation'}};

      $http.get(api, config)
      .success(function (json) {
        console.log(json);
        if(callbackFn){
          callbackFn(null, json);
        }
      })
      .error(function (errorJson, status) {
        var error = {error_code:errorJson.code, error_message:errorJson.message};
        $rootScope.handleAJAXResponseError(status, error,callbackFn);
      });
  };

  this.addUser = function(inputParamJSON, callbackFn) {
    
    var api = $rootScope.getBaseUrl() + $rootScope.apiUrls.addUser;
    var authToken = $rootScope.getUserAccessToken();
    var config = {headers:{'Content-Type':'application/json', 'X-Auth-Token':authToken, 'X-Auth-Type': 'automation'}};

      $http.post(api, inputParamJSON, config)
      .success(function (json) {
        console.log(json);
        if(callbackFn){
          callbackFn(null, json);
        }
      })
      .error(function (errorJson, status) {
        var error = {error_code:errorJson.code, error_message:errorJson.message};
        $rootScope.handleAJAXResponseError(status, error,callbackFn);
      });
  };

   this.updateUser = function(inputParamJSON, callbackFn) {
    
    var api = $rootScope.getBaseUrl() + $rootScope.apiUrls.updateUser;
    var authToken = $rootScope.getUserAccessToken();
    var config = {headers:{'Content-Type':'application/json', 'X-Auth-Token':authToken, 'X-Auth-Type': 'automation'}};

      $http.put(api, inputParamJSON, config)
      .success(function (json) {
        console.log(json);
        if(callbackFn){
          callbackFn(null, json);
        }
      })
      .error(function (errorJson, status) {
        var error = {error_code:errorJson.code, error_message:errorJson.message};
        $rootScope.handleAJAXResponseError(status, error,callbackFn);
      });
  };

  this.activateUser = function(inputParamJSON, callbackFn) {
    var api = $rootScope.getBaseUrl() + $rootScope.apiUrls.activateUser;
    var authToken = $rootScope.getUserAccessToken();
    var config = {headers:{'Content-Type':'application/json', 'X-Auth-Token':authToken, 'X-Auth-Type': 'automation'}};

    $http.post(api, inputParamJSON, config)
    .success(function (json) {
      console.log(json);
      if(callbackFn){
        callbackFn(null, json);
      }
    })
    .error(function (errorJson, status) {
      var error = {error_code:errorJson.code, error_message:errorJson.message};
      $rootScope.handleAJAXResponseError(status, error,callbackFn);
    });
  };

  this.deactivateUser = function(inputParamJSON, callbackFn) {
    var api = $rootScope.getBaseUrl() + $rootScope.apiUrls.deactivateUser;
    var authToken = $rootScope.getUserAccessToken();
    var config = {headers:{'Content-Type':'application/json', 'X-Auth-Token':authToken, 'X-Auth-Type': 'automation'}};

    $http.post(api, inputParamJSON, config)
    .success(function (json) {
      console.log(json);
      if(callbackFn){
        callbackFn(null, json);
      }
    })
    .error(function (errorJson, status) {
      var error = {error_code:errorJson.code, error_message:errorJson.message};
      $rootScope.handleAJAXResponseError(status, error,callbackFn);
    });
  };

  this.deleteUser = function(userId, callbackFn) {
    console.log("indelete")
    var api = $rootScope.getBaseUrl() + $rootScope.apiUrls.deleteUser+ "/" + userId;;
    var authToken = $rootScope.getUserAccessToken();
    var config = {headers:{'Content-Type':'application/json', 'X-Auth-Token':authToken, 'X-Auth-Type': 'automation'}};

    $http.delete(api, config)
    .success(function (json) {
      console.log(json);
      if(callbackFn){
        callbackFn(null, json);
      }
    })
    .error(function (errorJson, status) {
      var error = {error_code:errorJson.code, error_message:errorJson.message};
       $rootScope.handleAJAXResponseError(status, error,callbackFn);
    });
  };

  this.updatePassword = function(inputParamJSON, callbackFn) {
    var api = $rootScope.getBaseUrl() + $rootScope.apiUrls.updatePassword;
    var authToken = $rootScope.getUserAccessToken();
    var config = {headers:{'Content-Type':'application/json', 'X-Auth-Token':authToken, 'X-Auth-Type': 'automation'}};

      $http.post(api, inputParamJSON, config)
      .success(function (json) {
        console.log(json);
        if(callbackFn){
          callbackFn(null, json);
        }
      })
      .error(function (errorJson, status) {
        var error = {error_code:errorJson.code, error_message:errorJson.message};
        $rootScope.handleAJAXResponseError(status, error,callbackFn);
      });
  };

   this.listPublishers = function(callbackFn) {
    var api = $rootScope.getBaseUrl() + $rootScope.apiUrls.publishers;
    var authToken = $rootScope.getUserAccessToken();

    var config = {headers:{'Content-Type':'application/json', 'X-Auth-Token':authToken, 'X-Auth-Type': 'automation'}};

      $http.get(api, config)
      .success(function (json) {
        console.log(json);
        if(callbackFn){
          callbackFn(null, json);
        }
      })
      .error(function (errorJson, status) {
        var error = {error_code:errorJson.code, error_message:errorJson.message};
        $rootScope.handleAJAXResponseError(status, error,callbackFn);
      });
  };


});