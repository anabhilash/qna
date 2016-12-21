(function() {
  "use strict";
  
  var app = angular.module("QnA", [
    "QnA.controllers.main",
    "QnA.controllers.question",
    "QnA.controllers.auth",
    "QnA.controllers.nav",
    "QnA.services.question",
    "QnA.services.auth",
    "ui.router"
  ]);

  app.config([
    "$stateProvider",
    "$urlRouterProvider",
    function($stateProvider, $urlRouterProvider) {
      $stateProvider.state("root", {
        abstract: true,
        views: {
          "header": {
            templateUrl: "partials/header",
            controller: "NavController"
          }
        }
      });

      $urlRouterProvider.otherwise("home");
    }
  ]);
})();
