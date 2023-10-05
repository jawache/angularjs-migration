import * as angular from "angular";

angular
  .module("codecraft")
  .controller("SearchController", ["$scope", "ContactService", function($scope, ContactService) {
    $scope.contacts = ContactService;

    $scope.loadMore = function() {
      $scope.contacts.loadMore();
    };
  }]);
