import type { MutationResolvers } from "../../__generated__/schema";

export const createComment: MutationResolvers["createComment"] = async (
  parent,
  args,
  ctx
) => {
  const { entity: comment, commit } = ctx.repositories.comment.create({
    eventName: "create",
    eventBody: {
      authorName: args.input.authorName,
      password: args.input.password,
      content: args.input.content,
    },
  });

  await commit();

  return {
    comment,
  };
};
