(function() { // Creatung an IIFE

    var app = angular.module("githubApi", []) // Creating the module

      app.controller("MainCtrl", function($scope, $http) {
        var s = $scope
        var h = $http

      // Where I get all the shit!
      var onUserComplete = function(response) {
          s.user = response.data
          h.get(s.user.repos_url)
              .then(onRepos, onError)
      }

      var onRepos = function(response) {
          s.repos = response.data
      }

      // If an error accure
      var onError = function(reason) {
        s.error = "I couldn't load your shit!"
      }

      s.search = function(username) {
          $http.get("https://api.github.com/users/" + username) // Requesting the data from the API. Returns a promise
            .then(onUserComplete, onError) // Processing the result
      }

      s.message = "Github Viewer"
      s.repoSortOrder = "-stargazers_count"

      })
    //app.controller = ("MainCtrl", ["$scope", "$http", MainCtrl])
  }())
