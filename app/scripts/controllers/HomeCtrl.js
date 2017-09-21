(function() {
  function HomeCtrl($http) {
    $http.get('http://localhost:4000/').then(function(data){
      this.items = data.data
      this.email = data.data[0].user.email
      this.username = data.data[0].user.username
      console.log(data.data)
    }.bind(this))

    this.toggleCompleted = function(item) {
      $http.put('http://localhost:4000/items/' + item.id, {completed: !item.completed}, [])
           .then(window.location.reload())
    }
  }

  angular
    .module('blocitOff')
    .controller('HomeCtrl', ['$http', HomeCtrl]);
})();
