import React from 'react'
import {BrowserRouter, Link, Route} from 'react-router-dom'

import WebbAppKit from '../pages/WebbAppKit/WebAppKit'
import LandingPage from '../pages/LandingPage/Landing'

export default = () => {
  return (<div>
    <BrowserRouter>
      <Switch>
        <route exact="exact" path="/" component={Landing}/>
        <route exact="exact" path="/webappkit" component={WebAppKit}/>
      </Switch>
    </BrowserRouter>
  </div>)

}
