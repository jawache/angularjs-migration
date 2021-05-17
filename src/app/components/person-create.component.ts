import {Component, Inject} from "@angular/core";
import {Router} from "@angular/router";

import {ContactService} from "../services/contact.service";


@Component({
  selector: "personCreate",
  templateUrl: "app/components/person-form.html"
})
export class PersonCreateComponent {
  public person = {};
  public mode: string = "Create";

  constructor(@Inject(ContactService) public contacts: ContactService,
              private router: Router) {
    this.person = {};
  }

  save() {
    console.log("createContact");
    this.contacts.createContact(this.person)
      .then(() => {
        this.router.navigate([""]).then();
      });
  }
}
