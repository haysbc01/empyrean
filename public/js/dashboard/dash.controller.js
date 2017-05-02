angular.module('design')
  .controller('dashController', dashCtrl);

  dashCtrl.$inject = ['$http', 'dashFactory'];

  function dashCtrl($http, dashFactory){
    var dash = this;

    dash.greeting = 'Hello Again';

    dash.load = function(){
      dashFactory
        .getMe()
        .then(function(responseData){
          dash.data = responseData.data
          console.log(dash.data)
        })
    }
    dash.load()
  }
