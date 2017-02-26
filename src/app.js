angular.module('angulardebugsandbox', [])
.controller('SumController', $scope => {
  $scope.data = {
    num1: 0,
    num2: 0,
    sum: 0,
  };
  $scope.onNumChange = () => $scope.data.sum = parseInt($scope.data.num1, 10) + parseInt($scope.data.num2, 10);
});
