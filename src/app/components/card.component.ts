import { Component, Input, Inject } from "@angular/core";
import { downgradeComponent } from "@angular/upgrade/static";

import { ContactService } from "../services/contact.service";

@Component({
  selector: "ccCard",
  template: `
<div class="col-md-6">
  <div class="well well-sm">
    <div class="row">
      <div class="col-md-4">
        <img src="{{ user.photo | defaultImage  }}"
             alt=""
             class="img-rounded img-responsive" />
      </div>
      <div class="col-md-8">
        <h4>{{ user.name }}
          <i class="fa"
             [ngClass]="{'fa-female':user.sex == 'F', 'fa-male': user.sex == 'M'}"></i>
        </h4>
        <small>{{ user.city }}, {{ user.country }}
          <i class="fa fa-map-marker"></i>
        </small>
        <p>
          <i class="fa fa-envelope-o"></i>
          {{ user.email }}
          <br />
          <i class="fa fa-gift"></i>
          {{ user.birthdate | date:"longDate"}}
        </p>


        <a class="btn btn-default btn-sm"
           [routerLink]="['/edit', user.email]">
          <i class="fa fa-pencil"></i>
          &nbsp;Edit
        </a>

        <a class="btn btn-danger btn-sm"
           [ladda]="isDeleting"
           (click)="deleteUser()">
          <i class="fa fa-trash"></i>
          &nbsp;Delete
        </a>

      </div>
    </div>
  </div>
</div>  
  `
})
export class CardComponent {
  protected isDeleting;
  @Input() private user;

  constructor( @Inject(ContactService) private contacts: ContactService) {
    this.isDeleting = false;
  }

  deleteUser() {
    this.isDeleting = true;
    this.contacts.removeContact(this.user).then(() => {
      this.isDeleting = false;
    })
  }
}