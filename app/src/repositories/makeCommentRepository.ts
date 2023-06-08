import type { Eventive } from "eventive";
import { eventive } from "eventive";
import type { Db } from "mongodb";

import type { CommentEvent, CommentState } from "../core/Comment";
import { makeCommentReducer } from "../core/Comment";

export type CommentRepository = Eventive<"v1", CommentEvent, CommentState>;

export function makeCommentRepository({ db }: { db: Db }) {
  return eventive({
    currentRevision: "v1",
    entityName: "Comment",
    db,
    mapper: (e) => e,
    reducer: makeCommentReducer(),
    dbCollectionName: "events",
  });
}
