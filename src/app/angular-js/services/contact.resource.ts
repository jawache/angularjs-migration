import * as angular from "angular";

export class Contact {
  private apiRoot: string = "http://localhost:3000/contacts";
  private $http;

  static $inject = ["$http"];
  constructor($http: any) {
    this.$http = $http;
  }

  // query(params: {string: string}) {
  query(params: any) {
    return this.$http.get(this.apiRoot, {params});
  }

  get(id: any, params: any) {
    return this.$http.get(`${this.apiRoot}/${id}`, {params});
  }

  save(contact: any) {
    return this.$http.post(this.apiRoot, contact);
  }

  update(contact: any) {
    return this.$http.put(`${this.apiRoot}/${contact.id}`, contact);
  }

  remove(contact: any) {
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
