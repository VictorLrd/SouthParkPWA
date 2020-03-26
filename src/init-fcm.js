import * as firebase from 'firebase/app'
import 'firebase/messaging'

const initializedFirebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBvg-kR6S-TGZ2HNot8fXJcVu1x0ose3QY',
  authDomain: 'southparkpwa.firebaseapp.com',
  databaseURL: 'https://southparkpwa.firebaseio.com',
  projectId: 'southparkpwa',
  storageBucket: 'southparkpwa.appspot.com',
  messagingSenderId: '275110429459',
  appId: '1:275110429459:web:f820f05d3d8d2dec2d10e6',
  measurementId: 'G-2RH9DFFW3Y',
  userVisibleOnly: true
})

const messaging = initializedFirebaseApp.messaging()

messaging.usePublicVapidKey(
  'BLE42cDWYSyuw9Kzq28_faZRN308ijSd0N56j8onaNKp_0N9jNStg8nbVlEEtnWSpp3yw5tOoJKpHKOnr5DdWeQ'
)

export { messaging }
