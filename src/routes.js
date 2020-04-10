import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from 'pages/Home/Home'
import List from 'pages/List/List'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/list' component={List} />
    </Switch>
  </BrowserRouter>
)

export default Routes
