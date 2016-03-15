angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('cameraTabDefaultPage', {
    url: '/page2',
    templateUrl: 'templates/cameraTabDefaultPage.html',
    controller: 'cameraTabDefaultPageCtrl'
  })

  .state('cartTabDefaultPage', {
    url: '/page3',
    templateUrl: 'templates/cartTabDefaultPage.html',
    controller: 'cartTabDefaultPageCtrl'
  })

  .state('cloudTabDefaultPage', {
    url: '/page4',
    templateUrl: 'templates/cloudTabDefaultPage.html',
    controller: 'cloudTabDefaultPageCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.home', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.chat', {
    url: '/page6',
    views: {
      'tab4': {
        templateUrl: 'templates/chat.html',
        controller: 'chatCtrl'
      }
    }
  })

  .state('login', {
    url: '/page8',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page9',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('tabsController.forum', {
    url: '/page10',
    views: {
      'tab2': {
        templateUrl: 'templates/forum.html',
        controller: 'forumCtrl'
      }
    }
  })

  .state('tabsController.favorites', {
    url: '/page11',
    views: {
      'tab3': {
        templateUrl: 'templates/favorites.html',
        controller: 'favoritesCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page8')

  

});