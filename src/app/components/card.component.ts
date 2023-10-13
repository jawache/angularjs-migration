import { ContactService } from "../services/contact.service";
import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "ccCard",
    templateUrl: "./card.component.html"
})
export class CardComponent implements OnInit {
    protected isDeleting: boolean;
    @Input() user: any;

    constructor(private contactService: ContactService) {
        this.isDeleting = false;
    }

    ngOnInit(): void {
        console.log(this.user);
    }

    deleteUser() {
        this.isDeleting = true;
        this.contactService.removeContact(this.user).then(() => {
            this.isDeleting = false;
        });
    }
}
