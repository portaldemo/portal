 portalApp.service('RoleService', function($http, $rootScope) {

  this.listRoles = function(callbackFn) {
    //var api = $rootScope.getBaseUrl() + $rootScope.apiUrls.roles;
    //var authToken = $rootScope.getUserAccessToken();

    //var config = {headers:{'Content-Type':'application/json', 'X-Auth-Token':authToken, 'X-Auth-Type': 'nimbuzz'}};
    var api = './data/role.json'
    $http.get(api)
    .success(function (json) {
      //console.log(json);
      if(callbackFn){
        callbackFn(null, json);
      }
    })
    .error(function (errorJson, status) {
      var error = {error_code:errorJson.code, error_message:errorJson.message};
      $rootScope.handleAJAXResponseError(status, error,callbackFn);
    });
  };

  this.getRoleDetails = function(roleId, callbackFn) {
    var api = $rootScope.getBaseUrl()  + $rootScope.apiUrls.roles + "/" + roleId;
    var authToken = $rootScope.getUserAccessToken();

    var config = {headers:{'Content-Type':'application/json', 'X-Auth-Token':authToken, 'X-Auth-Type': 'nimbuzz'}};

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