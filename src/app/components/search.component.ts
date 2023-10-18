import * as angular from "angular";
import { ContactService } from "../services/contact.service";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { downgradeComponent } from "@angular/upgrade/static";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "search",
  templateUrl: "./searchform.html",
})
export class SearchComponent implements OnInit {
  protected searchForm: FormGroup;

  constructor(private contactService: ContactService) {
    this.searchForm = new FormGroup({
      search: new FormControl(''),
      sorting: new FormControl('name'),
      ordering: new FormControl('ASC'),
    });
  }

  ngOnInit() {
    this.searchForm
        .valueChanges
        .pipe(
          debounceTime(400),
          distinctUntilChanged()
        ).subscribe(({sorting, ordering, search}) => {
          console.log(sorting, ordering, search);
          this.contactService.sorting = sorting;
          this.contactService.ordering = ordering;
          this.contactService.search = search;
          this.contactService.doSearch();
        });
  }

  loadMore() {
    this.contactService.loadMore();
  }
}

