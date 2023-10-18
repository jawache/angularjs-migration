import * as angular from "angular";
import { ContactService } from "../services/contact.service";
import { Component, Inject } from "@angular/core";
import { downgradeComponent } from "@angular/upgrade/static";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "personCreate",
  templateUrl: "./person-form.component.html",
})
export class PersonCreateComponent {
  mode = "Create";
  personForm: FormGroup;

  constructor(public contacts: ContactService, private router: Router) {
    this.personForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      photo: new FormControl(''),
      sex: new FormControl('M'),
      birthdate: new FormControl(''),
      phonenumber: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),
      country: new FormControl(''),
    });
  }

  save() {
    console.log("createContact");
    console.log(this.personForm.value);
    this.contacts.createContact(this.personForm.value).then(() => {
      console.log("createContact");
      // route to list
      this.router.navigate(["list"]);
    });
  }
}
