import * as angular from "angular";
import { ContactService } from "../services/contact.service";

let CardComponent = {
    selector: "ccCard",
    templateUrl: "assets/templates/card.html",
    bindings: {
        user: "="
    },
    controller: class CardController {
        private ContactService;
        private isDeleting: boolean;
        private user: any;

        static $inject = ["ContactService"];
        constructor(ContactService: ContactService) {
            this.ContactService = ContactService;
            this.isDeleting = false;
        }

        deleteUser() {
            this.isDeleting = true;
            this.ContactService.removeContact(this.user).then(() => {
                this.isDeleting = false;
            });
        }
    }
}

angular.module("codecraft").component(CardComponent.selector, CardComponent);

// angular
//   .module("codecraft")
//   .directive("ccCard", function() {
//     return {
//       restrict: "AE",
//       templateUrl: "assets/templates/card.html",
//       scope: {
//         user: "="
//       },
//       controller: ["$scope", "ContactService", function($scope, ContactService) {
//         $scope.isDeleting = false;
//         $scope.deleteUser = function() {
//           $scope.isDeleting = true;
//           ContactService.removeContact($scope.user).then(function() {
//             $scope.isDeleting = false;
//           });
//         };
//       }]
//     };
//   });
