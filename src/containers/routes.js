import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import React from 'react'
import App from './App'
import Team from '../components/Pages/Team'
import Help from '../components/Pages/Help'
import Contact from '../components/Pages/Contact'



const routes = (

<Router history={browserHistory}>
  <Route component={App} path='/' >
    <Route component={Help} path='/help'/>
    <Route component={Team} path='/team'/>
    <Route component={Contact} path='/contact'/>
  </Route>
</Router>


)

export default routes
