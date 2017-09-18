(function() {
  function HistoryCtrl($http) {
    $http.get('http://localhost:4000/').then(function(data){
      this.items = data.data
      this.email = data.data[0].user.email
      this.username = data.data[0].user.username
    }.bind(this))

    this.deleteTask = function() {
        console.log('clicked')
        $http.delete('http://localhost:4000/items/' + item.id, [])
             .then()
    }
  }

  angular
    .module('blocitOff')
    .controller('HistoryCtrl', ['$http', HistoryCtrl]);
})();
