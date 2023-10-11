import {HttpClient} from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { downgradeInjectable } from "@angular/upgrade/static";
import * as angular from "angular";

@Injectable()
export class Contact {
  private apiRoot: string = "http://localhost:3000/contacts";

  constructor(private http: HttpClient) {}

  // query(params: {string: string}) {
  query(params: any): Promise<any> {
    return this.http.get(this.apiRoot, {params}).toPromise();
  }

  get(id: any, params: any): Promise<any> {
    return this.http.get(`${this.apiRoot}/${id}`, {params}).toPromise();
  }

  save(contact: any): Promise<any> {
    return this.http.post(this.apiRoot, contact).toPromise();
  }

  update(contact: any): Promise<any> {
    return this.http.put(`${this.apiRoot}/${contact.id}`, contact).toPromise();
  }

  remove(contact: any): Promise<any> {
    return this.http.delete(`${this.apiRoot}/${contact.id}`).toPromise();
  }
}

angular.module("codecraft").factory("Contact", downgradeInjectable(Contact));
