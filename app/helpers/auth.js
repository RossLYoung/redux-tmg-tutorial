import { ref, firebaseAuth } from 'config/constants';

// export default function auth() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve({
//             name  : 'Tyler McGinnis',
//             avatar: 'https://pbs.twimg.com/profile_images/378800000605536525/891a881bde93a1fc3e289528fb859b96_400x400.jpeg',
//             uid   : 'the-uid'
//         }), 2000);
//     });
// }

// also returns a promise
export default function auth() {
    return firebaseAuth().signInWithPopup(new firebase.auth.FacebookAuthProvider());
}


export function checkIfAuthed(store) {
    return store.getState().isAuthed;
}


export function logout() {
    return firebaseAuth().signOut();
    // console.log('Logged Out!');
}
