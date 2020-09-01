import * as angular from 'angular';
import { IContact } from '../services/contact.service';

const COMPONENT_NAME: string = 'ccCard'

interface ICardController {
    deleteUser: () => Promise<void>
}

class CardController implements ICardController, angular.IController {

    private isDeleting: boolean
    public user: IContact

    constructor(private ContactService) {
        this.isDeleting = false
    }

    public async deleteUser() {
        this.isDeleting = true
        await this.ContactService.removeContact(this.user)
        this.isDeleting = false
    }
}

class CardComponent implements angular.IComponentOptions {
    public templateUrl: string
    public bindings: {[boundProperty: string]: string}
    public controllerAs: string
    public controller: any 

    constructor() {
        this.templateUrl = 'templates/card.html'
        this.bindings = {
            user: '='
        }
        this.controllerAs = COMPONENT_NAME
        this.controller = CardController
    }
}

angular
    .module('codecraft')
    .component(COMPONENT_NAME, new CardComponent())