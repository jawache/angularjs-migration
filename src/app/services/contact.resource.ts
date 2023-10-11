import {HttpClient} from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Contact {
  private apiRoot: string = "http://localhost:3000/contacts";

  constructor(private http: HttpClient) {}

  query(params: {[key: string]: string}): Promise<any> {
    return this.http.get<Array<any>>(this.apiRoot, {params}).toPromise();
  }

  get(id: any, params: {[key: string]: string}): Promise<any> {
    return this.http.get<Array<any>>(`${this.apiRoot}/${id}`, {params}).toPromise();
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
