import * as angular from 'angular';


export let SearchComponent = {
  selector: 'search',
  template: `
<form class="navbar-form navbar-left">

  <div class="form-group">
    <input type="text"
           class="form-control"
           id="name"
           ng-model="$ctrl.contacts.search"
           ng-model-options="{ debounce: 300 }"
           placeholder="Search name..."
           ng-change="$ctrl.contacts.doSearch()"
    />
  </div>

  <div class="form-group">
    <select class="form-control"
            ng-model="$ctrl.contacts.sorting"
            ng-change="$ctrl.contacts.doSearch()">
      <option value="name">Name</option>
      <option value="email">Email</option>
    </select>
  </div>

  <div class="form-group">
    <select class="form-control"
            ng-model="$ctrl.contacts.ordering"
            ng-change="$ctrl.contacts.doSearch()">
      <option value="ASC">ASC</option>
      <option value="DESC">DESC</option>
    </select>
  </div>
</form>
`,
  bindings: {},
  controller: class SearchController {
    private contacts = null;

    constructor(ContactService) {
      this.contacts = ContactService;
    }
  }
};


angular
    .module('codecraft')
    .component(SearchComponent.selector, SearchComponent);