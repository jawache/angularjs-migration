import * as angular from "angular";

angular
  .module("codecraft")
  .controller("PersonCreateController", ["$scope",
    "$state",
    "ContactService", function(
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
  }]);
