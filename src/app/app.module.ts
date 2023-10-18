import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {UpgradeModule} from '@angular/upgrade/static';
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
import { PersonCreateComponent } from './components/person-create.component';
import { RouterModule } from '@angular/router';
import { PersonEditComponent } from './components/person-edit.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CardComponent,
    SpinnerComponent,
    PersonListComponent,
    PersonCreateComponent,
    PersonEditComponent,
    DefaultImagePipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    LaddaModule.forRoot({
      spinnerSize: 20,
    }),
  ],
  providers: [
    UpgradeModule,
    Contact,
    ContactService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
