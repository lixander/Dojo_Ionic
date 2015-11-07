
angular.module('starter.controllers',[])

.controller('RedditCtrl', ['$scope','$http', function($scope, $http){

    $scope.posts = [];

    $http.get('https://www.reddit.com/r/gaming/new/.json').success(function(posts){
        
        angular.forEach(posts.data.children, function(post){

            $scope.posts.push(post.data);
            
        });

    }); 
     
        
}]);