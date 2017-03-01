describe('Component: FooRow', function () {
  beforeEach(module('sandbox'));

  let element;
  let scope;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    element = angular.element('<foo-row row-data="someRowData"></foo-row>');
    element = $compile(element)(scope);
    scope.someRowData = {
      id: 1,
      name: 'widget',
      partNum: '666'
    };
    scope.$apply();
  }));

  it('should render the text', function () {
    let div = element.find('div');
    expect(div.text()).to.equal('1-widget-666');
  });
});
