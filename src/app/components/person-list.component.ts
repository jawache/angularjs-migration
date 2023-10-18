import * as angular from "angular";
import { Component } from "@angular/core";
import { downgradeComponent } from "@angular/upgrade/static";
import { ContactService } from "../services/contact.service";

@Component({
  selector: "personList",
  templateUrl: "./person-list.component.html",
})
export class PersonListComponent {
  constructor(public contacts: ContactService) {}
  
}
