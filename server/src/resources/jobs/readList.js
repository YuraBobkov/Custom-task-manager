'use strict';

const { ObjectId } = require('mongodb');
const { getCollection } = require('../../mongo');

const readList = async (ctx) => {
  const collection = await getCollection('jobs');
  const { processId } = ctx.request.query;

  const res = await collection.find({
    // eslint-disable-next-line new-cap
    processId: ObjectId(processId),
  });

  const items = await res.toArray();

  ctx.body = items;
};

module.exports = readList;
