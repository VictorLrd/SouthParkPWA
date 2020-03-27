importScripts('https://www.gstatic.com/firebasejs/7.12.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.12.0/firebase-messaging.js')

var firebaseConfig = {
  apiKey: 'AIzaSyBvg-kR6S-TGZ2HNot8fXJcVu1x0ose3QY',
  authDomain: 'southparkpwa.firebaseapp.com',
  databaseURL: 'https://southparkpwa.firebaseio.com',
  projectId: 'southparkpwa',
  storageBucket: 'southparkpwa.appspot.com',
  messagingSenderId: '275110429459',
  appId: '1:275110429459:web:f820f05d3d8d2dec2d10e6',
  measurementId: 'G-2RH9DFFW3Y',
  userVisibleOnly: true
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(function(payload) {
  const promiseChain = clients
    .matchAll({
      type: 'window',
      includeUncontrolled: true
    })
    .then(windowClients => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i]
        windowClient.postMessage(payload)
      }
    })
    .then(() => {
      return registration.showNotification('my notification title')
    })
  return promiseChain
})

self.addEventListener('notificationclick', function(event) {
  // do what you want
  // ...
})
