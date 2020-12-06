/* eslint-disable new-cap */
'use strict';

const { ObjectId } = require('mongodb');

const { getCollection } = require('../../mongo');
const { normalizeRecord } = require('../../utils/documents');

const readList = async (ctx) => {
  const collection = await getCollection('jobs');
  const { processId } = ctx.request.query;

  const findProps = processId
    ? {
        processId: ObjectId(processId),
      }
    : {};

  const res = await collection.find(
    ctx.request.query ? { ...ctx.request.query, ...findProps } : {},
  );

  const items = await res.toArray();

  ctx.body = { jobs: items.map(normalizeRecord) };
};

module.exports = readList;
