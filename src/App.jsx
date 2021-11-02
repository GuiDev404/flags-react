import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import FlagDetails from './pages/FlagDetails'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Nav from './components/Nav'
import useApi from './hooks/useApi'

function App() {
  const request = useApi();
  
  return (
    <main className='main-wrapper'>
      <Router>
        <Nav  /> 
        <div className='container'>
          <Switch>
            <Route path={['/','/:region']} exact>
              <Home flags_request={request} />
            </Route>
            <Route path='/country/:code'>
              <FlagDetails flags_request={request} />
            </Route>
            <Route path='*' component={NotFound} />
          </Switch>
        </div> 
      </Router>
    </main>
  )
}

export default App
