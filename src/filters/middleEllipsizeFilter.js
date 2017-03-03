angular.module('sandbox').filter('middleEllipsize', function() {
  return function (text, maxCharacters = 5, ellipsisText = '...') {
    text = text || '';
    if(text.length <= maxCharacters || maxCharacters < ellipsisText.length + 1) {
      return text;
    }
  return text;
  }
});
