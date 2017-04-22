 portalApp.service('AuthService', function($http, $rootScope) { 
  
  this.login = function(inputParamJSON, callbackFn) {
    
    var api = $rootScope.getBaseUrl() + $rootScope.apiUrls.login;
    var config = {headers:{'Content-Type':'application/json'}};

      $http.post(api, inputParamJSON)
      .success(function (json) {
        console.log(json);
        if(callbackFn){
          callbackFn(null, json);
        }
      })
      .error(function (errorJson, status) {
        var error = {error_code:errorJson.code, error_message:errorJson.message};
                 callbackFn(error, null); 
      });
  };

  this.logout = function(inputParamJSON, callbackFn) {
    var api = $rootScope.getBaseUrl() + $rootScope.apiUrls.logout;
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
                 callbackFn(error, null);
      });
  };

  this.changePassword = function(inputParamJSON, callbackFn) {
    var api = $rootScope.getBaseUrl() + $rootScope.apiUrls.changePassword;
    
      $http.post(api, inputParamJSON)
      .success(function (json) {
        console.log(json);
        if(callbackFn){
          callbackFn(null, json);
        }
      })
      .error(function (errorJson, status) {
        var error = {error_code:errorJson.code, error_message:errorJson.message};
                 callbackFn(error, null);
      });
  };

  this.verifyChangePasswordToken = function(inputParamJSON, callbackFn) {
    var api = $rootScope.getBaseUrl() + $rootScope.apiUrls.verifyPasswordToken;
      $http.post(api, inputParamJSON)
      .success(function (json) {
        console.log(json);
        if(callbackFn){
          callbackFn(null, json);
        }
      })
      .error(function (errorJson, status) {
        var error = {error_code:errorJson.code, error_message:errorJson.message};
                 callbackFn(error, null);
      });
  };

  this.forgotPassword = function(inputParamJSON, callbackFn) {
    var api = $rootScope.getBaseUrl() + $rootScope.apiUrls.forgotPassword;
    var config = {headers:{'Content-Type':'application/json'}};

      $http.post(api, inputParamJSON)
      .success(function (json) {
        console.log(json);
        if(callbackFn){
          callbackFn(null, json);
        }
      })
      .error(function (errorJson, status) {
        var error = {error_code:errorJson.code, error_message:errorJson.message};
                 callbackFn(error, null);
      });
  };

});