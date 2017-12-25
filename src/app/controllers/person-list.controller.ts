import * as angular from 'angular';

angular
  .module("codecraft")
  .controller("PersonListController", function($scope, ContactService) {
    $scope.contacts = ContactService;
  });
