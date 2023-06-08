import type { QueryResolvers } from "../../__generated__/schema";

export const allComments: QueryResolvers["allComments"] = async (
  parent,
  args,
  ctx
) => {
  const items = await ctx.repositories.comment.all();
  return items.filter((item) => !item.state.deletedAt);
};
