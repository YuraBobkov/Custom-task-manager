'use strict';

module.exports = {
  '**/*.{js,ts,tsx}': ['eslint --fix'],
  '**/*.{json,html,md}': ['prettier --write'],
};
