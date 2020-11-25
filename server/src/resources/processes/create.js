/* eslint-disable new-cap */
'use strict';

const { range, pipe, map } = require('remeda');
const { ObjectID } = require('mongodb');
const faker = require('faker');

const { getCollection } = require('../../mongo');
const { normalizeRecord } = require('../../utils/documents');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const create = async (ctx) => {
  const processesCollection = await getCollection('processes');
  const jobsCollection = await getCollection('jobs');

  const jobsCount = getRandomIntInclusive(1, 10);

  const process = {
    _id: ObjectID(),
    name: faker.name.jobTitle(),
    startTime: Date.parse(faker.date.past()),
    jobsCount,
  };

  const jobs = pipe(
    range(1, jobsCount),
    map(() => ({
      _id: ObjectID(),
      processId: process._id,
      name: faker.name.jobType(),
      status: 'failed',
    })),
  );

  const processesResponse = await processesCollection.insertOne(process);
  const jobsResponse = await jobsCollection.insertMany(jobs);

  const normalizedJobs = jobsResponse.ops.map(normalizeRecord);
  const normalizedProcess = normalizeRecord(processesResponse.ops[0]);

  ctx.status = 201;
  ctx.body = { processes: [normalizedProcess], jobs: normalizedJobs };
};

module.exports = create;
