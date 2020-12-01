/* eslint-disable new-cap */
'use strict';

const { ObjectId } = require('mongodb');
const { omit } = require('ramda');
const { getCollection } = require('../mongo/db');

const normalizeRecord = (data) => ({
  id: data._id,
  ...omit(['_id'], data),
});

const getProcessJobsStatuses = async (id) => {
  const collection = await getCollection('jobs');

  const jobsStatuses = await collection
    .find({ processId: ObjectId(id) })
    .map((job) => job.status)
    .toArray();

  return jobsStatuses;
};

const calculateProcessStatus = (statuses) => {
  if (statuses.every((el) => el === 'succeed')) {
    return 'finished';
  }
  if (statuses.every((el) => el === 'failed')) {
    return 'failed';
  }
  if (statuses.some((el) => el === 'running')) {
    return 'inProgress';
  }

  return 'pending';
};

const createProcessStatus = async (process) => {
  const jobsStatuses = await getProcessJobsStatuses(process._id);

  const status = calculateProcessStatus(jobsStatuses);

  return await {
    ...process,
    status,
  };
};

module.exports = {
  createProcessStatus,
  normalizeRecord,
};
