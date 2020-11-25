'use strict';

const { getCollection } = require('../../mongo');

const readList = async (ctx) => {
  const collection = await getCollection('jobs');

  const res = await collection.find();

  const items = await res.toArray();

  ctx.body = items;
};

module.exports = readList;
