(function() { // IFFE

    var app = angular.module("githubApi", ["ngRoute"])

    app.config(function($routeProvider) {
        $routeProvider
            .when("/main", {
                templateUrl: "main.html",
                controller: "MainCtrl"
            })
            .otherwise({redirectTo: "/main"})
    })

}())
