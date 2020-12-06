'use strict';

const { parse } = require('qs');

const transformSortValue = (direction) => {
  if (direction === 'asc') {
    return 1;
  }
  if (direction === 'des') {
    return -1;
  }
  return null;
};

const prepareSortParams = (ctx) => {
  const sort = parse(ctx.querystring);
  const entries = Object.entries(sort);

  return entries.reduce((acc, entry) => {
    const [key, value] = entry;
    if (!transformSortValue(value)) {
      return {};
    }
    return { ...acc, [key]: transformSortValue(value) };
  }, {});
};

module.exports = {
  prepareSortParams,
};
