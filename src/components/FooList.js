angular.module('sandbox').component('fooList', {
  bindings: {
    rows: '<'
  },
  controllerAs: 'model',
  template: `<div ng-repeat="row in model.rows">
                <foo-row row-data="row"></foo-row>
              </div>`
});
