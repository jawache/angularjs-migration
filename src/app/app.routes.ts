import {Routes} from "@angular/router";

import {SearchComponent} from "./components/search.component";
import {PersonListComponent} from "./components/person-list.component";
import {PersonCreateComponent} from "./components/person-create.component";
import {PersonEditComponent} from "./components/person-edit.component";

export const routes: Routes = [
  {path: '', redirectTo: '/list(header:search)', pathMatch: 'full'},
  {path: 'list', component: PersonListComponent},
  {path: 'search', component: SearchComponent, outlet: 'header'},
  {path: 'create', component: PersonCreateComponent},
  {path: 'edit/:email', component: PersonEditComponent},
];