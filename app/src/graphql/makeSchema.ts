import fs from "node:fs/promises";
import path from "node:path";

import { makeExecutableSchema } from "@graphql-tools/schema";

export async function makeSchema() {
  const typeDefs = await fs.readFile(
    path.resolve("./src/__generated__/schema.graphql"),
    "utf-8"
  );

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers: {
      Query: {
        ping: () => true,
      },
    },
  });

  return schema;
}
