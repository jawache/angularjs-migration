import * as angular from "angular";

let PersonListComponent = {
  selector: "personList", // <person-list></person-list>
  templateUrl: "templates/list.html",
  bindings: {},
  controller: class PersonListController {
    public contacts;

    static $inject = ["ContactService"];
    constructor(
      ContactService) {
      this.contacts = ContactService;
    }
  }
};

angular.module("codecraft").component(PersonListComponent.selector, PersonListComponent);

// angular
//   .module("codecraft")
//   .controller("PersonListController", ["$scope", "ContactService", function($scope, ContactService) {
//     $scope.contacts = ContactService;
//     console.log($scope.contacts);
//   }]);
