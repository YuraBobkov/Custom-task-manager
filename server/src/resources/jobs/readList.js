/* eslint-disable new-cap */
'use strict';

const { ObjectId } = require('mongodb');

const { getCollection } = require('../../mongo');
const { normalizeRecord } = require('../../utils/documents');

const readList = async (ctx) => {
  const collection = await getCollection('jobs');
  const { processId } = ctx.request.query;

  const res = await collection.find({
    processId: ObjectId(processId),
  });

  const items = await res.toArray();

  ctx.body = { jobs: items.map(normalizeRecord) };
};

module.exports = readList;
