import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PersonListComponent } from "./components/person-list.component";
import { PersonCreateComponent } from "./components/person-create.component";
import { PersonEditComponent } from "./components/person-edit.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
        { path: '', redirectTo: 'list', pathMatch: 'full' },
        { path: 'list', component: PersonListComponent },
        { path: 'create', component: PersonCreateComponent },
        { path: 'edit/:email', component: PersonEditComponent },
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }