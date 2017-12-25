import * as angular from 'angular';

export class Contact {
  private apiRoot: string = "http://localhost:3000/contacts";
  private $http;

  constructor($http) {
    this.$http = $http;
  }

  query(params: { string: string }) {
    return this.$http.get(this.apiRoot, { params });
  }

  get(id, params?: { string: string }) {
    return this.$http.get(this.apiRoot + '/' + id, { params });
  }

  save(data: any) {
    return this.$http.post(this.apiRoot, data);
  }

  update(data: any) {
    return this.$http.put(this.apiRoot + '/' + data.id, data);
  }

  remove(data: any) {
    return this.$http.delete(this.apiRoot + '/' + data.id);
  }
}

angular
  .module("codecraft")
  .service("Contact", Contact);
