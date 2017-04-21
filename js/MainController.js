(function() { // Creating an IIFE

    var app = angular.module("githubApi") // Creating the module

      var MainCtrl = function($scope, $interval, $location) {
        var s = $scope

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
          if(countdownInterval) { // If its null
              $interval.cancel(countdownInterval)
              s.countdown = null
          }
      }

      s.username = "oskaryil"
      s.countdown = 5
      startCountDown()

  }

  app.controller = ("MainCtrl", MainCtrl)


  }())
