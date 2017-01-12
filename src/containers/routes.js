import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import React from 'react'
import App from './App'
import Team from '../components/Team'
import Help from '../components/Help'
import Contact from '../components/Contact'
import Search from '../components/Search'


const routes = (

<Router history={browserHistory}>
  <Route component={App} path='/' >
    <IndexRoute component={Search}/>
    <Route component={Help} path='/help'/>
    <Route component={Team} path='/team'/>
    <Route component={Contact} path='/contact'/>
  </Route>
</Router>


)

export default routes
