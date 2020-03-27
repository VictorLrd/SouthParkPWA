import React from 'react'
import ListMatchs from '../screens/listMatchs'

import PrivateRoute from '../config/PrivateRoute'
import PublicRoute from '../config/PublicRoute'

import { BrowserRouter, Switch, Redirect } from 'react-router-dom'
import Profil from '../screens/profil'
import LoginScreen from '../screens/loginScreen'
import registerScreen from '../screens/registerScreen'
import groupScores from '../screens/groupScores'
import matchStat from '../screens/matchStat'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute
          restricted={true}
          component={LoginScreen}
          path='/login'
          exact
        />
        <PublicRoute
          restricted={true}
          component={registerScreen}
          path='/register'
          exact
        />
        <PrivateRoute component={ListMatchs} path='/' exact />
        <PrivateRoute component={groupScores} path='/group-scores' exact />
        <PrivateRoute component={matchStat} path='/match-stat/:matchId' exact />
        <PrivateRoute component={Profil} path='/profile' exact />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
