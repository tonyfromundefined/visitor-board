import { reverse } from "lodash-es";
import React, { useEffect, useState } from "react";

const Comments: React.FC = () => {
  const [allComments, setAllComments] = useState<Array<{
    id: string;
    authorName: string;
    content: string;
  }> | null>(null);

  useEffect(() => {
    fetch("/graphql", {
      method: "post",
      headers: (() => {
        const headers = new Headers();
        headers.set("Content-Type", "application/json");
        return headers;
      })(),
      body: JSON.stringify({
        query: `
          query allComments {
            allComments {
              id
              createdAt
              authorName
              content
            }
          }
        `,
        variables: {},
      }),
    })
      .then((res) => res.json())
      .then((json: any) => {
        setAllComments(reverse(json.data.allComments));
      });
  }, []);

  return (
    <div>
      <h1>글 목록</h1>
      {allComments?.map((comment) => (
        <div key={comment.id}>
          <h3>{comment.authorName}</h3>
          <p style={{ whiteSpace: "pre-wrap" }}>{comment.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
