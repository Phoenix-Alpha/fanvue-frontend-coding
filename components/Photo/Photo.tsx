import { styled } from '@mui/material'
import Image from 'next/image'
import { FC, memo } from 'react'

import { IPhoto } from '@/types'

const PhotoContainer = styled('div')(() => ({
  width: 345,
  height: 200,
  position: 'relative'
}))

export interface IPhotoProps {
  photo: IPhoto
}

export const Photo: FC<IPhotoProps> = memo(({ photo }: IPhotoProps) => {
  return (
    <a
      href={photo.url}
      key={`vault-gallery-${photo.title}`}
      target="_blank"
      rel="noreferrer">
      <PhotoContainer>
        <Image
          src={photo.thumbnailUrl}
          alt={photo.title}
          layout="fill"
          objectFit="cover"
          unoptimized
        />
      </PhotoContainer>
    </a>
  )
})

Photo.displayName = 'Photo'

export default Photo
