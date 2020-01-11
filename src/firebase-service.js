import * as Firebase from 'firebase/app'
import 'firebase/database'
import firebaseConfig from './config'

Firebase.initializeApp(firebaseConfig)

const rootRef = Firebase.database().ref('/')
const shareRef = Firebase.database().ref('/share')

export function getCurrentId () {
  rootRef.once('value')
    .then((snapshot) => {
      return snapshot.val().user
    })
}

export function saveUserState (shareData) {
  return shareRef.push(shareData).key
}

export function findShareKey (shareKey) {
  const query = shareRef.orderByKey().equalTo(shareKey)
  return query.once('value')
}
