import * as Firebase from 'firebase/app'
import 'firebase/database'

export function incrementUser () {
  const ref = Firebase.database().ref('/')
  ref.once('value')
    .then(function (snapshot) {
      const currentUser = snapshot.val().user
      Firebase.database().ref('/').update({
        user: currentUser + 1
      })
    })
}

export function getCurrentId () {
  const ref = Firebase.database().ref('/')
  ref.once('value')
    .then((snapshot) => {
      console.log('current id: ', snapshot.val().user)
      return snapshot.val().user
    })
}

export function saveUserState (shareData) {
  const ref = Firebase.database().ref('/share')
  return ref.push(shareData).key
}

export function findShareKey (shareKey) {
  const ref = Firebase.database().ref('/share')
  const query = ref.orderByKey().equalTo(shareKey)
  return query.once('value')
}
