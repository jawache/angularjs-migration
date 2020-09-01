import * as angular from 'angular';
import { IContact } from '../services/contact.service';

const COMPONENT_NAME: string = 'personEdit'

interface IPersonEditController {
    save: () => Promise<void>
    remove: () => Promise<void>
}

class PersonEditController implements IPersonEditController, angular.IController {

    private person: IContact

    constructor( private ContactService,
                 private $state,
                 $stateParams: { email: string } ) {
        console.log('ContactService:', ContactService)
        console.log('stateParams:', $stateParams)
        this.person = ContactService.getPerson( $stateParams.email )
        console.log('this.person:', this.person)
    }

    public async save() {
        await this.ContactService.updateContact( this.person )
        this.$state.go( "list" );
    }

    public async remove() {
        await this.ContactService.updateContact( this.person )
        this.$state.go( "list" );
    }
}

class PersonEditComponent implements angular.IComponentOptions {
    public templateUrl: string
    public controllerAs: string
    public controller: any

    constructor() {
        this.templateUrl = 'templates/edit.html'
        this.controllerAs = COMPONENT_NAME
        this.controller = PersonEditController
    }
}


let newPersonEditComponent = new PersonEditComponent()
console.log('newPersonEditComponent:', newPersonEditComponent)

angular
    .module( 'codecraft' )
    .component( COMPONENT_NAME, new PersonEditComponent() )
