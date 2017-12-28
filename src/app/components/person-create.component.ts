import * as angular from 'angular';

import { Inject, Component } from "@angular/core";
import { downgradeComponent } from "@angular/upgrade/static";
import { UIRouterState } from "../ajs-upgraded-providers";

import { ContactService } from "../services/contact.service";


@Component({
  selector: 'personCreate',
  templateUrl: 'app/components/person-form.html' 
})
export class PersonCreateComponent {
    public person = {};

    constructor(@Inject(ContactService) public contacts: ContactService,
                @Inject(UIRouterState) private $state) {
      this.person = {};
    }

    save() {
      console.log("createContact");
      this.contacts.createContact(this.person)
          .then(() => {
            this.$state.go("list");
          })
    }
  }

angular
    .module('codecraft')
    .directive('personCreate', downgradeComponent({
      component: PersonCreateComponent
    }));