var app = angular.module('budget', ['ionic', 'firebase']);

var baseUrl = "https://luminous-torch-9880.firebaseio.com";


app.controller('BudgetCtrl', BudgetCtrl);
app.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/category')  
  
  $stateProvider.state('category', {
    url: '/category?cat',
    templateUrl: '../partials/categories.html'
  })
})

BudgetCtrl.$inject = [
  "$scope",
  "$firebaseArray"
];

function BudgetCtrl(
  $scope, 
  $firebaseArray
 ) {
  var ref = new Firebase(baseUrl.concat("/categories"));
  
  // download the data into a local object
  $scope.categories = $firebaseArray(ref);
  
  $scope.lastUrl = "";
  
    $scope.currentCat = "";
  
  $scope.addAmount = function(categoryName, amount) {
    var update = new Firebase(baseUrl);
    var categoryRef = update.child("categories");
  
  categoryRef.child(categoryName).update({
      amount: amount
    });  
  }
  
    $scope.backPressed = function() {
      $scope.lastUrl = "";
  }
  
  $scope.showSubCategories = function(categoryName) {
    
    var urlString = "";    
    if ($scope.lastUrl == "") {
      urlString = baseUrl.concat("/categories/").concat(categoryName)
    }
    else {
       urlString = $scope.lastUrl.concat("/").concat(categoryName);
    }
    
    var ref = new Firebase(urlString);
    $scope.categories = $firebaseArray(ref);
    
    $scope.lastUrl = urlString;
    $scope.currentCat = categoryName;
    
  } 
  
  $scope.getTotal = function(category) {
    
    
  }
}

