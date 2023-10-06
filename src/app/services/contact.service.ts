import * as angular from "angular";

export class ContactService {
  private Contact;
  private toaster;
  
  private page = 1;
  private hasMore = true;
  private isLoading = false;
  private isDeleting = false;
  private isSaving = false;
  private selectedPerson = null;
  private persons = [];
  private search = null;
  private sorting = "name";
  private ordering = "ASC";

  // $q is not required here
  static $inject = ["Contact", "toaster"];
  constructor(Contact, toaster) {
    this.Contact = Contact;
    this.toaster = toaster;
    this.loadContacts();
  }

  getPerson(email) {
    console.log(email);
    for (let person of this.persons) {
      if (person.email === email) {
        return person;
      }
    }
  }

  doSearch() {
    this.hasMore = true;
    this.page = 1;
    this.persons = [];
    this.loadContacts();
  }

  doOrder() {
    this.hasMore = true;
    this.page = 1;
    this.persons = [];
    this.loadContacts();
  }

  loadContacts() {
    if (this.hasMore && !this.isLoading) {
      this.isLoading = true;

      let params = {
        _page: this.page,
        _sort: this.sorting,
        _order: this.ordering,
        q: this.search
      };

      this.Contact.query(params).then(result => {
        console.debug(result);
        for(let person of result.data) {
          this.persons.push(person);
        };

        if (!result.data) {
          this.hasMore = false;
        }
        this.isLoading = false;
      });
    }
  }

  loadMore() {
    if (this.hasMore && !this.isLoading) {
      this.page += 1;
      this.loadContacts();
    }
  }

  updateContact(person) {
    // $q is not used anymore, so instead return promise
    // var d = $q.defer();
    return new Promise<void>((resolve, reject) => {
      this.isSaving = true;
      this.Contact.update(person).then(() => {
        this.isSaving = false;
        this.toaster.pop("success", "Updated " + person.name);
        resolve();
      });
    });
  }

  removeContact(person) {
    return new Promise<void>((resolve, reject) => {
      this.isDeleting = true;
      const name = person.name;
      this.Contact.remove(person).then(() => {
        this.isDeleting = false;
        const index = this.persons.indexOf(person);
        this.persons.splice(index, 1);
        this.toaster.pop("success", "Deleted " + name);
        resolve();
      });
    });
  }

  createContact(person) {
    return new Promise<void>((resolve, reject) => {
      this.isSaving = true;
      this.Contact.save(person).then(() => {
        this.isSaving = false;
        this.hasMore = true;
        this.page = 1;
        this.persons = [];
        this.loadContacts();
        this.toaster.pop("success", "Created " + person.name);
        resolve();
      });
    });
  }
}

angular.module("codecraft").service("ContactService", ContactService);

// angular
//   .module("codecraft")
//   .factory("ContactService", ["Contact", "$rootScope", "$q", "toaster", function(Contact, $rootScope, $q, toaster) {
//     var self = {
//       getPerson: function(email) {
//         console.log(email);
//         for (var i = 0; i < self.persons.length; i++) {
//           var obj = self.persons[i];
//           if (obj.email == email) {
//             return obj;
//           }
//         }
//       },
//       page: 1,
//       hasMore: true,
//       isLoading: false,
//       isDeleting: false,
//       isSaving: false,
//       persons: [],
//       search: null,
//       sorting: "name",
//       ordering: "ASC",
//       doSearch: function() {
//         self.hasMore = true;
//         self.page = 1;
//         self.persons = [];
//         self.loadContacts();
//       },
//       doOrder: function() {
//         self.hasMore = true;
//         self.page = 1;
//         self.persons = [];
//         self.loadContacts();
//       },
//       loadContacts: function() {
//         if (self.hasMore && !self.isLoading) {
//           self.isLoading = true;

//           var params = {
//             _page: self.page,
//             _sort: self.sorting,
//             _order: self.ordering,
//             q: self.search
//           };

//           Contact.query(params, function(data) {
//             console.debug(data);
//             angular.forEach(data, function(person) {
//               self.persons.push(new Contact(person));
//             });

//             if (data.length === 0) {
//               self.hasMore = false;
//             }
//             self.isLoading = false;
//           });
//         }
//       },
//       loadMore: function() {
//         if (self.hasMore && !self.isLoading) {
//           self.page += 1;
//           self.loadContacts();
//         }
//       },
//       updateContact: function(person) {
//         var d = $q.defer();
//         self.isSaving = true;
//         person.$update().then(function() {
//           self.isSaving = false;
//           toaster.pop("success", "Updated " + person.name);
//           d.resolve();
//         });
//         return d.promise;
//       },
//       removeContact: function(person) {
//         var d = $q.defer();
//         self.isDeleting = true;
//         var name = person.name;
//         person.$remove().then(function() {
//           self.isDeleting = false;
//           var index = self.persons.indexOf(person);
//           self.persons.splice(index, 1);
//           toaster.pop("success", "Deleted " + name);
//           d.resolve();
//         });
//         return d.promise;
//       },
//       createContact: function(person) {
//         var d = $q.defer();
//         self.isSaving = true;
//         Contact.save(person).$promise.then(function() {
//           self.isSaving = false;
//           self.hasMore = true;
//           self.page = 1;
//           self.persons = [];
//           self.loadContacts();
//           toaster.pop("success", "Created " + person.name);
//           d.resolve();
//         });
//         return d.promise;
//       }
//     };

//     self.loadContacts();

//     return self;
//   }]);
