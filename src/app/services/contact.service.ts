import * as angular from 'angular';
import * as _ from 'lodash'
import { ContactDB, ContactRouteParams } from './contact.resource';

export interface IContact {
    id: number,
    createdTs: string
    updatedTs: string
    name: string
    email: string
    sex: string
    birthdate: string
    phonenumber: string
    address: string
    city: string
    country: string
    photo: string
    favorite: boolean
}

/**
 * Class ContactService
 */
export class ContactService {

    // private member vars
    private page: number
    private hasMore: boolean
    private isLoading: boolean
    // private selectedPerson: IContact     // why do we need this
    private persons: IContact[]
    private search: unknown
    private sorting: string
    private ordering: string

    // public memeber vars
    public isSaving: boolean
    public isDeleting: boolean

    /**
     * Constructor
     * @param ContactDB -- injected 
     * @param toaster  -- injected
     */
    constructor( private ContactDB: ContactDB, private toaster ) {
        this.page = 1;
        this.hasMore = true;
        this.isLoading = false;
        this.isSaving = false;
        this.isDeleting = false;
        // this.selectedPerson = null;     // why do we need this
        this.persons = [];
        this.search = null;
        this.sorting = 'name';
        this.ordering = 'ASC';

        this.loadContacts()
    }

    /**
     * Returns a Contact from the DB
     * @param email 
     */
    public getPerson = ( email: string ): IContact => {
        return _.find( this.persons, ( person: IContact ) => person.email == email )
    }

    /**
     * Performs the search on the db
     */
    public doSearch = (): void => {
        this.hasMore = true;
        this.page = 1;
        this.persons = [];
        this.loadContacts();
    }

    /**
     * Performs the ordering on the results
     */
    public doOrder = (): void => {
        this.hasMore = true;
        this.page = 1;
        this.persons = [];
        this.loadContacts();
    }

    /**
     * Loads current set of contacts from the db
     */
    public loadContacts = async (): Promise<void> => {
        if ( this.hasMore && !this.isLoading ) {
            this.isLoading = true;

            const params: ContactRouteParams = {
                _page: this.page,
                _sort: this.sorting,
                _order: this.ordering,
                q: this.search
            };

            const response: angular.IHttpResponse<IContact[]> = await this.ContactDB.query( params )
            this.persons.push( ...response.data )

            if ( response.data.length === 0 ) {
                this.hasMore = false;
            }
            this.isLoading = false;
        }
    }

    /**
     * Loads the next page of contacts
     */
    public loadMore = (): void => {
        if ( this.hasMore && !this.isLoading ) {
            this.page += 1;
            this.loadContacts();
        }
    }

    /**
     * Updates the contact info for a particular person
     * @param person 
     */
    public updateContact = async ( person ): Promise<void> => {
        this.isSaving = true;
        await this.ContactDB.update( person )
        this.isSaving = false;
        this.toaster.pop( "success", "Updated " + person.name );
    }

    /**
     * Removes a contact from the DB
     * @param person 
     */
    public removeContact = async ( person ): Promise<void> => {
        this.isDeleting = true;
        const name: string = person.name;
        await this.ContactDB.remove( person )
        this.isDeleting = false;
        const index: number = this.persons.indexOf( person );
        this.persons.splice( index, 1 );
        this.toaster.pop( "success", "Deleted " + name );
    }

    /**
     * Creates a contact and adds it to the DB
     * @param person 
     */
    public createContact = async ( person ): Promise<void> => {
        this.isSaving = true;
        await this.ContactDB.save( person )
        this.isSaving = false;
        this.hasMore = true;
        this.page = 1;
        this.persons = [];
        this.loadContacts();
        this.toaster.pop( "success", "Created " + person.name );
    }
}

angular
    .module( "codecraft" )
    .service( "ContactService", ContactService )
