portalApp.controller('EmployeeNominationController', function($scope, $window, $rootScope, $location, $dialogs, SidebarManager,
	DealerService, UtilityService, filterFilter) {

		$scope.init = function () {
	    $scope.errormassage = "";
			$scope.nominationDetail = {};
			$scope.nominatedEmployees = [];
	  };

  $scope.getNomineeEmployeeList = function(){

		hideErrorMessages();
		if($scope.nominationDetail.trainingCenterId == undefined){
			$('#trainingCenterErrorMsg').show();
			return false;
		}
		else if($scope.nominationDetail.trainingCourseId == undefined){
			$('#trainingCourseErrorMsg').show();
			return false;
		}
		else if($scope.nominationDetail.trainingScheduleId == undefined){
			$('#trainingScheduleErrorMsg').show();
			return false;
		}
		else{
			$scope.EmployeeNomination = [
					 { Id: 1, Name: "Jhon arrow", Status: "Eligible", Qualification: "DME", Designation: "Documentation" },
					 { Id: 2, Name: "Mark bhon", Status: "Not-Eligible", Qualification: "Graduate", Designation: "Reciptionist" },
					 { Id: 3, Name: "Reha suree", Status: "Eligible", Qualification: "Graduate", Designation: "DEMO Team" },
					 { Id: 4, Name: "Nanci bron", Status: "Not-Eligible", Qualification: "Graduate", Designation: "Documentation" },
					 { Id: 5, Name: "Jacab Horn", Status: "Not-Eligible", Qualification: "DME", Designation: "Sales Executive" },
					 { Id: 6, Name: "Smith kelly", Status: "Eligible", Qualification: "Graduate", Designation: "Cashir" }
		 ];
		 $('#nomineeEmployeeListDiv').show();
		}
  };

	var hideErrorMessages = function()
	{
		$('#trainingCenterErrorMsg').hide();
		$('#trainingCourseErrorMsg').hide();
		$('#trainingScheduleErrorMsg').hide();
	}

	$scope.nominateEmployee = function(employee){
		if($('#'+employee.Id+' i').hasClass('fa-square-o')){
			$('#'+employee.Id+' i').removeClass();
			$('#'+employee.Id+' i').addClass('fa fa-check-square-o');
			$('#'+employee.Id).removeAttr('title');
			$('#'+employee.Id).attr('title', 'Undo Nomination');
			$scope.nominatedEmployees.push(employee);
			$('#warningMsg').hide();
		}
			else {
				$('#'+employee.Id+' i').removeClass();
				$('#'+employee.Id+' i').addClass('fa fa-square-o');
				$('#'+employee.Id).removeAttr('title');
				$('#'+employee.Id).attr('title', 'Nomination Employee');
				$scope.nominatedEmployees.pop(employee);
			}
	};

	$scope.saveNomineeEmployee = function(){

		$('#warningMsg').hide();
		if($scope.nominatedEmployees.length == 0){
			$('#warningMsg').show();
		}else{
			$('#nomineeEmployeeListDiv').hide();
			resetSelectedCriteria();
			$('#successMsg').show();
			setInterval(function(){ $('#successMsg').hide(); }, 5000);
		}
	};

	var resetSelectedCriteria = function(){
		$('#trainingcenter').val('');
		$('#trainingcourse').val('');
		$('#trainingschedule').val('');
	}

  $scope.init();
});
