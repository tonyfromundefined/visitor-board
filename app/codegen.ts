import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  // ...
  schema: "./src/graphql/**/*.graphql",
  generates: {
    "./src/__generated__/schema.graphql": {
      plugins: ["schema-ast"],
    },
    "./src/__generated__/schema.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        useIndexSignature: true,
      },
    },
  },
};

export default config;
