var app = angular.module("myApp", ["ngRoute"]);

app.config(($routeProvider) => {
  
  $routeProvider
    .when("/", {
      templateUrl: "pages/home.html"
    })
    .when("/cars", {
      templateUrl: "pages/_cars.html",
      controller: "myCtrl"
    }).
      when("/cars/:state", {
        templateUrl: "pages/_cars.html",
        controller: "myCtrl"
      }).
      when("/cars/:state/:style", {
        templateUrl: "pages/_cars.html",
        controller: "myCtrl"
      }).
      when("/cars/brands", {
        templateUrl: "pages/cars/brands.html",
        controller: "myCtrl"
      }).
      when("/cars/offers", {
        templateUrl: "pages/cars/offers.html",
        controller: "myCtrl"
      })
    .when("/resources/gallery", {
      templateUrl: "pages/_resources.html",
      controller: "myCtrl"
    }).
      when("/resources/queries", {
        templateUrl: "pages/_resources.html",
        controller: "myCtrl"
      }).
      when("/resources/sitemap", {
        templateUrl: "pages/_resources.html",
        controller: "myCtrl"
      }).
      when("/resources/about", {
        templateUrl: "pages/_resources.html",
        controller: "myCtrl"
      }).
      when("/resources/contact", {
        templateUrl: "pages/_resources.html",
        controller: "myCtrl"
      })
    .when("/user/:tab?", {
      templateUrl: "pages/_user.html",
      controller: "myCtrl"
    })
    .otherwise({
      redirectTo: "/"
    });
});

app.controller('myCtrl', function ($scope, $interval, $http, $routeParams, $location) {

  $scope.state = $routeParams.state;
  $scope.style = $routeParams.style;

  $scope.getClass = function (path) {
    return ($location.path().substr(0, path.length) === path) ? 'active' : '';
  }

  $interval(function () {
    $scope.myVar = new Date().toLocaleString();
  }, 1000);
});