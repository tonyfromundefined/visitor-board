import Comments from "../components/Comments";
import WriteNewComment from "../components/WriteNewComment";

export default function HomePage() {
  return (
    <div>
      <WriteNewComment
        onComplete={() => {
          window.location.reload();
        }}
      />
      <Comments />
    </div>
  );
}
