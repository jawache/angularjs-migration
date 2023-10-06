import * as angular from "angular";

let SpinnerComponent = {
  selector: "ccSpinner",
  templateUrl: "templates/spinner.html",
  bindings: {
    isLoading: "=",
    message: "@"
  },
  controller: class SpinnerController {
    private isLoading: boolean;
    private message: string;
  }
}

angular.module("codecraft").component(SpinnerComponent.selector, SpinnerComponent);

// angular
//   .module("codecraft")
//   .directive("ccSpinner", function() {
//     return {
//       restrict: "AE",
//       templateUrl: "templates/spinner.html",
//       scope: {
//         isLoading: "=",
//         message: "@"
//       }
//     };
//   });
