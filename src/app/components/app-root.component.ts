import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: ` 
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" href="/">Contacts
        </a>
      </div>

      <router-outlet name="header"></router-outlet>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li [routerLinkActive]="['active']" >
            <a [routerLink]="[{outlets: {primary: 'list', header: 'search'}}]">Search</a>
          </li>
          <li [routerLinkActive]="['active']">
            <a [routerLink]="[{outlets: {primary: 'create', header: null}}]">Create</a>
          </li>
        </ul>
      </div>

    </div>
  </nav>

  <div class="container main-content">

    <toaster-container></toaster-container>

    <div class="row">

      <router-outlet></router-outlet>

    </div>
  </div>    
  `
})
export class AppRootComponent {
}


