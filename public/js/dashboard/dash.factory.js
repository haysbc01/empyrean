angular.module('design')
  .factory('dashFactory', dashFactory)

dashFactory.$inject = ['$http'];


function dashFactory($http){

  function getMe(){
    return $http({
      method: 'GET',
      url: '/me'
    })
  }

return {
  getMe:getMe
};
}
