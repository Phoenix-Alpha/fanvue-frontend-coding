import 'photoswipe/style.css'

import { Grid } from '@mui/material'
import type { GetServerSideProps, NextPage } from 'next'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import { useEffect } from 'react'

import { Photo } from '@/components'
import { IPhoto } from '@/types'
import { getServerSidePropsForVaultPage } from '@/utils'

export interface IFeedPageProps {
  photos: IPhoto[]
}

const Vault: NextPage<IFeedPageProps> = ({ photos }: IFeedPageProps) => {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + 'vault-gallery',
      children: 'a',
      pswpModule: () => import('photoswipe')
    })
    lightbox.init()

    return () => {
      lightbox.destroy()
      lightbox = null
    }
  }, [])

  return (
    <Grid
      container
      item
      spacing={2}
      className="pswp-gallery"
      id="vault-gallery"
      padding={10}>
      {photos.map((photo, index) => (
        <Photo photo={photo} key={'vault-gallery-' + index} />
      ))}
    </Grid>
  )
}

export const getServerSideProps: GetServerSideProps = async () =>
  getServerSidePropsForVaultPage()

export default Vault
