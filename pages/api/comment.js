import { auth } from '@/lib/firebase-admin'
import { getAllCommentForSites } from '@/lib/db-admin'

export default async (req, res) => {
  try {
    const { uid } = await auth.verifyIdToken(req.headers.token)
    const { comment } = await getAllCommentForSites(uid)

    res.status(200).json({ comment })
  } catch (error) {
    res.status(500).json({ error })
  }
}
