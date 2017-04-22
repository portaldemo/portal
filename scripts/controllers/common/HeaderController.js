portalApp.controller('HeaderController', function($scope, $rootScope, $location, AuthService, $modal) {
  //logout user
  $scope.logout = function() {
     try {
        $rootScope.loading = true;
        AuthService.logout($rootScope.getUserEmailId(), function(error, json) {
          $rootScope.loading = false;
          $rootScope.resetUserSession();
          $location.path("/login");
        });
      } catch(err) {
        $rootScope.loading = false;
        $rootScope.resetUserSession();
        $location.path("/login");
      }
  }

  //Change password of logged in user
  $scope.passwordChange = function () {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/updatepassword/updatepassword.html',
      controller: 'UpdatePasswordController',
    });
  };
});