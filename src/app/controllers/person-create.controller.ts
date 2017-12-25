import * as angular from 'angular';

angular
  .module("codecraft")
  .controller("PersonCreateController", function(
    $scope,
    $state,
    ContactService
  ) {
    $scope.contacts = ContactService;
    $scope.person = {};

    $scope.save = function() {
      console.log("createContact");
      $scope.contacts.createContact($scope.person).then(function() {
        $state.go("list");
      });
    };
  });
