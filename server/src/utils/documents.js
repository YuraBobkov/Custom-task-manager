'use strict';

const { omit } = require('ramda');

const omitReadOnlyFields = omit(['createdAt', 'updatedAt', '_id']);

const normalizeRecord = (data) => ({
  id: data._id,
  ...omit(['_id'], data),
});

module.exports = {
  omitReadOnlyFields,
  normalizeRecord,
};
