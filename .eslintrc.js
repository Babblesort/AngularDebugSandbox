module.exports = {
  "extends": "eslint:recommended",
  "plugins": [
    "import"
  ],
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "mocha": true
  },
  "globals": {
    "angular": true,
    "inject": true,
    "expect": true
  },
  "rules": {
    "no-var": 1
  }
};
