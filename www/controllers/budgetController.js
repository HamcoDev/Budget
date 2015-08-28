var app = angular.module('budget', ['ionic', 'firebase']);

app.controller('BudgetCtrl', BudgetCtrl);

BudgetCtrl.$inject = [
  "$scope",
  "$firebaseArray"
];

function BudgetCtrl(
  $scope, 
  $firebaseArray
 ) {
  var ref = new Firebase("https://luminous-torch-9880.firebaseio.com/categories");
  
  // download the data into a local object
  $scope.categories = $firebaseArray(ref);
  
  $scope.addAmount = function(categoryName, amount) {
    var update = new Firebase("https://luminous-torch-9880.firebaseio.com");
    var categoryRef = update.child("categories");
  
  categoryRef.child(categoryName).update({
      amount: amount
    });  
  }
  
  $scope.showSubCategories = function(categoryName) {
    var ref = new Firebase("https://luminous-torch-9880.firebaseio.com/categories/Travel");
    $scope.subCategories = $firebaseArray(ref);
  } 
}

