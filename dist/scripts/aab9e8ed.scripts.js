"use strict";angular.module("usscApp",["ngResource"]).config(["$routeProvider",function(r){r.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("usscApp").controller("MainCtrl",["$scope","Search",function(r,e){r.search=function(){r.foundStaff=e.search(angular.toJson(r.criteria))},r.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("usscApp").factory("Search",["$resource",function(r){var e={search:{method:"POST",isArray:!0}};return r("https://signintst.ccci.org/app-ussc-app/rest/search",{},e)}]);