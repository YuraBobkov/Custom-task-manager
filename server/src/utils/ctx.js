'use strict';

const { prop, pipe, is, map, toPairs, fromPairs } = require('ramda');
const { parse } = require('qs');

const isString = is(String);

const transformSortValue = (direction) => {
  if (direction === 'asc') {
    return 1;
  }
  if (direction === 'des') {
    return -1;
  }
  return null;
};

const getQuery = pipe(
  prop('querystring'),
  parse,
  toPairs,
  map(([key, value]) => {
    if (isString(value)) {
      return [key, parse(value)];
    }

    return [key, value];
  }),
  fromPairs,
);

const prepareSortParams = (sort) => {
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
  getQuery,
  prepareSortParams,
};
