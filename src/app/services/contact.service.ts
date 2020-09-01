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

angular
    .module( "codecraft" )
    .factory( "ContactService", function ( ContactDB: ContactDB, $rootScope, $q, toaster ) {
        const self = {
            getPerson: ( email: string ): IContact => {
                return _.find(self.persons, (person: IContact) => person.email == email)
            },
            page: 1,
            hasMore: true,
            isLoading: false,
            isSaving: false,
            isDeleting: false,
            persons: [],
            search: null,
            sorting: "name",
            ordering: "ASC",
            doSearch: function () {
                self.hasMore = true;
                self.page = 1;
                self.persons = [];
                self.loadContacts();
            },
            doOrder: function () {
                self.hasMore = true;
                self.page = 1;
                self.persons = [];
                self.loadContacts();
            },
            loadContacts: async function () {
                if ( self.hasMore && !self.isLoading ) {
                    self.isLoading = true;

                    const params: ContactRouteParams = {
                        _page: self.page,
                        _sort: self.sorting,
                        _order: self.ordering,
                        q: self.search
                    };

                    const response: angular.IHttpResponse<IContact[]> = await ContactDB.query( params )
                    self.persons.push(...response.data)

                    if ( response.data.length === 0 ) {
                        self.hasMore = false;
                    }
                    self.isLoading = false;
                    
                }
            },
            loadMore: (): void => {
                if ( self.hasMore && !self.isLoading ) {
                    self.page += 1;
                    self.loadContacts();
                }
            },
            updateContact: async ( person ): Promise<void> => {
                self.isSaving = true;
                await ContactDB.update(person)
                self.isSaving = false;
                toaster.pop( "success", "Updated " + person.name );
            },
            removeContact: async ( person ): Promise<void> => {
                self.isDeleting = true;
                const name: string = person.name;
                await ContactDB.remove(person)
                self.isDeleting = false;
                const index: number = self.persons.indexOf( person );
                self.persons.splice( index, 1 );
                toaster.pop( "success", "Deleted " + name );
            },
            createContact: async ( person ): Promise<void> => {
                self.isSaving = true;
                await ContactDB.save( person )
                self.isSaving = false;
                self.hasMore = true;
                self.page = 1;
                self.persons = [];
                self.loadContacts();
                toaster.pop( "success", "Created " + person.name );
            }
        };

        self.loadContacts();

        return self;
    } );
