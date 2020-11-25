'use strict';

const { MongoClient } = require('mongodb');

const { mongoUrl } = require('../config');

const client = new MongoClient(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

let db = null;

const getDb = async () => {
  if (db) {
    return db;
  }

  await client.connect();

  db = client.db('Test');

  return db;
};

const getCollection = async (name) => (await getDb()).collection(name);

module.exports = {
  getDb,
  getCollection,
};
