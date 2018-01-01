import { Inject, Component } from "@angular/core";
import { downgradeComponent } from "@angular/upgrade/static";

import { ContactService } from "../services/contact.service";

@Component({
	selector: 'personList',
	template: `
<div class="col-md-12" >

	<div class="row"
	     infinite-scroll
       [infiniteScrollDistance]="2"
       [immediateCheck]="false"
       [infiniteScrollThrottle]="100"
       (scrolled)="contacts.loadMore()"
			>

		<ccCard  *ngFor="let person of contacts.persons"
				     [user]="person" >
		</ccCard>

	</div >

	<div *ngIf="contacts.persons.length == 0 && !contacts.isLoading">
		<div class="alert alert-info" >
			<p class="text-center" >No results found for search term '{{ contacts.search }}'</p >
		</div >
	</div >

	<ccSpinner [isLoading]="contacts.isLoading"
	            [message]="'Loading...'" ></ccSpinner >
</div >
`})
export class PersonListComponent {
	constructor( @Inject(ContactService) public contacts: ContactService) {
	}
}