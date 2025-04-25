import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  GATEWAY_PORT: number;
  NATS_SERVER: string;
}

const envSchema = joi
  .object<EnvVars>({
    GATEWAY_PORT: joi.number().required(),
    NATS_SERVER: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envSchema.validate({
  ...process.env,
});

if (error) throw new Error(`Error on environment variables: ${error.message}`);

const envVars: EnvVars = value;

export const envs = {
  port: envVars.GATEWAY_PORT,
  nats: envVars.NATS_SERVER,
};
