import React from 'react'

import Login from '../screens/login'
import Animation from '../screens/animation'
import Characters from '../screens/characters'
import CharactersDetails from '../screens/charactersDetails'
import Ranking from '../screens/ranking'
import Timers from '../screens/timers'
import Todos from '../screens/todos'

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'

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
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default Routes
