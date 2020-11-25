'use strict';

const { getCollection } = require('../../mongo');

const read = async (ctx) => {
  const collection = await getCollection('jobs');
  const record = await collection.findOne({ _id: ctx.params.id });

  if (!record) {
    return;
  }

  ctx.body = record;
};

module.exports = read;
