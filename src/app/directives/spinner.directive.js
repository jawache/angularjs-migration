angular
  .module("codecraft")
  .directive("ccSpinner", function() {
    return {
      restrict: "AE",
      templateUrl: "templates/spinner.html",
      scope: {
        isLoading: "=",
        message: "@"
      }
    };
  });
