var app = angular.module('choose', []).config([
        function() {
        }]);

app.controller('WizardController',['$scope',
        function($scope) {
           $scope.currentquestion = 0;
           $scope.questions = ['asdfhlkjdsa hjlksa fdsaj', 'asdlhfiuvlj ij hjidk lsj'];
           $scope.answers = $scope.questions.forEach(function(trash) {
               return true;
           },this);
        }]);
