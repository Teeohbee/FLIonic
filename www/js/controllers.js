var app = angular.module('starter.controllers', ['ionic'])

app.controller('homeCtrl', function($scope, $localstorage, $state) {
  $scope.character = $localstorage.getObject('charAbilities');
  console.log($scope.character);

  $scope.deleteChar = function() {
    $localstorage.clearStorage();
    console.log($scope.character);
    $state.go('new');
  };
});

app.controller('newCtrl', function($scope, $localstorage, $state) {

  $scope.professions = professions;
  $scope.selectedProfession = $scope.professions[0];

  $scope.change = function(selection) {
    $scope.selectedProfession = selection
  };

  $scope.createChar = function(profession, charName) {
    $localstorage.setObject('charAbilities', profession);
    $localstorage.setObject('charName', charName)
    $state.go('home');
  };

});
