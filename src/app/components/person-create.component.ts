import * as angular from 'angular';

const COMPONENT_NAME: string = 'personCreate'

interface IPersonCreateController {
    ContactService: any,
    person: any,
    save: () => Promise<void>
}

class PersonCreateController implements IPersonCreateController, angular.IController {

    public ContactService
    public person

    constructor( ContactService,
                 private $state ) {
        this.ContactService = ContactService
        this.person = {}
    }

    public async save(): Promise<void> {
        await this.ContactService.createContact(this.person)
        this.$state.go( "list" );
    }
}

class PersonCreateComponent implements angular.IComponentOptions {
    public templateUrl: string
    public controllerAs: string
    public controller: any

    constructor() {
        this.templateUrl = 'templates/create.html'
        this.controllerAs = COMPONENT_NAME
        this.controller = PersonCreateController
    }
}

angular
    .module( 'codecraft' )
    .component( COMPONENT_NAME, new PersonCreateComponent() )
