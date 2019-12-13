import * as Firebase from 'firebase/app'
import 'firebase/database'

export function incrementUser () {
    let ref = Firebase.database().ref('/')
    ref.once('value')
    .then(function (snapshot) {
        let currentUser = snapshot.val().user
        Firebase.database().ref('/').set({
            user: currentUser + 1
        })
    })
}

export function getCurrentId () {
    let ref = Firebase.database().ref('/')
    ref.once('value')
    .then((snapshot) => {
        console.log('current id: ', snapshot)
        return snapshot
    })
}

// function saveUserState (currentId, state) {

// }

// export default { incrementUser, getCurrentId }