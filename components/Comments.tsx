import { fetchComments } from '@/utils/fetchComments';
import { Comment } from '@prisma/client';
import CommentCard from './CommentCard';
import CommentField from './CommentField';

interface CommentsProps {
  postSlug: string;
}

// TODO! Handle posting a new comment

async function Comments({ postSlug }: CommentsProps) {
  const comments: Comment[] = await fetchComments(postSlug);

  return (
    <div className='w-full'>
      <h3 className='text-primary text-4xl mb-12 text-center'>Comments</h3>
      <CommentField postSlug={postSlug} />
      {comments.map((comment) => (
        <CommentCard comment={comment} key={comment.id} />
      ))}
    </div>
  );
}

export default Comments;
