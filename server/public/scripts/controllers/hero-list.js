app.controller('HeroListController', ['$http', function($http){
    console.log('Hero List Controller loaded');
    var self = this;

    getHeroes();
    self.HeroesArray = [];

    self.removeHero = function(heroID) {
      $http({
        method: 'DELETE',
        url: '/heroes/' + heroID
      }).then(function(response){
        console.log(response);
        getHeroes();
      });
    };

    function getHeroes(){
      $http({
        method: 'GET',
        url: '/heroes'
      }).then(function(response){
        console.log(response.data);
        self.HeroesArray = response.data;
      });
    }
}]);
