angular.module('design')
  .controller('authController', authCtrl);

authCtrl.$inject = ['$http', 'authFactory'];

function authCtrl ($http, authFactory){
  var auth = this;

auth.whichSeason = '';
auth.whichStyle = '';
auth.whichColors = [];
auth.whichFlowers = [];

auth.register = function(){
  if(auth.registerPassword != auth.confirmPassword){
    auth.noPassMatch = true;
    auth.tryAgain = 'Passwords did not match!'
    auth.registerPassword ='';
    auth.confirmPassword = '';
  }else{

    authFactory
      .register(auth.firstName, auth.registerEmail, auth.registerPassword)
      .then(auth.register.success, auth.register.error);
    }
}
auth.register.error = function(err){
  console.log(err);
}

auth.register.success = function(res){
  // location.href ='/#!/dashboard'
  auth.question1 = true;
  auth.login = false;
  auth.signUp = false;
}


auth.login = function(){
  authFactory
    .login(auth.email, auth.password)
    .then(auth.login.success, auth.login.error);
}
auth.login.success = function(res){
  location.href = '/#!/dashboard';
}

auth.login.error = function(err){
  auth.loginError = err.data;
}

auth.exit = function(){
  auth.loginModal = false;
  auth.signUp = false;
}


// User Questions

auth.season = function(){
  console.log(auth.whichSeason)
  auth.whichSeason = auth.whichSeason;
  // authFactory
  //   .season(auth.whichSeason)
  auth.question1 = false;
  auth.question2 = true;
}

auth.style = function(){
  console.log(auth.whichStyle)
  auth.whichStyle = auth.whichStyle;
  auth.question2 = false;
  auth.question3 = true;
}

auth.flower = function(){
  console.log(auth.whichFlower1, auth.whichFlower2, auth.whichFlower3, auth.whichFlower4, auth.whichFlower5, auth.whichFlower6)

  if(auth.whichFlower1){
    auth.whichFlowers.push('rose')
  }else if(auth.whichFlower2){
    auth.whichFlowers.push('lilly')
  }else if(auth.whichFlower3){
    auth.whichFlowers.push('hydrangea')
  }else if(auth.whichFlower4){
    auth.whichFlowers.push('peony')
  }else if(auth.whichFlower5){
    auth.whichFlowers.push('carnation')
  }else if(auth.whichFlower6){
    auth.whichFlowers.push('orchid')
  }

  // console.log(auth.whichFlowers)

  auth.question3 = false;
  auth.question4 = true;
}

auth.color = function(){
  console.log(auth.color1, auth.color2,auth.color3)
  auth.whichColors.push(auth.color1, auth.color2,auth.color3)
  console.log(auth.whichColors)

  authFactory
    .questions(auth.whichSeason, auth.whichStyle, auth.whichFlowers, auth.whichColors)
    .then(location.href = '/#!/dashboard');
}


// .then(auth.login.success, auth.login.error);
// }
// auth.login.success = function(res){
// location.href = '/#!/dashboard';
// }
//
// auth.login.error = function(err){
// auth.loginError = err.data;
// }



};
