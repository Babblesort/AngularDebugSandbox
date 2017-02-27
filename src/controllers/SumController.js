let parseOrZero = num => parseInt(num, 10) || 0;

angular.module('sandbox').controller('SumController', $scope => {
  $scope.data = {
    num1: 0,
    num2: 0,
    sum: 0,
  };
  $scope.onNumChange = () => {
    $scope.data.sum = parseOrZero($scope.data.num1) + parseOrZero($scope.data.num2);
  };
});
