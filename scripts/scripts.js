"use strict";angular.module("controllers",[]),angular.module("services",[]),angular.module("webApp",["services","controllers"]),angular.module("controllers").controller("MainCtrl",["$scope","EngineerInfoService",function(a,b){b.info().then(function(b){a.info=b})}]),angular.module("services").service("EngineerInfoService",["$q","$http",function(a,b){function c(a,c){b({method:"GET",url:a}).success(c)}this.info=function(){var b=a.defer();return c("data/resume.xml",function(a){function c(a){for(var b in a){var d=a[b];_.isObject(d)&&(d._array&&(a[b]=_.isArray(d.item)?d.item:[d.item]),c(d))}return a}var d=c((new X2JS).xml_str2json(a).data);b.resolve(d)}),b.promise}}]);