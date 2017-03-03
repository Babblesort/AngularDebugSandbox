angular.module('sandbox').filter('middleEllipsize', () => {
  return (text, maxCharacters = 25, ellipsisText = '...') => {
    text = text || '';
    if(text.length <= maxCharacters) {
      return text;
    }
    else {
      let charPluckCount = maxCharacters - ellipsisText.length;
      let frontCount = Math.ceil(charPluckCount / 2);
      let backCount = Math.floor(charPluckCount / 2);
      let frontLetters = text.substr(0, frontCount);
      let backLetters = backCount > 0 ? text.substr(-backCount) : '';
      return `${frontLetters}${ellipsisText}${backLetters}`;
    }
  }
});
