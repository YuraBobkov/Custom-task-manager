'use strict';

const Router = require('koa-router');

const processes = require('./resources/processes');
const jobs = require('./resources/jobs');

const router = new Router();

router.get('/processes', processes.readList);
router.get('/processes/:id', processes.read);
router.post('/processes', processes.create);
router.post('/processes/:id', processes.update);
router.del('/processes/:id', processes.drop);

router.get('/jobs', jobs.readList);
router.get('/jobs/:id', jobs.read);
router.post('/jobs', jobs.create);
router.post('/jobs/:id', jobs.update);
router.del('/jobs/:id', jobs.drop);

module.exports = router;
