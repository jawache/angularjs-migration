import * as angular from 'angular';

const COMPONENT_NAME: string = 'search'

interface ISearchController {
    ContactService: any,
    loadMore: () => void
}

class SearchController implements ISearchController, angular.IController {

    public ContactService

    constructor( ContactService ) {
        this.ContactService = ContactService
    }

    public loadMore(): void {
        this.ContactService.loadMore()
    }
}

class SearchComponent implements angular.IComponentOptions {
    public templateUrl: string
    public controllerAs: string
    public controller: any

    constructor() {
        this.templateUrl = 'templates/searchform.html'
        this.controllerAs = COMPONENT_NAME
        this.controller = SearchController
    }
}

angular
    .module( 'codecraft' )
    .component( COMPONENT_NAME, new SearchComponent() )
