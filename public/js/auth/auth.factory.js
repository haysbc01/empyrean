angular.module('design')
  .factory('authFactory', authFactory)

  authFactory.$inject = ['$http'];


  function authFactory($http){

    function register(name,email,password){
      return $http({
        method: 'POST',
        url: '/register',
        data: {
          name:name,
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

    function season(season){
      return $http({
        method: 'POST',
        url: '/season',
        data: {
          season:season
        }
      })
    }

    function questions(season,style,flowers,colors){
      return $http({
        method: 'POST',
        url: '/questions',
        data: {
          season: season,
          style: style,
          flowers: flowers,
          colors: colors
        }
      })
    }

    return{
      register: register,
      login: login,
      season: season,
      questions: questions
    }
  }
