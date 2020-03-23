import React from 'react'

import Login from '../screens/login'
import Animation from '../screens/animation'
import Characters from '../screens/characters'
import CharactersDetails from '../screens/charactersDetails'
import Ranking from '../screens/ranking'
import Timers from '../screens/timers'
import Todos from '../screens/todos'
import Register from '../screens/register'

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'
import Matchs from '../screens/matchs'
import Pronos from '../screens/prono'
import Profil from '../screens/profil'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route path='/animation' component={Animation}></Route>
        <Route path='/characters' component={Characters}></Route>
        <Route path='/charactersDetails' component={CharactersDetails}></Route>
        <Route path='/ranking' component={Ranking}></Route>
        <Route path='/timers' component={Timers}></Route>
        <Route path='/todos' component={Todos}></Route>
        <Route path='/profil' component={Profil}></Route>
        <Route path='/list-match' component={Matchs}></Route>
        <Route path='/list-match-prono' component={Pronos}></Route>
        <Route path='/register' component={Register}></Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default Routes
