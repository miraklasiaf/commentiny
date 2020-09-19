import { db } from './firebase-admin'
import { compareDesc, parseISO } from 'date-fns'

export async function getAllComment(siteId, route) {
  try {
    let ref = db
      .collection('comment')
      .where('siteId', '==', siteId)
      .where('status', '==', 'active')

    if (route) {
      ref = ref.where('route', '==', route)
    }

    const snapshot = await ref.get()
    const comment = []

    snapshot.forEach((doc) => {
      comment.push({ id: doc.id, ...doc.data() })
    })

    comment.sort((a, b) => compareAsc(parseISO(a.createdAt), parseISO(b.createdAt)))

    return { comment }
  } catch (error) {
    return { error }
  }
}

export async function getSite(siteId) {
  const doc = await db.collection('sites').doc(siteId).get()
  const site = { id: doc.id, ...doc.data() }

  return { site }
}

export async function getAllSites() {
  const snapshot = await db.collection('sites').get()

  const sites = []

  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() })
  })

  return { sites }
}

export async function getUserSites(uid) {
  const snapshot = await db.collection('sites').where('authorId', '==', uid).get()

  const sites = []

  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() })
  })

  sites.sort((a, b) => compareDesc(parseISO(a.createdAt), parseISO(b.createdAt)))

  return { sites }
}

export async function getAllCommentForSites(uid) {
  const { sites } = await getUserSites(uid)

  if (!sites.length) {
    return { comment: [] }
  }

  const siteIds = sites.map((site) => site.id)

  const snapshot = await db.collection('comment').where('siteId', 'in', siteIds).get()

  const comment = []

  snapshot.forEach((doc) => {
    comment.push({ id: doc.id, ...doc.data() })
  })

  return { comment }
}
