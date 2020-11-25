'use strict';

const { omit } = require('ramda');
const { getCollection } = require('../../mongo');

const update = async (ctx) => {
  const _id = ctx.params.id;
  const collection = await getCollection('jobs');
  const { body } = ctx.request;

  const attrs = { ...omit(['id'], body) };

  const res = await collection.findOneAndUpdate(
    { _id },
    { $set: attrs },
    { returnOriginal: false },
  );

  ctx.body = res.value;
};

module.exports = update;
