import * as angular from "angular";

angular
  .module("codecraft")
  .controller("PersonListController", ["$scope", "ContactService", function($scope, ContactService) {
    $scope.contacts = ContactService;
    console.log($scope.contacts);
  }]);
