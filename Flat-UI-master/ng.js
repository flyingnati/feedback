var app = angular.module("app", []); 
app.controller("myCtrl", function ($scope) {
	// --------------------------login---------------
	Parse.initialize("sIiRRYKr6lWHSjEBrV95Jg51KxREe8qW7WdKJTDg", "uFtk5pPRd37pzrJmVdBpGYkFTwPFZfhhsXe4u0NR");
	/* Facebook API */
    window.fbAsyncInit = function() 
    {
	  Parse.FacebookUtils.init
      ({
	    appId      : '764397366917384', // Facebook App ID
	    channelUrl : '//localhost/channel.html', // Channel File
	    status     : true, // check login status
	    cookie     : true, // enable cookies to allow Parse to access the session
	    xfbml      : true  // parse XFBML
	  });	 
	  // Additional initialization code here
	  FB.getLoginStatus(function(response)
      {
	      if (response.status === 'connected')
          {
	        // user logged in and linked to app
	        // handle this case HERE
	      }
	  });
	};
	$scope.login = function()
	{
    	Parse.initialize("sIiRRYKr6lWHSjEBrV95Jg51KxREe8qW7WdKJTDg", "uFtk5pPRd37pzrJmVdBpGYkFTwPFZfhhsXe4u0NR");
        Parse.FacebookUtils.logIn('user_about_me',
        {
            success: function(user) {
                if (!user.existed()) {          
                  $scope.$apply(function () {
                    $scope.page = 2;
                  });
                } 
                else 
                {
                  $scope.$apply(function () {
                    $scope.page = 2;
                  });
                }
            },
            error: function(user, error) {
                alert("User cancelled the Facebook login or did not fully authorize.");
                $scope.$apply(function ()
                {
                    $scope.page= 1;
                });
            }
        });
    };

    $scope.age = function(num)
    {
    	$scope.numAge=num;
      
    };
    $scope.sex = function(str)
    {
        $scope.strSex=str;
            
    };
    $scope.insert = function(age,sex)
    {
        
        var TestUser = Parse.Object.extend("dbmoviesell"); 
        var testUser = new TestUser(); 
           
        testUser.save({ 
          "age": age, 
          "sex": sex 
        }, { 
          success: function(testUser) { 
            // The object was saved successfully. 
            $scope.$apply(function () {    
             $scope.page=3;
            });
          }, 
          error: function(testUser, error) { 
            // The save failed. 
            // error is a Parse.Error with an error code and description. 
            $scope.$apply(function () {
                 $scope.page=2;
            });
            alert("คุณกรอกแบบฟอร์มไม่ผ่าน"); 
          } 
        }); 
        
    };


	$scope.page = 1;
});





















