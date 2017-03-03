describe('Component: FooRow', () => {
  beforeEach(module('sandbox'));

  let element;
  let scope;

  beforeEach(inject(($rootScope, $compile) => {
    scope = $rootScope.$new();
    element = angular.element('<foo-row row-data="someRowData"></foo-row>');
    element = $compile(element)(scope);
    scope.someRowData = {
      id: 1,
      name: 'widget',
      partNum: '666'
    };
    scope.$digest();
  }));

  it('should render the text', () => {
    let div = element.find('div');
    expect(div.text()).to.equal('1-widget-666');
  });
});
