var app = angular.module("myApp", ["ngRoute"]);

app.config(($routeProvider) => {
  $routeProvider
    .when("/home", {
      templateUrl: "src/home.html"
    })
    .when("/products", {
      templateUrl: "src/products.html",
      controller: "myCtrl"
    }).
      when("/products/:state", {
        templateUrl: "src/products.html",
        controller: "myCtrl"
      }).
      when("/products/:state/:style", {
        templateUrl: "src/products.html",
        controller: "myCtrl"
      })
    .when("/brands", {
      templateUrl: "src/brands.html",
      controller: "myCtrl"
    })
    .when("/offers", {
      templateUrl: "src/offers.html",
      controller: "myCtrl"
    })
    .when("/gallery", {
      templateUrl: "src/gallery.html",
      controller: "myCtrl"
    })
    .when("/queries", {
      templateUrl: "src/queries.html",
      controller: "myCtrl"
    })
    .when("/sitemap", {
      templateUrl: "src/sitemap.html",
      controller: "myCtrl"
    })
    .when("/about-contact", {
      templateUrl: "src/about-contact.html",
      controller: "myCtrl"
    }).
      when("/about-contact/:tab", {
        templateUrl: "src/products.html",
        controller: "myCtrl"
      })
    .otherwise({
      redirectTo: "/home"
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