import type { MutationResolvers } from "../../__generated__/schema";

export const deleteComment: MutationResolvers["deleteComment"] = async (
  parent,
  args,
  ctx
) => {
  const comment = await ctx.repositories.comment.findOne({
    entityId: String(args.input.id),
  });

  if (!comment) {
    throw new Error("해당하는 댓글이 존재하지 않습니다");
  }
  if (comment.state.deletedAt) {
    throw new Error("해당하는 댓글이 존재하지 않습니다");
  }
  if (comment.state.password !== args.input?.passwordConfirm) {
    throw new Error("패스워드가 일치하지 않습니다");
  }

  const { entity: deletedComment, commit } = ctx.repositories.comment.dispatch({
    entity: comment,
    eventName: "delete",
    eventBody: {},
  });

  await commit();

  return {
    comment: deletedComment,
  };
};
