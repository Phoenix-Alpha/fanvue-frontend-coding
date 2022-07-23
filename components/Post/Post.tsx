import {
  Button,
  Card,
  CardContent,
  Grid,
  styled,
  Typography} from '@mui/material'
import { FC, memo } from 'react'

import { Comment } from '@/components'
import { usePost } from '@/hooks'
import { IPost } from '@/types'

// Simple exmaple using styled...
const PostContainer = styled(Grid)(() => ({
  width: '100%'
}))

export interface IPostProps {
  post: IPost
}

export const Post: FC<IPostProps> = memo(({ post }: IPostProps) => {
  const { showComment, comments, handleCommentClick } = usePost(post)

  return (
    <PostContainer item>
      <Card sx={{ display: 'flex' }}>
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h5">
            {post.title}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {post.body}
          </Typography>
          <Button color="primary" onClick={handleCommentClick}>
            Comments...
          </Button>
          {showComment && (
            <Grid
              container
              flexDirection="column"
              alignItems="center"
              marginX="auto"
              spacing={2}>
              {comments.map((comment) => (
                <Comment comment={comment} key={comment.id} />
              ))}
            </Grid>
          )}
        </CardContent>
      </Card>
    </PostContainer>
  )
})

Post.displayName = 'Post'

export default Post
