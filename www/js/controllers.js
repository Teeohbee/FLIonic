var app = angular.module('starter.controllers', ['ionic'])

app.controller('homeCtrl', function($scope, $localstorage, $state) {
  $scope.character = $localstorage.getObject('charAbilities');
  console.log($scope.character);

  $scope.deleteChar = function() {
    $localstorage.destroyObject('charAbilities');
    $state.go('home');
  };
});

app.controller('newCtrl', function($scope, $localstorage, $state) {

  $scope.professions = professions;

  $scope.change = function(selection) {
    $scope.selectedProfession = selection
  };

  $scope.createChar = function(profession) {
    $localstorage.setObject('charAbilities', profession);
    $state.go('home');
  };

});
