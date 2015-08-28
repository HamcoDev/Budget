// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('todo', ['ionic', 'firebase']);

app.controller('TodoCtrl', function($scope, $firebaseArray) {
  var ref = new Firebase("https://luminous-torch-9880.firebaseio.com/categories");
  
  
  // download the data into a local object
  $scope.categories = $firebaseArray(ref);
  
 // syncObject.$bindTo($scope, "data");
  
  
})

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
