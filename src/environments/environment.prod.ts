import { env } from './env';

export const environment = {
  production: true,
  tenant: env.tenant,
  clientId: env.clientId,
  endpoints: env.endpoints
};
