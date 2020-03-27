import React, { useEffect, useState } from 'react'
import Routes from './config/routes'
import { ThemeProvider } from 'styled-components'

import { Provider } from 'react-redux'

import { store, persistor } from './config/store'
import { themeLight, themeDark } from './config/theme'
import { PersistGate } from 'redux-persist/integration/react'
import Navbar from './components/navbar'
import './App.css'
import './config/translations'
import { messaging } from './init-fcm'
import { compose, lifecycle, withHandlers, withState } from 'recompose'

const renderNotification = (notification, i) => <li key={i}>{notification}</li>

const registerPushListener = pushNotification =>
  navigator.serviceWorker.addEventListener('message', ({ data }) => {
    if (
      data &&
      data.firebaseMessaging &&
      data.firebaseMessaging.payload &&
      data.firebaseMessaging.payload.notification &&
      data.firebaseMessaging.payload.notification.body
    ) {
      pushNotification(data.firebaseMessaging.payload.notification.body)
    }
  })

function App({ token, notifications }) {
  const [currentTheme, setCurrentTheme] = useState(themeLight)
  useEffect(() => {
    store.subscribe(() => {
      console.log(
        'App -> store.getState().theme.currentTheme',
        store.getState()
      )
      setCurrentTheme(store.getState().theme.currentTheme)
    })
  })
  return (
    <Provider store={store}>
      <Navbar></Navbar>
      {/* <div>
        Current token is: <p>{token}</p>
      </div>
      <ul>
        Notifications List:
        {notifications.map(renderNotification)}
      </ul> */}
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={currentTheme}>
          <Routes></Routes>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default compose(
  withState('token', 'setToken', ''),
  withState('notifications', 'setNotifications', []),
  withHandlers({
    pushNotification: ({
      setNotifications,
      notifications
    }) => newNotification =>
      setNotifications(notifications.concat(newNotification))
  }),
  lifecycle({
    async componentDidMount() {
      const { pushNotification, setToken } = this.props

      messaging
        .requestPermission()
        .then(async function() {
          const token = await messaging.getToken()
          setToken(token)
        })
        .catch(function(err) {
          console.log('Unable to get permission to notify.', err)
        })

      registerPushListener(pushNotification)
    }
  })
)(App)
