(function() {
  function NewCtrl($http) {
    //http .get call to localhost:4000
    this.addTask = function() {
      $http.post('http://localhost:4000/items', {item: {name: 'foo'}})
    }
    //JSON.parse(data)
    //store in a var of 'tasks'
  }

  angular
    .module('blocitOff')
    .controller('NewCtrl', ['$http', NewCtrl]);
})();
