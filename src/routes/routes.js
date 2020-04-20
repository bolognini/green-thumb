import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import history from 'routes/history'
import Home from 'pages/Home/Home'
import Quiz from 'pages/Quiz/Quiz'
import Showcase from 'pages/Showcase/Showcase'
import Checkout from 'pages/Checkout/Checkout'
import NotFound from 'pages/NotFound/NotFound'

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/quiz' component={Quiz} />
      <Route path='/showcase' component={Showcase} />
      <Route path='/checkout' component={Checkout} />
      <Route path='*' component={NotFound} />
    </Switch>
  </Router>
)

export default Routes
