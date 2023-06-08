import type { BaseReducer } from "eventive";

import type { CommentEvent } from "./CommentEvent";
import type { CommentState } from "./CommentState";

export function makeCommentReducer(): BaseReducer<CommentEvent, CommentState> {
  return (prevState, event) => {
    switch (event.eventName) {
      case "create":
        return {
          authorName: event.body.authorName,
          password: event.body.password,
          content: event.body.content,
        };
      case "update":
        return {
          authorName: prevState.authorName,
          password: prevState.password,
          content: event.body.content,
        };
      case "delete":
        return {
          ...prevState,
          deletedAt: new Date().toISOString(),
        };
    }
  };
}
