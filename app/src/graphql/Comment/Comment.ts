import type { CommentResolvers } from "../../__generated__/schema";

export const Comment: CommentResolvers = {
  id(parent) {
    return parent.entityId;
  },
  createdAt(parent) {
    return parent.createdAt;
  },
  authorName(parent) {
    return parent.state.authorName;
  },
  content(parent) {
    return parent.state.content;
  },
};
