(function() {
  function SignUpCtrl($http, $cookies) {
    this.createUser = function(email, password, password_confirmation){
      $http.post('http://localhost:4000/users', {email: email, password: password, password_confirmation: password_confirmation} )
          .then(function(data){
            $cookies.put('data', data.data.id)
            alert('User Created!')
            window.location = '/'
          }, function(){
            alert('Something went wrong. Please try again')
          }
        );
    }
  }

  angular
    .module('blocitOff')
    .controller('SignUpCtrl', ['$http', '$cookies', SignUpCtrl]);
})();
