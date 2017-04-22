portalApp.service('FileUpload', ['$http','sessiontracker', function ($http, sessiontracker) {
    this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new FormData();
        fd.append('file', file);
        var clAuthToken = sessiontracker.getValue("CL_ACCESS_TOKEN");

        $http.put(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined, "cl-ui-auth-token": clAuthToken}
        })
        .success(function(){
        	dlg = $dialogs.notify('Info',' KeyPairfile  uploaded successfully.');
        })
        .error(function(){
        	alert("error");
        });
    };
}]);