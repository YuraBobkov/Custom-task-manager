'use strict';

const { getCollection } = require('../../mongo');
const { normalizeRecord } = require('../../utils/documents');

const read = async (ctx) => {
  const collection = await getCollection('processes');
  const record = await collection.findOne({ _id: ctx.params.id });

  if (!record) {
    return;
  }

  ctx.body = normalizeRecord(record);
};

module.exports = read;
