import React, { useState } from "react";

type WriteNewCommentProps = {
  onComplete: () => void;
};
const WriteNewComment: React.FC<WriteNewCommentProps> = (props) => {
  const [authorName, setAuthorName] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (loading) {
      return;
    }
    setLoading(true);

    await fetch("/graphql", {
      method: "post",
      headers: (() => {
        const headers = new Headers();
        headers.set("Content-Type", "application/json");
        return headers;
      })(),
      body: JSON.stringify({
        query: `
          mutation createComment($input: CreateCommentInput!){
            createComment(input: $input) {
              comment {
                id
                createdAt
                authorName
                content
              }
            }
          }
        `,
        variables: {
          input: {
            password,
            authorName,
            content,
          },
        },
      }),
    });

    props.onComplete();
    setLoading(false);
  };

  return (
    <div>
      <h2>새 글 쓰기</h2>
      <div>
        <h3>이름</h3>
        <input
          type="text"
          value={authorName}
          onChange={(e) => {
            setAuthorName(e.target.value);
          }}
        />
      </div>
      <div>
        <h3>비밀번호</h3>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <h3>내용</h3>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      {loading ? (
        <button>loading...</button>
      ) : (
        <button onClick={onSubmit}>완료</button>
      )}
    </div>
  );
};

export default WriteNewComment;
