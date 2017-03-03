angular.module('sandbox').filter('middleEllipsize', () => {
  return (text, maxCharacters = 25, ellipsisText = '...') => {
    text = text || '';
    if(text.length <= maxCharacters || ellipsisText.length >= maxCharacters) {
      return text;
    }
    else {
      let charsPerSide = (maxCharacters - ellipsisText.length) / 2;
      let frontCount = Math.ceil(charsPerSide);
      let backCount = Math.floor(charsPerSide);
      let frontLetters = text.substr(0, frontCount);
      let backLetters = backCount > 0 ? text.substr(-backCount) : '';
      return `${frontLetters}${ellipsisText}${backLetters}`;
    }
  }
});
