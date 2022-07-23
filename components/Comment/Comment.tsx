import { FC, memo } from 'react'
import { IComment } from '@/types'

import { Typography, Grid } from '@mui/material'

export interface ICommentProps {
  comment: IComment
}

export const Comment: FC<ICommentProps> = memo(
  ({ comment }: ICommentProps) => {
    return (
      <Grid item sx={{ width: '100%'}}>
        <Typography component="h3" variant="h6">
          {comment.name} ({comment.email})
        </Typography>
        <Typography variant="subtitle2" paragraph>
          {comment.body}
        </Typography>
      </Grid>
    )
  }
)

Comment.displayName = 'Comment'

export default Comment
