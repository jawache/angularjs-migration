import * as angular from "angular";

let SearchComponent = {
  selector: "search", // <search></search>
  templateUrl: "templates/searchform.html",
  bindings: {},
  controller: class SearchController {
    public contacts;

    static $inject = ["ContactService"];
    constructor(ContactService) {
      this.contacts = ContactService;
    }

    loadMore() {
      this.contacts.loadMore();
    }
  }
};

angular.module("codecraft").component(SearchComponent.selector, SearchComponent);

// angular
//   .module("codecraft")
//   .controller("SearchController", ["$scope", "ContactService", function($scope, ContactService) {
//     $scope.contacts = ContactService;

//     $scope.loadMore = function() {
//       $scope.contacts.loadMore();
//     };
//   }]);
