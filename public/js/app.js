var jamesonart = angular.module('jamesonart', ['ui.router','ui.bootstrap','ngAnimate', 'ngSanitize']);


jamesonart.config(function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home',{
      url: '/',
      templateUrl: './views/home.html',
      controller: 'homeCtrl',
      restricted: false
    })
    .state('admin',{
      url: '/admin',
      templateUrl: './views/admin.html',
      controller: 'adminCtrl',
      restricted: true
    })
    .state('about',{
      url: '/about',
      templateUrl: './views/about.html',
      // controller: 'homeCtrl',
      restricted: false
    })
    .state('contact',{
      url: '/contact',
      templateUrl: './views/contact.html',
      // controller: 'homeCtrl',
      restricted: false
    })
    .state('traditional',{
      url: '/traditional',
      templateUrl: './views/traditional.html',
      controller: 'traditionalCtrl',
      restricted: false
    })
    .state('dimensional',{
      url: '/dimensional',
      templateUrl: './views/dimensional.html',
      controller: 'dimensionalCtrl',
      restricted: false
    })
});


jamesonart.run(function($rootScope, $state, primaryService) {
  $rootScope.$on('$stateChangeStart', function(e, to) {
    if (!to.restricted) return;

    primaryService.isLoggedIn().then(function(response){

      if (!response) {
        $state.go('home');
      }

    })




  });
});
