import React from 'react'

// import Login from '../screens/login2'
// import Animation from '../screens/animation'
// import Characters from '../screens/characters'
// import CharactersDetails from '../screens/charactersDetails'
// import Ranking from '../screens/ranking'
// import Timers from '../screens/timers'
import Todos from '../screens/todos'
import MatchRedux from '../screens/matchRedux'

import PrivateRoute from '../config/PrivateRoute'
import PublicRoute from '../config/PublicRoute'

import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import Matchs from '../screens/matchs'
import Pronos from '../screens/prono'
import Profil from '../screens/profil'
import LoginScreen from '../screens/loginScreen'
import registerScreen from '../screens/registerScreen'
import groupScores from '../screens/groupScores'

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
        {/* <PrivateRoute component={MatchRedux} path='/' exact />
        <PrivateRoute component={groupScores} path='/group-scores' exact /> */}

        <Route component={MatchRedux} path='/' exact />
        <Route component={groupScores} path='/group-scores' exact />

        {/* <Route exact path='/' component={MatchRedux}></Route> */}
        {/* <Route exact path='/login' component={LoginScreen}></Route> */}
        <Route exact path='/register' component={registerScreen}></Route>
        {/* <Route path='/animation' component={Animation}></Route> */}
        {/* <Route path='/characters' component={Characters}></Route> */}
        {/* <Route path='/charactersDetails' component={CharactersDetails}></Route> */}
        {/* <Route path='/ranking' component={Ranking}></Route> */}
        {/* <Route path='/timers' component={Timers}></Route> */}
        <Route path='/todos' component={Todos}></Route>
        <Route path='/profil' component={Profil}></Route>
        <Route path='/list-match' component={Matchs}></Route>
        <Route path='/list-match-prono' component={Pronos}></Route>
        {/* <Route path='/register' component={Register}></Route> */}
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
