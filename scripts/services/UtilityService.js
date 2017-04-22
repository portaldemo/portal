portalApp.service('UtilityService', function($rootScope, growl) {

  this.addErrorMessage = function(message) {
    growl.error(message, {ttl: $rootScope.notificationTimer.timer});
  };

  this.addSuccessMessage = function(message) {
    growl.info(message, {ttl: $rootScope.notificationTimer.timer});
  };

});