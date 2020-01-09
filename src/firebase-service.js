import * as Firebase from 'firebase/app'
import 'firebase/database'
import firebaseConfig from './config'
import dotenv from 'dotenv'

dotenv.config()
Firebase.initializeApp(firebaseConfig)

// const Firebase.database().ref('/') = Firebase.database().ref('/')
// const Firebase.database().ref('/share') = Firebase.database().ref('/share')

export function getCurrentId () {
  Firebase.database().ref('/').once('value')
    .then((snapshot) => {
      return snapshot.val().user
    })
}

export function saveUserState (shareData) {
  return Firebase.database().ref('/share').push(shareData).key
}

export function findShareKey (shareKey) {
  const query = Firebase.database().ref('/share').orderByKey().equalTo(shareKey)
  return query.once('value')
}
