import * as angular from 'angular';

const COMPONENT_NAME: string = 'ccSpinner'

interface ISpinnerController {
    ContactService: any,
    loadMore: () => void
}

class SpinnerController implements ISpinnerController, angular.IController {

    public ContactService
    public isLoading: boolean
    public message: string

    constructor( ContactService ) {
        this.ContactService = ContactService
    }

    public loadMore(): void {
        this.ContactService.loadMore()
    }
}

class SpinnerComponent implements angular.IComponentOptions {
    public restrict: string
    public templateUrl: string
    public controllerAs: string
    public controller: any
    public bindings: { [ boundProperty: string ]: string }

    constructor() {
        this.restrict = 'AE'
        this.templateUrl = 'templates/spinner.html'
        this.controllerAs = COMPONENT_NAME
        this.controller = SpinnerController
        this.bindings = {
            isLoading: '=',
            message: '@'
        }
    }
}

angular
    .module( 'codecraft' )
    .component( COMPONENT_NAME, new SpinnerComponent() )
