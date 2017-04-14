angular.module('design')
  .controller('authController', authCtrl);

authCtrl.$inject = ['$http', 'authFactory'];

function authCtrl ($http, authFactory){
  var auth = this;

auth.register = function(){
  if(auth.registerPassword != auth.confirmPassword){
    auth.noPassMatch = true;
    auth.tryAgain = 'Passwords did not match!'
    auth.registerPassword ='';
    auth.confirmPassword = '';
  }else{
    console.log('they match')
    // console.log(auth.registerEmail, auth.registerPassword)

    authFactory
      .register(auth.registerEmail, auth.registerPassword)
      .then(auth.register.success, auth.register.error);
      console.log(responseData)

      auth.register.success = function(res){
        console.log('that worked')
      }

      auth.register.error = function(err){
        console.log(err)
      }
  }
}

auth.login = function(){
  console.log(auth.email)
  authFactory
    .login(auth.email, auth.password);
}
};
