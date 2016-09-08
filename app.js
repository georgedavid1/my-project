(function(){ //ifee protects from global variables
  'use strict'; //best practice declaring function with use strict
  //enabling certain things from mamking certain mistakes

  angular.module('myFirstApp', [])
  .controller('MyFirstController', function($scope){
    $scope.test = "TRALALA";
    $scope.sayHello = function(){
      return "say hello";
    }
  })
})();
