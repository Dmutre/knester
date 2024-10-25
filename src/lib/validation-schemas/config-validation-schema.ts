import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  PORT: Joi.number().required(),
  JWT_SECRET: Joi.string().required(),
  ACCESS_TTL: Joi.string().required(),
  JWT_TTL: Joi.string().required(),
  DATABASE_USER: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_HOST: Joi.string().required(),
  DATABASE_PORT: Joi.string().required(),
  DATABASE_NAME: Joi.string().required(),
  DATABASE_URL: Joi.string().required(),
});
