import { Grid, Typography } from '@mui/material'
import type { GetServerSideProps, NextPage } from 'next'

import { Post } from '@/components'
import { IPost } from '@/types'
import { getServerSidePropsForFeedPage } from '@/utils'

export interface IFeedPageProps {
  posts: IPost[]
}

const Feed: NextPage<IFeedPageProps> = ({ posts }: IFeedPageProps) => {
  return (
    <Grid
      container
      item
      flexDirection="column"
      alignItems="center"
      xs={12}
      md={6}
      marginX="auto"
      spacing={4}
      paddingY={10}>
      <Typography component="h1" variant="h3">
        Posts
      </Typography>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </Grid>
  )
}

export const getServerSideProps: GetServerSideProps = async () =>
  getServerSidePropsForFeedPage()

export default Feed
