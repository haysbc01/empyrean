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

  function getDesigns(){
    return $http({
      method: 'GET',
      url: 'designs'
    })
  }

return {
  getMe:getMe,
  getDesigns:getDesigns
};
}
