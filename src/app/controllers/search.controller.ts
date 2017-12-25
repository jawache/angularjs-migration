import * as angular from 'angular';

angular
  .module("codecraft")
  .controller("SearchController", function($scope, ContactService) {
    $scope.contacts = ContactService;

    $scope.loadMore = function() {
      $scope.contacts.loadMore();
    };
  });
