(function() {
  function LoginCtrl($http, $cookies) {
    this.submitLogin = function(email, password){
      $http.post('http://localhost:4000/auth/sign_in', {email: email, password: password})
           .then(function(data){
             $cookies.put('user', data.data.data.id)
             window.location = '/'
           }, function(){
               alert('Something went wrong. Try again.')
           }
         );
    }
  }

  angular
    .module('blocitOff')
    .controller('LoginCtrl', ['$http', '$cookies', LoginCtrl]);
})();
