import type { BaseEntity } from "eventive";

export type CommentState = {
  authorName: string;
  password: string;
  content: string;
  deletedAt?: string;
};

export type Comment = BaseEntity<CommentState>;
