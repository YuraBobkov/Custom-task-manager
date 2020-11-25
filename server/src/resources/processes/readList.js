'use strict';

const { getCollection } = require('../../mongo');
const { normalizeRecord } = require('../../utils/documents');

const readList = async (ctx) => {
  const collection = await getCollection('processes');

  const res = await collection.find();

  const items = await res.toArray();

  ctx.body = { processes: items.map(normalizeRecord) };
};

module.exports = readList;
