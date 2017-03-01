angular.module('sandbox').component('fooRow', {
  bindings: {
    rowData: '<'
  },
  controllerAs: 'model',
  template: "<div>{{model.rowData.id}}-{{model.rowData.name}}-{{model.rowData.partNum}}</div>"
});
