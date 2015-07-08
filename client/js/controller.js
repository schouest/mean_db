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




my_App.controller('usersController', function (userFactory){
        var that = this;
          that.users = [];
          userFactory.getUsers(function (data){
              that.users = data;
          })
            
      that.addUser = function (){
      	console.log('new user in client controller: ');
        /*for (i = 0; i < that.users.length; i++){  //form validation
              
              if(that.newUser.cname == undefined || that.newUser.cname == ""){
                console.log('ERROR: NO NAME ENTERED FOR CUSTOMER');
                that.error_txt = 'ERROR: Name left blank';
                return false;
              }
              if(that.newUser.pname.name == undefined){
                console.log('ERROR: NO PRODUCT SELECTED');
                that.error_txt = 'ERROR: Product left blank';
                return false;
              }
              if(typeof that.newUser.count != 'number' || that.newUser.count < 1){
                console.log('ERROR: INVALID QUANTITY');
                that.error_txt = 'ERROR: Invalid Quantity';
                return false;
              }
              if(that.users[i].pname == that.newUser.pname.name
                && that.users[i].cname == that.newUser.cname){
                console.log("ERROR: USER ALREADY PLACED USER");
                that.error_txt = 'ERROR: User already placed user for that item';
                return false;
              }
        }*/

        that.newUser.addDate = new Date();

        //that.newUser.pname = that.newUser.pname.name;
        /*userFactory.addUser(that.newUser, function (){
              that.newUser = {};// clear the form values
               userFactory.getUsers(function (data){
                  that.users = data;
              })
        })*/
        that.error_txt = '';//reset error text
    }


    var currentTime = new Date();
that.currentTime = currentTime;
that.month = ['Januar', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
that.monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
that.weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
that.weekdaysLetter = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
that.today = 'Today';
that.clear = 'Clear';
that.close = 'Close';
that.onStart = function () {
    console.log('onStart');
};
that.onRender = function () {
    console.log('onRender');
};
that.onOpen = function () {
    console.log('onOpen');
};
that.onClose = function () {
    console.log('onClose');
};
that.onSet = function () {
    console.log('onSet');
};
that.onStop = function () {
    console.log('onStop');
};

});



/*var currentTime = new Date();
that.currentTime = currentTime;
that.month = ['Januar', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
that.monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
that.weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
that.weekdaysLetter = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
that.today = 'Today';
that.clear = 'Clear';
that.close = 'Close';
that.onStart = function () {
    console.log('onStart');
};
that.onRender = function () {
    console.log('onRender');
};
that.onOpen = function () {
    console.log('onOpen');
};
that.onClose = function () {
    console.log('onClose');
};
that.onSet = function () {
    console.log('onSet');
};
that.onStop = function () {
    console.log('onStop');
};*/