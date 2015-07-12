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
      	var newdob = new Date(that.newUser.dob);
      		that.newUser.dob = newdob;
      	//console.log('new user in client controller: ', that.newUser);
        for (i = 0; i < that.users.length; i++){  //form validation
              
              if(that.newUser.name == undefined || that.newUser.name == ""){
                console.log('ERROR: NO NAME ENTERED FOR CUSTOMER');
                that.error_txt = 'ERROR: Name left blank';
                return false;
              }
              if(that.newUser.dob == undefined){
                console.log('ERROR: NO BDAY SELECTED');
                that.error_txt = 'ERROR: Date of Birth left blank';
                return false;
              }

              /*if(that.newUser.level == undefined){
                console.log('ERROR: USER CLASS INVALID ',that.newUser);
                that.error_txt = 'ERROR: Invalid User Class Selected';
                return false;
              }*/
              if(that.users[i].name == that.newUser.name){
                console.log("ERROR: USER ALREADY EXISTS");
                that.error_txt = 'ERROR: User already exists';
                return false;
              }
        }

        that.newUser.addDate = new Date();

        userFactory.addUser(that.newUser, function (){
              that.newUser = {};// clear the form values
               userFactory.getUsers(function (data){
                  that.users = data;
              })
        })
        that.error_txt = '';//reset error text
    }


//Angular materialize datepicker
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


my_App.controller('teamsController', function (teamFactory){
        var that = this;
          that.teams = [];
          that.newteam = {};
          that.selected = [];
          teamFactory.getTeams(function (data){
              that.teams = data;
              for(var j = 0; j<data.length; j++){
                  for (var i = 0; i<that.teams[j].roster.length; i++){
                    if(that.teams[j].roster[i]._id == that.teams[j].leader){
                        that.teams[j].leader_name = that.teams[j].roster[i].name;
                        break;
                    }
                }
              }
              
          })

          var getNewTeam = function(){
              teamFactory.getNewTeam(function (data1,data2){
              that.newteam = data1;
              that.selected = data2;

              })
          }         
          getNewTeam();
          //console.log('pulled new team from model, showing in controller ',that.newteam);

      that.addTeam = function (){
        /*for (i = 0; i < that.teams.length; i++){  //check through list for dupe names
              if(that.newteam.name == undefined){
                console.log('ERROR: NO NAME ENTERED FOR NEW TEAM');
                that.error_txt = 'ERROR: Name left blank';
                return false;
              }
              if(that.teams[i].name == that.newteam.name){
                console.log("ERROR: NAME MATCHED");
                that.error_txt = 'ERROR: User already exists';
                return false;
              }
        }*/
        that.newteam.addDate = new Date();
        teamFactory.addTeam(that.newteam,function (){
            teamFactory.resetTeam();
            getNewTeam();
            teamFactory.getTeams(function (data){
                that.teams = data;
                for(var j = 0; j<data.length; j++){
                  for (var i = 0; i<that.teams[j].roster.length; i++){
                    if(that.teams[j].roster[i]._id == that.teams[j].leader){
                        that.teams[j].leader_name = that.teams[j].roster[i].name;
                        break;
                    }
                }
              }
            })
        })
        that.error_txt = '';//reset error text
    }

      that.removeTeam = function (team){
          teamFactory.delTeam(team, function(teams){
            teamFactory.getTeams(function (data){
                that.teams = data;
            })
          })
      }

      that.addUser = function (newmember,index){
       // console.log('new team roster was ',that.newteam.roster);
        /*if(that.newteam.roster.indexOf(newmember)> -1){//maybe need the for loop back?
          console.log('user ',newmember,' already found on team');
              return false;
        }*/
        for(var i=0; i<that.newteam.roster.length; i++){
            if(that.newteam.roster[i]._id == newmember._id){
                console.log("User ",newmember.name," already on new team");
                return false;
            }
        }
        //console.log(newmember);
        that.selected[index] = 'red';
        teamFactory.addMember(newmember);
        getNewTeam();
      }

      that.removeUser = function (index){
        console.log(index);
        that.selected[index] = ''
        teamFactory.removeMember(index);
        getNewTeam();
      }

      that.resetNewTeam = function(){
          teamFactory.resetTeam();
          getNewTeam();
      }

});


my_App.controller('projectsController', function (projectFactory){
        var that = this;
          that.projects = [];
          projectFactory.getProjects(function (data){
              that.projects = data;
          })
            
      that.addProject = function (){
        console.log('new project in client controller: ', that.newProject);
        that.newProject.addDate = new Date();

        projectFactory.addProject(that.newProject, function (){
              that.newProject = {};
               projectFactory.getProjects(function (data){
                  that.projects = data;
              })
        })
        that.error_txt = '';
    }

});
