'use strict';

const { getCollection } = require('../../mongo');
const {
  normalizeRecord,
  createProcessStatus,
} = require('../../utils/documents');
const { prepareSortParams } = require('../../utils/ctx');

const readList = async (ctx) => {
  const sortParams = prepareSortParams(ctx) || {};

  const newProcesses = [];
  const collection = await getCollection('processes');
  const processes = await collection.find().sort(sortParams).toArray();

  for (const process of processes) {
    const item = await createProcessStatus(process);
    newProcesses.push(item);
  }

  ctx.body = { processes: newProcesses.map(normalizeRecord) };
};

module.exports = readList;
