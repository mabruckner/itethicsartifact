var app = angular.module('choose', []).config([
        function() {
        }]);

app.controller('WizardController',['$scope','$http',
        function($scope,$http) {
            $scope.questions = ['asdfhlkjdsa hjlksa fdsaj', 'asdlhfiuvlj ij hjidk lsj'];
            $scope.tree = {};
            $scope.current = {};
            $scope.answers = [];
            $scope.licenses = {};
                console.log($scope);
            $scope.choose = function(choice) {
                console.log($scope);
                $scope.current = $scope.current[choice];
                $scope.answers.push(choice);
            };
            $http.get('/licenses.json').then(function(dat){
                $scope.licenses = dat.data;
            },angular.noop);
            $http.get('/license_choices.json').then(function(dat){
                console.log(dat);
                $scope.tree = dat.data;
                $scope.current = $scope.tree;
            },function(err) {
                console.log("ERR");
                console.log(err);
            });
            $scope.currentquestion = 0;
        }]);
