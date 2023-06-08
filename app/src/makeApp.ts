import FastifyCookie from "@fastify/cookie";
import FastifyCors from "@fastify/cors";
import FastifyMiddie from "@fastify/middie";
import Fastify from "fastify";
import Mercurius from "mercurius";

import { env } from "./env";
import { makeSchema } from "./graphql";
import { setupClient } from "./setupClient";

export async function makeApp() {
  /**
   * Setup Fastify and Plugins
   */
  const app = Fastify();

  await app.register(FastifyMiddie);
  await app.register(FastifyCors, {
    preflightContinue: true,
  });
  await app.register(FastifyCookie, {
    secret: env.cookieSecret,
    hook: "onRequest",
  });

  const schema = await makeSchema();

  app.register(Mercurius, {
    schema,
    graphiql: true,
  });

  /**
   * Health Check Endpoint
   */
  app.route({
    url: "/healthz",
    method: "GET",
    handler() {
      return {
        ok: true,
      };
    },
  });

  /**
   * Setup React Client (Single Page Application)
   *
   * GET  /*
   * GET  /assets/*
   */
  await setupClient(app);

  /**
   * Waiting for Fastify Plugins...
   */
  await app.ready();

  return app;
}
