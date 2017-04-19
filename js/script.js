(function() { // Creatung an IIFE

    var app = angular.module("githubApi", []) // Creating the module

      app.controller("MainCtrl", function($scope, $http, $interval,
          $log, $anchorScroll, $location) {
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
          $location.hash("userDetails")
          $anchorScroll()
      }

      // If an error accure
      var onError = function(reason) {
        s.error = "I couldn't load your shit!"
      }

      var decrementCountdown = function() {
          s.countdown -= 1
          if(s.countdown < 1) {
              s.search(s.username)
          }
      }

      var countdownInterval = null
      var startCountDown = function() {
          countdownInterval = $interval(decrementCountdown, 1000, s.countdown)
      }

      s.search = function(username) {
          $log.info("Searching for: " + username)
          $http.get("https://api.github.com/users/" + username) // Requesting the data from the API. Returns a promise
            .then(onUserComplete, onError) // Processing the result
          if(countdownInterval) { // If its null
              $interval.cancel(countdownInterval)
              s.countdown = null
          }
      }

      s.message = "Github Viewer"
      s.repoSortOrder = "-stargazers_count"
      s.countdown = 5
      startCountDown()


    })

      app.controller = ("MainCtrl", MainCtrl)

  }())
