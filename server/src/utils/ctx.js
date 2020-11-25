'use strict';

const { prop, pipe, is, map, toPairs, fromPairs } = require('ramda');
const { parse } = require('qs');

const isString = is(String);

const getQuery = pipe(
  prop('querystring'),
  parse,
  toPairs,
  map(([key, value]) => {
    if (isString(value)) {
      const number = parseInt(value, 10);

      return [key, Number.isNaN(number) ? value : number];
    }

    return [key, value];
  }),
  fromPairs,
);

module.exports = {
  getQuery,
};
