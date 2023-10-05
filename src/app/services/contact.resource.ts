import * as angular from "angular";

angular
  .module("codecraft")
  .factory("Contact", ["$resource", function($resource) {
    return $resource(
      "http://localhost:3000/contacts/:id",
      {id: "@id"},
      {
        update: {
          method: "PUT"
        }
      }
    );
  }]);
