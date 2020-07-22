import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"
import MainPage from '../views/mainPage/Index'

const Routes = ()=>{
    return(
        <BrowserRouter>
        <Switch>
          <Switch>
            <Route path="/" render={(props) => <MainPage {...props} />} />
            <Redirect to="/index" />
            <Redirect from="/" to="/index" />
          </Switch>
        </Switch>
      </BrowserRouter>
    )
}


export default Routes