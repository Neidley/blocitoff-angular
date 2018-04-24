(function() {
  function LoginCtrl($http, $cookies) {
    this.submitLogin = function(email, password){
      $http.post('http://localhost:4000/sessions', {email: email, password: password})
           .then(function(data){
             $cookies.put('user', data.data.id)
             window.location = '/'
           }, function(){
               alert('Something went wrong. Please try again.')
           }
         );
    }
  }

  angular
    .module('blocitOff')
    .controller('LoginCtrl', ['$http', '$cookies', LoginCtrl]);
})();
