import * as angular from 'angular';
import { IContact } from './contact.service';

export type ContactRouteParams = {
    _page: number,
    _sort: string,
    _order: string,
    q: unknown
}

export class ContactDB {

    private readonly apiRoot: string = 'http://localhost:3000/contacts'
    constructor( private $http: angular.IHttpService ) { }

    query( params: ContactRouteParams ): angular.IHttpPromise<IContact[]> {
        return this.$http.get( this.apiRoot, { params } );
    }

    get( id, params?: ContactRouteParams ): angular.IHttpPromise<IContact[]> {
        return this.$http.get( this.apiRoot + '/' + id, { params } );
    }

    save( person: IContact ): angular.IHttpPromise<IContact[]> {
        return this.$http.post( this.apiRoot, person );
    }

    update( person: IContact ): angular.IHttpPromise<IContact[]> {
        return this.$http.put( this.apiRoot + '/' + person.id, person );
    }

    remove( person: IContact ): angular.IHttpPromise<IContact[]> {
        return this.$http.delete( this.apiRoot + '/' + person.id );
    }
}

angular
    .module( "codecraft" )
    .service( "ContactDB", ContactDB );