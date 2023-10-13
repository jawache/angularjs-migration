import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {UpgradeModule} from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Contact } from './services/contact.resource';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './services/contact.service';
import { SearchComponent } from './components/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { LaddaModule } from 'angular2-ladda';
import { SpinnerComponent } from './components/spinner.component';
import { PersonListComponent } from './components/person-list.component';

@NgModule({
  declarations: [
    SearchComponent,
    CardComponent,
    SpinnerComponent,
    PersonListComponent,
    DefaultImagePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LaddaModule.forRoot({
      spinnerSize: 20,
    }),
  ],
  providers: [
    UpgradeModule,
    {provide: '$injector', useFactory: () => window['angular'].injector(['ng'])},
    Contact,
    ContactService,
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap() {}
}

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  console.log("Bootstrapping in Hybrid mode with Angular & AngularJS");
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, ['codecraft']);
});
