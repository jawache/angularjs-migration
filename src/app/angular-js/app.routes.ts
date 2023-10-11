import * as angular from "angular";

angular
  .module("codecraft")
  .config(["$stateProvider", "$urlRouterProvider", function($stateProvider: any, $urlRouterProvider: any) {
    $stateProvider
      .state("list", {
        url: "/",
        views: {
          main: {
            template: "<person-list></person-list>",
          },
          search: {
            template: "<search></search>",
          }
        }
      })
      .state("edit", {
        url: "/edit/:email",
        views: {
          main: {
            template: "<person-edit></person-edit>",
          }
        }
      })
      .state("create", {
        url: "/create",
        views: {
          main: {
            template: "<person-create></person-create>",
          }
        }
      });

    $urlRouterProvider.otherwise("/");
  }]);
