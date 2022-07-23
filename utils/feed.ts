import axios, { AxiosResponse } from 'axios'
import { API_URL } from '@/configs'
import { IPost, IComment } from '@/types'

export const getPosts = async (): Promise<AxiosResponse<IPost[]>> =>
  axios.get(`${API_URL}/posts`)

export const getCommentsByPostId = async (
  postId: number
): Promise<AxiosResponse<IComment[]>> =>
  axios.get(`${API_URL}/posts/${postId}/comments`)
