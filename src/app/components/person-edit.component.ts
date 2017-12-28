import * as angular from 'angular';

import { Inject, Component } from "@angular/core";
import { UIRouterState, UIRouterStateParams } from "../ajs-upgraded-providers";
import { downgradeComponent } from "@angular/upgrade/static";

import { ContactService } from "../services/contact.service";

@Component({
  selector: "personEdit",
  templateUrl: 'app/components/person-form.html'
})
export class PersonEditComponent {
    public mode: string = 'Edit';
    public person: any;

    constructor(@Inject(UIRouterStateParams) private $stateParams,
                @Inject(UIRouterState) private $state,
                @Inject(ContactService) public contacts: ContactService) {
      this.person = this.contacts.getPerson(this.$stateParams.email);
    }

    save() {
      this.contacts.updateContact(this.person).then(() => {
        this.$state.go("list");
      });
    };

    remove() {
      this.contacts.removeContact(this.person).then(() => {
        this.$state.go("list");
      });
    };

  }

angular
    .module('codecraft')
    .directive('personEdit', downgradeComponent({
      component: PersonEditComponent
    }));
