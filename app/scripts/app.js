(function() {
  function config($locationProvider, $stateProvider, $sceProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl as home',
        templateUrl: '/templates/home.html'
      })
      .state('new', {
        url:'/new',
        controller: 'NewCtrl as new',
        templateUrl: 'templates/new.html'
      })
      .state('history', {
        url:'/history',
        controller: 'HistoryCtrl as history',
        templateUrl: 'templates/history.html'
      })
      .state('login', {
        url: '/login',
        controller: 'LoginCtrl as login',
        templateUrl: '/templates/login.html'
      });

      $sceProvider.enabled(false)
  }

  angular
    .module('blocitOff', ['ui.router'])
    .config(config)
})();
