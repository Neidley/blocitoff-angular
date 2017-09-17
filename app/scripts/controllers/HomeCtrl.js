(function() {
  function HomeCtrl($http) {
    $http.get('http://localhost:4000/').then(function(data){
      this.items = data.data
      console.log(data.data)
    }.bind(this))
  }

  angular
    .module('blocitOff')
    .controller('HomeCtrl', ['$http', HomeCtrl]);
})();
