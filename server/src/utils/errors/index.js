'use strict';

const {
  QUERY,
  BODY,
  UNAUTHORIZED,
  INVALID_CONTENT_TYPE,
  INVALID_RECAPTCHA_TOKEN,
  NOT_FOUND,
} = require('./codes');
const { createError } = require('./utils');

const createQueryValidationError = (errors) =>
  createError({
    code: QUERY,
    message: 'Validation Failed',
    details: errors,
  });

const createPayloadValidationError = (errors) =>
  createError({
    code: BODY,
    message: 'Validation Failed',
    details: errors,
  });

const createUnauthorizedError = () =>
  createError({
    code: UNAUTHORIZED,
    message: 'Unauthorized',
    details: null,
  });

const createNotFoundError = () =>
  createError({
    code: NOT_FOUND,
    message: 'Not Found',
    details: null,
  });

const createContentTypeError = () =>
  createError({
    code: INVALID_CONTENT_TYPE,
    message: 'Content-Type must be application/json',
    details: null,
  });

const createInvalidRecaptchaTokenError = () =>
  createError({
    code: INVALID_RECAPTCHA_TOKEN,
    message: 'Invalid reCAPTCHA token',
    details: null,
  });

module.exports = {
  createQueryValidationError,
  createPayloadValidationError,
  createUnauthorizedError,
  createNotFoundError,
  createContentTypeError,
  createInvalidRecaptchaTokenError,
};
