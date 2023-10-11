import * as angular from "angular";

angular
  .module("codecraft", [
    "ngResource",
    "infinite-scroll",
    "angularSpinner",
    "jcs-autoValidate",
    "angular-ladda",
    "mgcrea.ngStrap",
    "toaster",
    "ngAnimate",
    "ui.router"
  ])
  .config(["$httpProvider",
    "$resourceProvider",
    "laddaProvider",
    "$datepickerProvider",
    function(
    $httpProvider: any,
    $resourceProvider: any,
    laddaProvider: any,
    $datepickerProvider: any
  ) {
    laddaProvider.setOption({
      style: "expand-right"
    });
    angular.extend($datepickerProvider.defaults, {
      dateFormat: "d/M/yyyy",
      autoclose: true
    });
  }]);
