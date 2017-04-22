portalApp.service('ValidatorService', function($rootScope) {

  this.isBlankString = function(str) {
    if(angular.isDefined(str) && null !== str) {
       str=""+str;
      var trimed = str.replace(/^\s+|\s+$/g, '');
      if(trimed == "") {
        return true;
      }
    }
    else {
      return true;
    }

    return false;
  }

  this.onlyNumbers = function(event){
    // console.log(event.keyCode);
    if (event.shiftKey || event.ctrlKey || event.altKey) {
      event.preventDefault();
    } else {
      var key = event.keyCode;
      if (!((key == 8) || (key == 9) || (key == 46) || (key >= 48 && key <= 57) || (key >= 35 && key <= 40))) {
        event.preventDefault();
      }
    }
  }

  this.onlyLetters = function(event) {
    // console.log(event.keyCode);
    if (event.ctrlKey || event.altKey) {
      event.preventDefault();
    } else {
      var key = event.keyCode;
      if (!((key == 8) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90) || (key == 16))) {
        event.preventDefault();
      }
    }
  };

  this.onlyLettersAndNumbers = function(event) {
    console.log(event.keyCode);
    if (event.ctrlKey || event.altKey) {
      event.preventDefault();
    } else {
      var key = event.keyCode;
      if (!((key == 8) || (key == 46) || (key == 32) || (key >= 35 && key <= 40) || (key >= 48 && key <= 57) || (key >= 65 && key <= 90) || (key == 16))) {
        event.preventDefault();
      }
    }
  };

  this.onlyNumersWithPeriod = function(event) {
    // console.log(event.keyCode);
    if (event.shiftKey || event.ctrlKey || event.altKey) {
      event.preventDefault();
    } else {
      var key = event.keyCode;
      if( key == 190 && event.currentTarget && event.currentTarget.value && event.currentTarget.value.indexOf(".") > 0) {
        event.preventDefault();
      } else if (!((key == 8) || (key == 9) || (key == 190) || (key == 46) || (key >= 48 && key <= 57) || (key >= 35 && key <= 40))) {
        event.preventDefault();
      }
    }
  };

  this.isEmailAddress = function(str) {
   var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   return pattern.test(str);  // returns a boolean 
  };

  this.isURLValid = function(str) {
   var pattern =/(http(s)?:\\)?([\w-]+\.)+[\w-]+[.com|.in|.org]+(\[\?%&=]*)?/;
   return pattern.test(str);  // returns a boolean 
  };

  this.isValidPassword = function(str) {
      var pattern =/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
   return pattern.test(str);  // returns a boolean 
  };

  this.isValidPin = function(str){

   var pattern = /^\d{6}$/;
   return pattern.test(str);  // returns a boolean 
  };

  this.isValidURL = function(str){

   var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
   return pattern.test(str);  // returns a boolean 
  };
    
  this.isValidMobile = function(str){

  // var pattern = /^(\+91-|\+91|0)?\d{10}$/;
  var pattern = /^\d{1,20}$/;
   return pattern.test(str);  // returns a boolean 
  };

   this.isValidPhoneNo = function(str){

   var pattern = /^\d{1,20}$/;
     
   return pattern.test(str);  // returns a boolean 
  };
  
});