import fs from "node:fs/promises";
import path from "node:path";

import { makeExecutableSchema } from "@graphql-tools/schema";

import {
  allComments,
  Comment,
  createComment,
  deleteComment,
  updateComment,
} from "./Comment";

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
        allComments,
      },
      Mutation: {
        createComment,
        updateComment,
        deleteComment,
      },
      Comment,
    },
  });

  return schema;
}
