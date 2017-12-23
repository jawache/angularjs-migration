angular
  .module("codecraft")
  .controller("PersonListController", function($scope, ContactService) {
    $scope.contacts = ContactService;
  });
