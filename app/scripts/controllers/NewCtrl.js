(function() {
  function NewCtrl($http) {
    //http .get call to localhost:4000
    this.addTask = function(task) {
      $http.post('http://localhost:4000/items', {item: {name: task}})
           .then(alert('Task has been added!'),
           window.location.reload()
         )
    }
  }

  angular
    .module('blocitOff')
    .controller('NewCtrl', ['$http', NewCtrl]);
})();
