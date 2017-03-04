describe('Filter: middleEllipsize', function () {

  let filter;
  let beforeEachSetup = () => {
    module('sandbox');
    inject(_middleEllipsizeFilter_ => filter = _middleEllipsizeFilter_);
  }
  beforeEach(beforeEachSetup);

  it('returns text unchanged if text length less <= maxCharacters', function () {
    expect(filter('abc', 4)).to.equal('abc');
    expect(filter('abcd', 4)).to.equal('abcd');
  });

  it('returns empty string if text is null or undefined', function () {
    expect(filter(null, 4)).to.equal('');
    expect(filter(undefined, 4)).to.equal('');
  });

  it('returns text changed if text length > maxCharacters', function () {
    expect(filter('abcde', 4)).to.equal('a...');
    expect(filter('abcdefg', 5)).to.equal('a...g');
    expect(filter('abcdefgh', 7)).to.equal('ab...gh');
  });

  it('favors front half of text when peforming ellipsis and text cannot be divided evenly', function () {
    expect(filter('abcdefgh', 6)).to.equal('ab...h');
    expect(filter('abcdefghi', 8)).to.equal('abc...hi');
  });

  it('uses custom ellipsisText if passed in', function () {
    expect(filter('abcdefgh', 6, '!!')).to.equal('ab!!gh');
    expect(filter('abcdefghi', 7, '!!')).to.equal('abc!!hi');
  });

  it('returns text unchanged if ellipsisText length <= maxCharacters', function () {
    expect(filter('abcd', 3)).to.equal('abcd');
    expect(filter('abcd', 4, '!-!-')).to.equal('abcd');
  });

  it('treats numbers as text', function () {
    expect(filter(123456, 5)).to.equal('1...6');
    expect(filter(99999999, 6, '***')).to.equal('99***9');
  });

});
