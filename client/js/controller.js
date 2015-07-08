my_App.controller('useclassesController', function (useclassFactory){
        var that = this;
          that.useclasses = [];
          useclassFactory.getUseclasses(function (data){
              that.useclasses = data;
          })
            
      that.addClass = function (){
        /*for (i = 0; i < that.useclasses.length; i++){  //check through list for dupe names
              if(that.newUseclass.name == undefined){
                console.log('ERROR: NO NAME ENTERED FOR NEW USECLASS');
                that.error_txt = 'ERROR: Name left blank';
                return false;
              }
              if(that.useclasses[i].name == that.newUseclass.name){
                console.log("ERROR: NAME MATCHED");
                that.error_txt = 'ERROR: User already exists';
                return false;
              }
        }*/
        that.newUseclass.addDate = new Date();
        useclassFactory.addUseclass(that.newUseclass,function (){
            that.newUseclass = {};// clear the form values
            useclassFactory.getUseclasses(function (data){
                that.useclasses = data;
            })
        })
        that.error_txt = '';//reset error text
		}

      that.removeClass = function (useclass){
          useclassFactory.delUseclass(useclass, function(useclasses){
            useclassFactory.getUseclasses(function (data){
                that.useclasses = data;
            })
          })
    }
      });



/*var currentTime = new Date();
$scope.currentTime = currentTime;
$scope.month = ['Januar', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
$scope.monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
$scope.weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
$scope.weekdaysLetter = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
$scope.today = 'Today';
$scope.clear = 'Clear';
$scope.close = 'Close';
$scope.onStart = function () {
    console.log('onStart');
};
$scope.onRender = function () {
    console.log('onRender');
};
$scope.onOpen = function () {
    console.log('onOpen');
};
$scope.onClose = function () {
    console.log('onClose');
};
$scope.onSet = function () {
    console.log('onSet');
};
$scope.onStop = function () {
    console.log('onStop');
};*/