angular.module('design')
  .factory('authFactory', authFactory)

  authFactory.$inject = ['$http'];


  function authFactory($http){

    function register(email,password){
      // console.log(email, password)
      return $http({
        method: 'POST',
        url: '/register',
        data: {
          email:email,
          password:password
        }
      })
    }

    function login(email,password){
      return $http({
        method: 'POST',
        url: '/login',
        data:{
          email:email,
          password:password
        }
      })
    }

    return{
      register: register,
      login: login
    }
  }
