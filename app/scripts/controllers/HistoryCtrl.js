(function() {
  function HistoryCtrl($http, $cookies) {
    var id = $cookies.get('user')
    if(id) {
      $http.get('http://localhost:4000/?id=' + id).then(function(data){
        this.items = data.data
        this.email = data.data[0].user.email
      }.bind(this))
    } else {
      window.location = '/login'
    }

    this.logOut = function() {
      $cookies.remove('user')
      window.location = '/login'
    }

    this.deleteTask = function(item) {
      $http.delete('http://localhost:4000/items/' + item.id, [])
           .then(window.location.reload())
           .catch(function(){})
    }

    this.toggleCompleted = function(item) {
      $http.put('http://localhost:4000/items/' + item.id, {completed: !item.completed}, [])
           .then(window.location.reload())
    }
  }

  angular
    .module('blocitOff')
    .controller('HistoryCtrl', ['$http', '$cookies', HistoryCtrl]);
})();
