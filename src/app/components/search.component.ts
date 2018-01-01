import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Component, Inject } from "@angular/core";
import {
  FormGroup,
  FormControl
} from '@angular/forms';
import { downgradeComponent } from "@angular/upgrade/static";

import { ContactService } from "../services/contact.service";

@Component({
  selector: 'search',
  template: `
<form class="navbar-form navbar-left" [formGroup]="myform">

  <div class="form-group">
    <input type="text"
           class="form-control"
           id="name"
           placeholder="Search name..."
           formControlName="search"
    />
  </div>

  <div class="form-group">
    <select class="form-control"
            formControlName="sorting">
      <option value="name">Name</option>
      <option value="email">Email</option>
    </select>
  </div>

  <div class="form-group">
    <select class="form-control"
            formControlName="ordering">
      <option value="ASC">ASC</option>
      <option value="DESC">DESC</option>
    </select>
  </div>
</form>
`
})
export class SearchComponent {

  protected myform: FormGroup;

  constructor( @Inject(ContactService) private contacts: ContactService) {
    this.myform = new FormGroup({
      search: new FormControl(),
      sorting: new FormControl('name'),
      ordering: new FormControl('ASC')
    });
  }

  ngOnInit() {
    this.myform
        .valueChanges
        .debounceTime(400)
        .distinctUntilChanged()
        .do(console.log)
        .subscribe(({sorting, ordering, search}) => {
          this.contacts.sorting = sorting;
          this.contacts.ordering = ordering;
          this.contacts.search = search;
          this.contacts.doSearch();
        });
  }  
}