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
  })
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
  })
  .controller("PersonListController", function($scope, ContactService) {
    $scope.contacts = ContactService;
  })
  .controller("SearchController", function($scope, ContactService) {
    $scope.contacts = ContactService;

    $scope.loadMore = function() {
      $scope.contacts.loadMore();
    };
  });
