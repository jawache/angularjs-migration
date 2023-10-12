import * as angular from "angular";
import { ContactService } from "../services/contact.service";
import { Component, Input, OnInit } from "@angular/core";
import { downgradeComponent } from "@angular/upgrade/static";

@Component({
    selector: "ccCard",
    templateUrl: "./card.component.html"
})
export class CardComponent implements OnInit {
    protected isDeleting: boolean;
    @Input()
    protected user: any;

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

angular.module("codecraft").directive('ccCard', downgradeComponent({component: CardComponent, inputs: ['user']}));
