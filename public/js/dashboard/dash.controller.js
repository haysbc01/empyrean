angular.module('design')
  .controller('dashController', dashCtrl);

  dashCtrl.$inject = ['$http', 'dashFactory'];

  function dashCtrl($http, dashFactory){
    var dash = this;

    dash.designs = '';
    dash.tables = [];
    dash.bouquets = [];
    dash.tableFlowers = [];
    dash.corsage = [];
    dash.tableCount = 0;
    dash.corsageCount = 0;
    dash.tableFlowersCount = 0;
    dash.bouquetCount = 0;

    dash.greeting = 'Hello Again';

    dash.load = function(){
      dashFactory
        .getMe()
        .then(function(responseData){
          dash.data = responseData.data
          console.log(dash.data)
        })
    }

    dash.getDesigns = function(){
      dashFactory
        .getDesigns()
        .then(function(responseData){
          dash.designs = responseData.data;
          
          for(var i=0;i<dash.designs.length;i++){
            if(dash.designs[i].section==='table'){
              dash.tables.push(dash.designs[i]);
            } else if(dash.designs[i].section==='bouquets'){
              dash.bouquets.push(dash.designs[i]);
            } else if(dash.designs[i].section==='corsage'){
              dash.corsage.push(dash.designs[i]);
            } else {
              dash.tableFlowers.push(dash.designs[i]);
            };
          };
        });
    }

    dash.addX = function(arg){
      if(arg === 'tables'){
        if(dash.tableCount<dash.tables.length-1){
          dash.tableCount += 1;
          } else dash.tableCount = 0;
      } 
      else if(arg === 'corsage'){
        if(dash.corsageCount<dash.corsage.length-1){
          dash.corsageCount += 1;
          } else dash.corsageCount = 0;
      } 
      else if(arg === 'bouquets'){
        if(dash.bouquetCount<dash.bouquets.length-1){
          dash.bouquetCount += 1;
          } else dash.bouquetCount = 0;
      } 
      else if(arg === 'tableFlowers'){
        if(dash.tableFlowersCount<dash.tableFlowers.length-1){
          dash.tableFlowersCount += 1;
          } else dash.tableFlowersCount = 0;
      }
    };

    dash.subtractX = function(arg){
      console.log(dash.corsage.length, dash.corsageCount)
      if(arg === 'tables'){
        if(dash.tableCount<dash.tables.length && dash.tableCount > 0){
          dash.tableCount -= 1;
        } else dash.tableCount = dash.tables.length-1;
        
      } 
      else if(arg === 'corsage'){
        if(dash.corsageCount<dash.corsage.length && dash.corsageCount > 0){
          dash.corsageCount -= 1;
          } else dash.corsageCount = dash.corsage.length-1;
      } 
      else if(arg === 'bouquets'){
        if(dash.bouquetCount<dash.bouquets.length && dash.bouquetCount > 0){
          dash.bouquetCount -= 1;
          } else dash.bouquetCount = dash.bouquets.length-1;
      } 
      else if(arg === 'tableFlowers'){
        if(dash.tableFlowersCount<dash.tableFlowers.length && dash.tableFlowersCount > 0){
          dash.tableFlowersCount -= 1;
          } else dash.tableFlowersCount = dash.tableFlowers.length-1;
      }
    }
    dash.load();
    dash.getDesigns();
  }

