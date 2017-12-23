angular
  .module("codecraft")
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("list", {
        url: "/",
        views: {
          main: {
            templateUrl: "templates/list.html",
            controller: "PersonListController"
          },
          search: {
            templateUrl: "templates/searchform.html",
            controller: "SearchController"
          }
        }
      })
      .state("edit", {
        url: "/edit/:email",
        views: {
          main: {
            templateUrl: "templates/edit.html",
            controller: "PersonEditController"
          }
        }
      })
      .state("create", {
        url: "/create",
        views: {
          main: {
            templateUrl: "templates/create.html",
            controller: "PersonCreateController"
          }
        }
      });

    $urlRouterProvider.otherwise("/");
  });
