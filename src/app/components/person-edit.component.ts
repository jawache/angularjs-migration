import * as angular from "angular";

let PersonEditComponent = {
  selector: "personEdit", // <person-edit></person-edit>
  templateUrl: "templates/edit.html",
  bindings: {},
  controller: class PersonEditController {
    public contacts;
    private person;
    private $state;

    static $inject = ["$stateParams", "$state", "ContactService"];
    constructor(
      $stateParams,
      $state,
      ContactService) {
      this.$state = $state;
      this.contacts = ContactService;
      this.person = this.contacts.getPerson($stateParams.email);
      console.log(this.person);
    }

    save() {
      this.contacts.updateContact(this.person).then(() => {
        this.$state.go("list");
      });
    }

    remove() {
      this.contacts.removeContact(this.person).then(() => {
        this.$state.go("list");
      });
    }
  }
}

angular.module("codecraft").component(PersonEditComponent.selector, PersonEditComponent);

// angular
//   .module("codecraft")
//   .controller("PersonEditController", ["$scope",
//     "$stateParams",
//     "$state",
//     "ContactService", function(
//     $scope,
//     $stateParams,
//     $state,
//     ContactService
//   ) {
//     $scope.contacts = ContactService;
//     $scope.person = $scope.contacts.getPerson($stateParams.email);

//     $scope.save = function() {
//       $scope.contacts.updateContact($scope.person).then(function() {
//         $state.go("list");
//       });
//     };

//     $scope.remove = function() {
//       $scope.contacts.removeContact($scope.person).then(function() {
//         $state.go("list");
//       });
//     };
//   }]);
