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
        contextType: "../graphql/defineContext#Context",
        mappers: {
          Comment: "../core/Comment/CommentState#Comment",
        },
        mapperTypeSuffix: "Model",
      },
    },
  },
};

export default config;
