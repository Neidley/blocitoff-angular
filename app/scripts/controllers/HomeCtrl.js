(function() {
  function HomeCtrl($http) {
    $http.get('http://localhost:4000/').then(function(data){
      this.items = data.data
      this.email = data.data[0].user.email
      this.username = data.data[0].user.username
      console.log(data.data)
    }.bind(this))

    this.completeTask = function() {
      console.log('clicked')
      $http.put('http://localhost:4000/items/' + item.id, true || false, [])
           .then()
    }
  }

  angular
    .module('blocitOff')
    .controller('HomeCtrl', ['$http', HomeCtrl]);
})();
