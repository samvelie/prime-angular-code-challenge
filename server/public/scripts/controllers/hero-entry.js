app.controller('AddHeroController', ['$http', function($http){
  var self = this;

  self.powersArray = []; //this gets filled in by the getSuperPowersList function

  getSuperPowersList();


  self.newHero = { //this object is linked to the inputs
    persona: '',
    alias: '',
    power_id: 0
  };

  self.addHero = function(){
    console.log("addHero clicked");
    var heroObject = self.newHero;
    console.log(heroObject);
    $http({
      method: 'POST',
      url: '/heroes',
      data: heroObject
    }).then(function(response){
        console.log(response);
    });
  };

  function getSuperPowersList(){
    $http({
      method: 'GET',
      url: '/powers'
    }).then(function(response){
      console.log(response.data);
      self.powersArray = response.data;
    });
  }
}]);
