import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import history from 'routes/history'
import Home from 'pages/Home/Home'
import Quizz from 'pages/Quizz/Quizz'

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/quizz' component={Quizz} />
    </Switch>
  </Router>
)

export default Routes
