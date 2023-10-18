import * as angular from "angular";
import { Contact } from "./contact.resource";
import { Injectable } from "@angular/core";
import { downgradeInjectable } from "@angular/upgrade/static";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private page = 1;
  private hasMore = true;
  public isLoading = false;
  private isDeleting = false;
  private isSaving = false;
  private selectedPerson = null;
  public persons: any[] = [];
  public search: string = "";
  public sorting = "name";
  public ordering = "ASC";

  constructor(private contact: Contact) {
    this.loadContacts();
  }

  getPerson(email: string) {
    console.log(email);
    for (let person of this.persons) {
      if (person.email === email) {
        return person;
      }
    }
  }

  doSearch() {
    this.hasMore = true;
    this.page = 1;
    this.persons = [];
    this.loadContacts();
  }

  doOrder() {
    this.hasMore = true;
    this.page = 1;
    this.persons = [];
    this.loadContacts();
  }

  loadContacts() {
    if (this.hasMore && !this.isLoading) {
      this.isLoading = true;

      let params = {
        _page: this.page.toString(),
        _sort: this.sorting,
        _order: this.ordering,
        q: this.search
      };

      this.contact.query(params).then((result: any) => {
        console.debug(result);
        for(let person of result) {
          this.persons.push(person);
        };

        if (!result) {
          this.hasMore = false;
        }
        this.isLoading = false;
      });
    }
  }

  loadMore() {
    if (this.hasMore && !this.isLoading) {
      this.page += 1;
      this.loadContacts();
    }
  }

  updateContact(person: any) {
    return new Promise<void>((resolve, reject) => {
      this.isSaving = true;
      this.contact.update(person).then(() => {
        this.isSaving = false;
        // this.toaster.pop("success", "Updated " + person.name);
        resolve();
      });
    });
  }

  removeContact(person: any) {
    return new Promise<void>((resolve, reject) => {
      this.isDeleting = true;
      const name = person.name;
      this.contact.remove(person).then(() => {
        this.isDeleting = false;
        const index = this.persons.indexOf(person);
        this.persons.splice(index, 1);
        // this.toaster.pop("success", "Deleted " + name);
        resolve();
      });
    });
  }

  createContact(person: any) {
    return new Promise<void>((resolve, reject) => {
      this.isSaving = true;
      this.contact.save(person).then(() => {
        this.isSaving = false;
        this.hasMore = true;
        this.page = 1;
        this.persons = [];
        this.loadContacts();
        // this.toaster.pop("success", "Created " + person.name);
        resolve();
      });
    });
  }
}
