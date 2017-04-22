/**
 * create the module and name it nimbuzz.
 * ngRoute - for all our routing needs.
 * ngCookies - to track the cookies.
 */
var portalApp = angular.module('portalApp', ['ngRoute', 'ngCookies', 'ngResource', 'ui.bootstrap', 'angular-growl', 'angularMoment', 'ngTagsInput', 'dialogs']);

// configure our routes
portalApp.config(['$routeProvider', '$httpProvider',function($routeProvider, $httpProvider) {
    $httpProvider.defaults.cache = false;
    if (!$httpProvider.defaults.headers.get) {
      $httpProvider.defaults.headers.get = {};
    }
    // disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
    
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];


  $routeProvider
  .when('/login', {
    templateUrl: 'views/login/login.html',
    controller: 'LoginController'
  })

  .when('/users', {
    templateUrl: 'views/user/User.html',
    controller: 'UserController'
  })
  .when('/adduser', {
    templateUrl: 'views/user/adduser.html',
    controller: 'AddUserController'
  })
  .when('/adduser/:id', {
    templateUrl: 'views/user/adduser.html',
    controller: 'AddUserController'
  })
  .when('/user/:id', {
    templateUrl: 'views/user/userdetails.html',
    controller: 'UserDetailsController'
  })
  .when('/roles', {
     templateUrl: 'views/roles/role.html',
     controller: 'RoleController'
   })
  .when('/addRole', {
    templateUrl: 'views/roles/addrole.html',
    controller: 'AddRoleController'
  })
  .when('/addRole/:id', {
     templateUrl: 'views/roles/roleDetails.html',
     controller: 'RoleDetailsController'
   })
  .when('/createpassword/:token', {
     templateUrl: 'views/changePassword/changePassword.html',
     controller: 'ChangePasswordController'
   })
  .when('/changepassword/:token', {
     templateUrl: 'views/changePassword/changePassword.html',
     controller: 'ChangePasswordController'
   })
   .when('/dashboard', {
     templateUrl: 'views/dashboard/dashboard.html',
     controller: 'DashboardController'
   })
   .when('/trainingcourses', {
    templateUrl: 'views/trainingcourse/TrainingCourseMaster.html',
    controller: 'TrainingCourseController'
  })
  .when('/addtrainingcourse', {
    templateUrl: 'views/trainingcourse/AddTrainingCourse.html',
    controller: 'AddTrainingCourseController'
  })
  .when('/addtrainingcourse/:id', {
    templateUrl: 'views/trainingcourse/AddTrainingCourse.html',
    controller: 'AddTrainingCourseController'
  })
  .when('/trainingcourse/:id', {
    templateUrl: 'views/trainingcourse/TrainingCourseDetails.html',
    controller: 'TrainingCourseDetailsController'
  })
  .when('/trainingcenters', {
    templateUrl: 'views/trainingcenter/TrainingCenterMaster.html',
    controller: 'TrainingCenterController'
  })
  .when('/addtrainingcenter', {
    templateUrl: 'views/trainingcenter/AddTrainingCenter.html',
    controller: 'AddTrainingCenterController'
  })
  .when('/addtrainingcenter/:id', {
    templateUrl: 'views/trainingcenter/AddTrainingCenter.html',
    controller: 'AddTrainingCenterController'
  })
  .when('/trainingcenter/:id', {
    templateUrl: 'views/trainingcenter/TrainingCenterDetails.html',
    controller: 'TrainingCenterDetailsController'
  })
  .when('/trainingschedules', {
    templateUrl: 'views/trainingschedule/TrainingScheduleMaster.html',
    controller: 'TrainingScheduleController'
  })
  .when('/addtrainingschedule', {
    templateUrl: 'views/trainingschedule/AddTrainingSchedule.html',
    controller: 'AddTrainingScheduleController'
  })
  .when('/addtrainingschedule/:id', {
    templateUrl: 'views/trainingschedule/AddTrainingSchedule.html',
    controller: 'AddTrainingScheduleController'
  })
  .when('/trainingschedule/:id', {
    templateUrl: 'views/trainingschedule/TrainingScheduleDetails.html',
    controller: 'TrainingScheduleDetailsController'
  })
  .when('/dealers', {
    templateUrl: 'views/dealer/Dealer.html',
    controller: 'DealerController'
  })
  .when('/addDealer', {
    templateUrl: 'views/dealer/AddDealer.html',
    controller: 'AddDealerController'
  })
  .when('/addDealer/:id', {
    templateUrl: 'views/dealer/AddDealer.html',
    controller: 'AddDealerController'
  })
  .when('/dealer/:id', {
    templateUrl: 'views/dealer/DealerDetails.html',
    controller: 'DealerDetailsController'
  })
  
   .when('/employes', {
    templateUrl: 'views/employee/Employee.html',
    controller: 'EmployeeController'
  })
   .when('/addEmployee', {
    templateUrl: 'views/employee/AddEmployee.html',
    controller: 'AddEmployeeController'
  })
   .when('/addEmployee/:id', {
    templateUrl: 'views/employee/AddEmployee.html',
    controller: 'AddEmployeeController'
  })

   .when('/employeeDetails/:id', {
    templateUrl: 'views/employee/EmployeeDetail.html',
    controller: 'EmployeeDetailsController'
  })
  .otherwise({
    redirectTo: '/login'
  });

}]);
