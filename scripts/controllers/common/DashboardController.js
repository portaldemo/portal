portalApp.filter('startFrom', function () {
  return function (input, start) {
    if (input) {
      start = +start;
      return input.slice(start);
    }
    return [];
  };
});

portalApp.controller('DashboardController', function($scope, $window, $rootScope, SidebarManager) {

  $rootScope.isHeaderVisible = true;

  $scope.init = function () {
    $scope.errormassage = "";

    $rootScope.loading = true;
    listUpcomingTrainingSchedules();
    trainedUntrainedStatusGraph();
    $rootScope.loading = false;
  };


  function trainedUntrainedStatusGraph() {

  	$(function () {


      $('#container').highcharts({
         chart: {
        type: 'column'
      },
      title: {
          text: 'Trained - Untrained Status'
      },
      subtitle: {
          text: 'Yearly Manpower status',
      },
      xAxis: {
          categories: [
              'MH', 'RJ','TN', 'KN','PU', 'UP','MP', 'GU', 'AP', 'WB','KL', 'DL'
          ],
          crosshair: true
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Count'
          }
      },
      exporting: {
          enabled: false
      },
      credits: {
          enabled: false
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      series: [{
          name: 'Total Employee',
          data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

      }, {
          name: 'Trained',
          data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

      }, {
          name: 'Untrained',
          data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

      }]
    });

        $('#container1').highcharts({
            chart: {
                type: 'line',
                marginRight: 130,
                marginBottom: 25
            },
            title: {
                text: 'Employee Evaluation Status',
                x: -20 //center
            },
            subtitle: {
                text: 'Yearly Average Score',
                x: -20
            },
            xAxis: {
                categories: ['MH', 'RJ','TN', 'KN','PU', 'UP','MP', 'GU', 'AP', 'WB','KL', 'DL']
            },
            yAxis: {
                title: {
                    text: 'Score (in %)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            exporting: {
                enabled: false
            },
            credits: {
              enabled: false
            },
            tooltip: {
                valueSuffix: '°C'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: 10,
                y: 100,
                borderWidth: 0
            },
            series: [{
                name: 'Service Advisor',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }, {
                name: 'Technician',
                data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
            }, {
                name: 'Works Manager',
                data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
            }, {
                name: 'PDI Incharge',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }]
        });
    });


  }

  function listUpcomingTrainingSchedules() {


    var jsonTrainingSchedules = [
      {'id' : 1, 'trainingCenter' : 'Pune training center', 'trainingCourse' : 'MotorCycle Basic',
      'courseDuration' : '2', 'courseValidFrom' : '10/03/2017', 'startDate' : '22/04/2017', 'endDate' : '25/04/2017',
      'trainerName' : 'Mr. Arun Jadhav', 'description' : 'All Courses conducted at this training center', 'status' : 'ACTIVE' },
      {'id' : 2, 'trainingCenter' : 'Banglore training center', 'trainingCourse' : 'Engine Basic',
      'courseDuration' : '2', 'courseValidFrom' : '10/03/2017', 'startDate' : '22/04/2017', 'endDate' : '25/04/2017',
      'trainerName' : 'Mr. N Nagarajan', 'description' : 'All Courses conducted at this training center', 'status' : 'ACTIVE' },
      {'id' : 3, 'trainingCenter' : 'Nashik training center', 'trainingCourse' : 'Ecetrical Engine Experts',
      'courseDuration' : '2', 'courseValidFrom' : '10/03/2017', 'startDate' : '22/04/2017', 'endDate' : '25/04/2017',
      'trainerName' : 'Mr. Varun Chavhan', 'description' : 'All Courses conducted at this training center', 'status' : 'ACTIVE' },
      {'id' : 4, 'trainingCenter' : 'Kolhapur training center', 'trainingCourse' : 'Spare Part Repairing',
      'courseDuration' : '2', 'courseValidFrom' : '10/03/2017', 'startDate' : '22/04/2017', 'endDate' : '25/04/2017',
      'trainerName' : 'Mr. Arun Jadhav', 'description' : 'All Courses conducted at this training center', 'status' : 'INACTIVE' },
      {'id' : 5, 'trainingCenter' : 'Manglore training center', 'trainingCourse' : 'Spare Part Repairing',
      'courseDuration' : '2', 'courseValidFrom' : '10/03/2017', 'startDate' : '22/04/2017', 'endDate' : '25/04/2017',
      'trainerName' : 'Mr. A Satish', 'description' : 'All Courses conducted at this training center', 'status' : 'ACTIVE' }
    ];

    $scope.trainingSchedules = jsonTrainingSchedules;
    $scope.totalItems = $scope.trainingSchedules.length;
  }

// pagination controls
  $scope.currentPage = 1;
  $scope.entryLimit = 5; // training courses per page
  $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);

  // $watch search to update pagination
  $scope.$watch('searchTrainingSchedule', function (newVal, oldVal) {
    try {
      $scope.filtered = filterFilter($scope.trainingSchedules, newVal);
      $scope.totalItems = $scope.filtered.length;
      $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
      $scope.currentPage = 1;
    }
    catch(err) {
      $rootScope.loading = false;
    }
  }, true);

  $scope.init();
});
