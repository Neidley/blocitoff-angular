(function() {
  function NewCtrl($http, $cookies) {
    var id = $cookies.get('user')
    if(id) {
      this.addTask = function(task) {
        $http.post('http://localhost:4000/items', {item: {user: id, name: task}})
             .then(
               alert('Task has been added!'),
               window.location = '/'
           )
      }
    } else {
      window.location = '/login'
    }

    this.logOut = function() {
      $cookies.remove('user')
      window.location = '/login'
    }

  }

  angular
    .module('blocitOff')
    .controller('NewCtrl', ['$http', '$cookies', NewCtrl]);
})();
