import type { BaseDomainEvent } from "eventive";

export type CommentEvent =
  | BaseDomainEvent<
      "v1",
      "create",
      {
        authorName: string;
        content: string;
        password: string;
      }
    >
  | BaseDomainEvent<
      "v1",
      "update",
      {
        content: string;
      }
    >
  | BaseDomainEvent<"v1", "delete", {}>;
