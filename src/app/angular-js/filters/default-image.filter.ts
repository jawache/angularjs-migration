import * as angular from "angular";

angular.module("codecraft").filter("defaultImage", function() {
    return function(input: any, param: any) {
      if (!param) {
        param = "/img/avatar.png";
      }
      if (!input) {
        return param;
      }
      return input;
    };
  });
  