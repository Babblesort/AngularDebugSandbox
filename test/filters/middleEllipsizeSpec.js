describe('Filter: middleEllipsize', function () {

  let middleEllipsizeFilter;
  let beforeEachSetup = () => {
    module('sandbox');
    inject(_middleEllipsizeFilter_ => middleEllipsizeFilter = _middleEllipsizeFilter_);
  }
  beforeEach(beforeEachSetup);

  it('returns text unchanged if text length less <= maxCharacters', function () {
    expect(middleEllipsizeFilter('abc', 4)).to.equal('abc');
    expect(middleEllipsizeFilter('abcd', 4)).to.equal('abcd');
  });

  it('returns empty string if text is null or undefined', function () {
    expect(middleEllipsizeFilter(null, 4)).to.equal('');
    expect(middleEllipsizeFilter(undefined, 4)).to.equal('');
  });

  it('returns text changed if text length > maxCharacters', function () {
    expect(middleEllipsizeFilter('abcde', 4)).to.equal('a...');
    expect(middleEllipsizeFilter('abcdefg', 5)).to.equal('a...g');
    expect(middleEllipsizeFilter('abcdefgh', 7)).to.equal('ab...gh');
  });

  it('favors front half of text when peforming ellipsis and text cannot be divided evenly', function () {
    expect(middleEllipsizeFilter('abcdefgh', 6)).to.equal('ab...h');
    expect(middleEllipsizeFilter('abcdefghi', 8)).to.equal('abc...hi');
  });

  it('uses custom ellipsisText if passed in', function () {
    expect(middleEllipsizeFilter('abcdefgh', 6, '!!')).to.equal('ab!!gh');
    expect(middleEllipsizeFilter('abcdefghi', 7, '!!')).to.equal('abc!!hi');
  });

  it('returns text unchanged if ellipsisText length <= maxCharacters', function () {
    expect(middleEllipsizeFilter('abcd', 3)).to.equal('abcd');
    expect(middleEllipsizeFilter('abcd', 4, '!-!-')).to.equal('abcd');
  });
});
