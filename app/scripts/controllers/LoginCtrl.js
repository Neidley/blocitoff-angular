(function() {
  function LoginCtrl($http) {
    this.submitLogin = function(email, password){
      $http.post('http://localhost:4000/auth/sign_in', {email: email, password: password})
           .then(function(){
             console.log('sent')
           }, function(){
             console.log('nope')
           }
         );
    }
  }

  angular
    .module('blocitOff')
    .controller('LoginCtrl', ['$http', LoginCtrl]);
})();
