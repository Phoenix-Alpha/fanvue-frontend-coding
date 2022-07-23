import { FC, memo } from 'react'
import { IPhoto } from '@/types'

import { Typography, Grid, Card, CardContent, CardMedia } from '@mui/material'
// import { usePhoto } from '@/hooks'

import { Comment } from '@/components'
import Image from 'next/image'

export interface IPhotoProps {
  photo: IPhoto
}

export const Photo: FC<IPhotoProps> = memo(
  ({ photo }: IPhotoProps) => {
    return (
      <Grid item sx={{width: '100%'}}>
        <Card>
          <CardMedia sx={{ position: 'relative', width: '100%', height: '140px' }}>
            <Image src={photo.thumbnailUrl} layout='fill' objectFit="cover" objectPosition='center' alt={photo.title} unoptimized />
          </CardMedia>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {photo.title}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  }
)

Photo.displayName = 'Photo'

export default Photo
