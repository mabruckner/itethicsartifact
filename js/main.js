var app = angular.module('choose', []).config([
        function() {
        }]);

app.controller('WizardController',['$scope','$http',
        function($scope,$http) {
            $scope.licenses = [];
            $scope.questions = ['asdfhlkjdsa hjlksa fdsaj', 'asdlhfiuvlj ij hjidk lsj'];
            $http.get('/license_choices.json').then(function(dat){
                console.log(dat);
                $scope.licenses = dat.data.licenses;
                $scope.questions = dat.data.questions;
            },function(err) {
                console.log("ERR");
                console.log(err);
            });
            $scope.currentquestion = 0;
            $scope.answers = $scope.questions.forEach(function(trash) {
                return true;
            },this);
        }]);
