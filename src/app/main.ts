import 'angular';
import 'angular-resource';
import 'angular-animate';
import 'ng-infinite-scroll';
import 'angular-spinner';
import 'angular-auto-validate/dist/jcs-auto-validate';
import 'angular-ladda';
import 'angular-strap';
import 'angularjs-toaster';
import 'angular-ui-router';

import './app.main';
import './services';
import './filters';
import './components';
import './app.routes';

import './polyfills.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClientModule } from '@angular/common/http';

import {LaddaModule} from "angular2-ladda";
import {InfiniteScrollModule} from 'angular2-infinite-scroll';

import { Contact } from "./services/contact.resource";
import { ContactService } from "./services/contact.service";
import { toasterServiceProvider, uiRouterStateProvider } from "./ajs-upgraded-providers";
import { SearchComponent } from "./components/search.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DefaultImagePipe } from "./pipes/default-image.pipe";
import { CardComponent } from "./components/card.component";
import { SpinnerComponent } from "./components/spinner.component";
import { PersonListComponent } from "./components/person-list.component";
import { PersonCreateComponent } from "./components/person-create.component";

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LaddaModule,
    InfiniteScrollModule
  ],
  providers: [
    Contact,
    ContactService,
    toasterServiceProvider,
    uiRouterStateProvider
  ],
  declarations: [
    SearchComponent,
    DefaultImagePipe,
    CardComponent,
    SpinnerComponent,
    PersonListComponent,
    PersonCreateComponent
  ],
  entryComponents: [
    SearchComponent,
    CardComponent,
    SpinnerComponent,
    PersonListComponent,
    PersonCreateComponent
  ]
})
export class AppModule {
  // Override Angular bootstrap so it doesn't do anything
  ngDoBootstrap() {
  }
}

// Bootstrap using the UpgradeModule
platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  console.log("Bootstrapping in Hybrid mode with Angular & AngularJS");
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, ['codecraft']);
});