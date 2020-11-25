'use strict';

const { omit } = require('ramda');

const { getCollection } = require('../../mongo');
const { createRecord } = require('../../utils/documents');

const create = async (ctx) => {
  const { body } = ctx.request;

  const record = createRecord(body);
  const collection = await getCollection('processes');

  const res = await collection.insertOne({
    ...omit(['id'], record),
    _id: record.id,
  });

  ctx.status = 201;
  ctx.body = res.ops[0];
};

module.exports = create;
