'use strict';

const { createContentTypeError } = require('./utils/errors');

const contentType = () => (ctx, next) => {
  if (!ctx.request.idempotent && !ctx.is('application/json')) {
    const { code, data } = createContentTypeError();

    ctx.status = code;
    ctx.body = data;

    return null;
  }

  return next();
};

module.exports = contentType;
