import * as angular from 'angular';

const COMPONENT_NAME: string = 'personList'

interface IPersonListController {
    ContactService: any
}

class PersonListController implements IPersonListController, angular.IController {

    public ContactService

    constructor( ContactService ) {
        this.ContactService = ContactService
    }
}

class PersonListComponent implements angular.IComponentOptions {
    public templateUrl: string
    public controllerAs: string
    public controller: any

    constructor() {
        this.templateUrl = 'templates/list.html'
        this.controllerAs = COMPONENT_NAME
        this.controller = PersonListController
    }
}

angular
    .module( 'codecraft' )
    .component( COMPONENT_NAME, new PersonListComponent() )
