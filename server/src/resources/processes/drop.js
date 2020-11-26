/* eslint-disable new-cap */
'use strict';

const { ObjectId } = require('mongodb');
const { getCollection } = require('../../mongo');

const drop = async (ctx) => {
  const processesCollection = await getCollection('processes');
  const jobsCollection = await getCollection('jobs');

  await processesCollection.deleteOne({ _id: ObjectId(ctx.params.id) });
  await jobsCollection.deleteMany({ processId: ObjectId(ctx.params.id) });

  ctx.status = 204;
};

module.exports = drop;
