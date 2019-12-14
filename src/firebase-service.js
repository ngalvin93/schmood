import * as Firebase from 'firebase/app'
import 'firebase/database'

export function incrementUser () {
    let ref = Firebase.database().ref('/')
    ref.once('value')
    .then(function (snapshot) {
        let currentUser = snapshot.val().user
        Firebase.database().ref('/').update({
            user: currentUser + 1
        })
    })
}

export function getCurrentId () {
    let ref = Firebase.database().ref('/')
    ref.once('value')
    .then((snapshot) => {
        console.log('current id: ', snapshot.val().user)
        return snapshot.val().user
    })
}

export function saveUserState (state) {
    let ref = Firebase.database().ref('/share').push()
    // ref.once('value')
    // .then(snapshot => {
    //     let userState = snapshot.val()
    //     console.log(userState)
    // })
    ref.set({ state})
}

// export default { incrementUser, getCurrentId }