import * as angular from "angular";

export class Contact {
  private apiRoot: string = "http://localhost:3000/contacts";
  private $http;

  static $inject = ["$http"];
  constructor($http) {
    this.$http = $http;
  }

  query(params: {string: string}) {
    return this.$http.get(this.apiRoot, {params});
  }

  get(id, params: {string: string}) {
    return this.$http.get(`${this.apiRoot}/${id}`, {params});
  }

  save(contact) {
    return this.$http.post(this.apiRoot, contact);
  }

  update(contact) {
    return this.$http.put(`${this.apiRoot}/${contact.id}`, contact);
  }

  remove(contact) {
    return this.$http.delete(`${this.apiRoot}/${contact.id}`);
  }
}

angular.module("codecraft").service("Contact", Contact);

// angular
//   .module("codecraft")
//   .factory("Contact", ["$resource", function($resource) {
//     return $resource(
//       "http://localhost:3000/contacts/:id",
//       {id: "@id"},
//       {
//         update: {
//           method: "PUT"
//         }
//       }
//     );
//   }]);
