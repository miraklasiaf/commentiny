import firebase from './firebase'

const firestore = firebase.firestore()
const app = firebase.app()

export function createUser(uid, data) {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true })
}

export function createSite(data) {
  const site = firestore.collection('sites').doc()
  site.set(data)

  return site
}

export async function updateSite(id, newValues) {
  return firestore.collection('sites').doc(id).update(newValues)
}

export async function deleteSite(id) {
  firestore.collection('sites').doc(id).delete()
  const snapshot = await firestore.collection('feedback').where('siteId', '==', id).get()

  const batch = firestore.batch()

  snapshot.forEach((doc) => {
    batch.delete(doc.ref)
  })

  return batch.commit()
}

export function createComment(data) {
  return firestore.collection('comment').add(data)
}

export function updateComment(id, newValues) {
  return firestore.collection('comment').doc(id).update(newValues)
}

export function deleteComment(id) {
  return firestore.collection('comment').doc(id).delete()
}
