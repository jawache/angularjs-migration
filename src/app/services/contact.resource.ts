import {HttpClient} from "@angular/common/http";
import {Injectable, Inject} from "@angular/core";
import 'rxjs/add/operator/toPromise';

export class Contact {
  private apiRoot: string = "http://localhost:3000/contacts";

  constructor(@Inject(HttpClient) private http: HttpClient) {
  }

  query(params: { [key: string]: string }): Promise<Array<any>> {
    return this.http.get<Array<any>>(this.apiRoot, { params }).toPromise();
  }

  get(id, params?: { [key: string]: string }) {
    return this.http.get(this.apiRoot + '/' + id, { params }).toPromise();
  }

  save(data: any) {
    return this.http.post(this.apiRoot, data).toPromise();
  }

  update(data: any) {
    return this.http.put(this.apiRoot + '/' + data.id, data).toPromise();
  }

  remove(data: any) {
    return this.http.delete(this.apiRoot + '/' + data.id).toPromise();
  }
}
