'use strict';

const {
  QUERY,
  BODY,
  UNAUTHORIZED,
  NOT_FOUND,
  INVALID_CONTENT_TYPE,
} = require('./codes');

const codeMapping = {
  [QUERY]: 422,
  [BODY]: 422,
  [UNAUTHORIZED]: 401,
  [NOT_FOUND]: 404,
  [INVALID_CONTENT_TYPE]: 406,
};

const getHttpCode = code => codeMapping[code] || 400;

const createError = data => ({
  code: getHttpCode(data.code),
  data,
});

module.exports = {
  createError,
};
