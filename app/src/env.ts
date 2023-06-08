export type Env = {
  cookieSecret: string;
  dbEndpoint: string;
};

export function defineEnv(e: Env) {
  return e;
}

export const env = defineEnv({
  cookieSecret: process.env.COOKIE_SECRET as string,
  dbEndpoint: process.env.DB_ENDPOINT as string,
});
