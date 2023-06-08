import type { CommentRepository } from "../repositories";

export type Context = {
  repositories: {
    comment: CommentRepository;
  };
};

export function defineContext(context: Context): Context {
  return context;
}
