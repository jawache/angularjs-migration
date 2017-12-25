import * as angular from 'angular';

export let PersonCreateComponent = {
  selector: 'personCreate',
  template: `
<div class="col-md-8 col-md-offset-2">
  <form class="form-horizontal"
        ng-submit="$ctrl.save()"
        novalidate>
    <div class="panel panel-default">
      <div class="panel-heading">
        Create
        <div class="pull-right">
          <button class="btn btn-primary btn-sm"
                  ladda="$ctrl.contacts.isSaving"
                  type="submit">Create
          </button>
        </div>
        <div class="clearfix"></div>

      </div>
      <div class="panel-body">
        <ng-include src="'templates/form.html'"></ng-include>
      </div>
    </div>
  </form>
</div>
`,
  bindings: {},
  controller: class PersonCreateController {
    public contacts = null;
    public person = {};

    private $state = null;

    constructor($state, ContactService) {
      this.$state = $state;
      this.contacts = ContactService;
      this.person = {};
    }

    save() {
      console.log("createContact");
      this.contacts.createContact(this.person)
          .then(() => {
            this.$state.go("list");
          })
    }
  }
};

angular
    .module('codecraft')
    .component(PersonCreateComponent.selector, PersonCreateComponent);