import * as angular from 'angular';

angular
  .module("codecraft")
  .controller("PersonEditController", function(
    $scope,
    $stateParams,
    $state,
    ContactService
  ) {
    $scope.contacts = ContactService;
    $scope.person = $scope.contacts.getPerson($stateParams.email);

    $scope.save = function() {
      $scope.contacts.updateContact($scope.person).then(function() {
        $state.go("list");
      });
    };

    $scope.remove = function() {
      $scope.contacts.removeContact($scope.person).then(function() {
        $state.go("list");
      });
    };
  });
