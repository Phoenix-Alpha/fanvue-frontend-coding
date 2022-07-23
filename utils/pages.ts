import { IPhoto, IPost } from "@/types"
import { getPosts, getPhotos } from "@/utils"

export const getServerSidePropsForFeedPage = async (): Promise<{
  props: {
    posts: IPost[]
  }
}> => {
  const response = await getPosts()
  return {
    props: {
      posts: [ ... response?.data ]
    }
  }
}

export const getServerSidePropsForVaultPage = async (): Promise<{
  props: {
    photos: IPhoto[]
  }
}> => {
  const response = await getPhotos()
  return {
    props: {
      photos: [ ... response?.data ]
    }
  }
}