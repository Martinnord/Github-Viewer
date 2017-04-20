(function(){ // IIFE

    // Creating my service
    var github = function($http) {

        var getUser = function(username) {
            return $http.get("https://api.github.com/users/" + username) // Returns a promise
                         .then(function(response) { // Call this function, passing in a response
                             return response.data // Dig out the data to that response
                         })
        }

        var getRepos = function(user) {
            return $http.get(user.repos_url)
                    .then(function(response) {
                        return response.data
                    })
        }

        return {
            getUser: getUser,
            getRepos: getRepos
        }
    }

    // Defining the module
    var module = angular.module("githubApi")

    // Registrating a service
    module.factory("github", github)
}());
