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

    dash.designs = function(){
      dashFactory
        .getDesigns()
        .then(function(responseData){
          dash.designs = responseData.data;
          console.log(dash.designs)
        })
    }
    dash.load();
    dash.designs();
  }

