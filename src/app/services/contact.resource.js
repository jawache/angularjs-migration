angular
  .module("codecraft")
  .factory("Contact", function($resource) {
    return $resource(
      "http://localhost:3000/contacts/:id",
      {id: "@id"},
      {
        update: {
          method: "PUT"
        }
      }
    );
  })