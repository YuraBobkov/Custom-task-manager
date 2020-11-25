'use strict';

const Koa = require('koa');
const cors = require('@koa/cors');

const bodyParser = require('koa-bodyparser');

const { port } = require('./config');
const contentType = require('./content-type');
const router = require('./router');

const app = new Koa();

app.proxy = true;

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  app.use(require('koa-logger')());
}

app.use(cors({ allowMethods: ['GET', 'POST', 'DELETE'] }));

app.use(contentType());
app.use(bodyParser());
app.use(router.routes());

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }

  console.log(`==> 🌎  Server running at http://localhost:${port}`);

  return null;
});
