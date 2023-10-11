import * as angular from "angular";
import { ContactService } from "../../services/contact.service";

let PersonCreateComponent = {
  selector: "personCreate", // <person-create></person-create>
  templateUrl: "assets/templates/create.html",
  bindings: {},
  controller: class PersonCreateController {
    public contacts;
    private person = {};
    private $state;

    static $inject = ["$state", "ContactService"];
    constructor(
      $state: any,
      ContactService: ContactService) {
      this.$state = $state;
      this.contacts = ContactService;
    }

    save() {
      console.log("createContact");
      this.contacts.createContact(this.person).then(() => {
        this.$state.go("list");
      });
    }
  }
};

angular.module("codecraft").component(PersonCreateComponent.selector, PersonCreateComponent);

// angular
//   .module("codecraft")
//   .controller("PersonCreateController", ["$scope",
//     "$state",
//     "ContactService", function(
//     $scope,
//     $state,
//     ContactService
//   ) {
//     $scope.contacts = ContactService;
//     $scope.person = {};

//     $scope.save = function() {
//       console.log("createContact");
//       $scope.contacts.createContact($scope.person).then(function() {
//         $state.go("list");
//       });
//     };
//   }]);
