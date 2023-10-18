import * as angular from "angular";
import { ContactService } from "../services/contact.service";
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { downgradeComponent } from "@angular/upgrade/static";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "personEdit",
  templateUrl: "./person-form.component.html",
})
export class PersonEditComponent {
  private person: any;
  personForm: FormGroup;
  mode = "Edit";

  constructor(public contacts: ContactService, private router: Router, private route: ActivatedRoute) {
    const email = this.route.snapshot.paramMap.get('email');
    if (email) {
      this.person = this.contacts.getPerson(email);
      console.log(this.person);
    }
    this.personForm = new FormGroup({
      name: new FormControl(this.person.name || ''),
      email: new FormControl(this.person.email || ''),
      photo: new FormControl(this.person.photo || ''),
      sex: new FormControl(this.person.sex || 'M'),
      birthdate: new FormControl(this.person.birthdate || ''),
      phonenumber: new FormControl(this.person.phonenumber || ''),
      address: new FormControl(this.person.address || ''),
      city: new FormControl(this.person.city || ''),
      country: new FormControl(this.person.country || ''),
    });
  }

  save() {
    this.contacts.updateContact({...this.personForm.value, id: this.person.id}).then(() => {
      this.router.navigate(["list"]);
    });
  }

  remove() {
    this.contacts.removeContact(this.person).then(() => {
      this.router.navigate(["list"]);
    });
  }
}
