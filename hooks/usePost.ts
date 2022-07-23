import { IComment, IPost } from "@/types"
import { useCallback, useState } from "react"
import { getCommentsByPostId } from "utils/feed"

export const usePost = (post: IPost) => {
  const [showComment, setShowComment] = useState(false)

  const [comments, setComments] = useState<IComment[]>([])

  const handleCommentClick = useCallback(async () => {
    const response = await getCommentsByPostId(post.id)
    setComments([ ...response.data])    
    setShowComment(!showComment)
  }, [showComment, setComments, post])

  return {
    showComment,
    comments,
    handleCommentClick
  }
}