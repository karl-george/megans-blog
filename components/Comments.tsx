import { fetchComments } from '@/utils/fetchComments';
import { Comment } from '@prisma/client';

interface CommentsProps {
  postSlug: string;
}

// TODO! Handle posting a new comment

async function Comments({ postSlug }: CommentsProps) {
  const comments: Comment[] = await fetchComments(postSlug);
  return (
    <div>
      {comments.map((comment) => (
        <div>{comment.desc}</div>
      ))}
    </div>
  );
}

export default Comments;
