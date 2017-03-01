let parseOrZero = num => parseInt(num, 10) || 0;
let createSumController = $scope => {
  $scope.data = {
    num1: 0,
    num2: 0,
    sum: 0,
  };
  $scope.stuffRows = [
    {
      id: 1,
      name: 'widget',
      partNum: '666'
    },
    {
      id: 2,
      name: 'gadget',
      partNum: '411'
    }

  ];
  $scope.onNumChange = () => {
    $scope.data.sum = parseOrZero($scope.data.num1) + parseOrZero($scope.data.num2);
  };
}

angular.module('sandbox').controller('SumController', createSumController);
