import React, { Component } from 'react'
import './style/App.css'
import LoginContainer from './containers/LoginContainer'
import LayoutContainer from './containers/LayoutContainer'
import { withCookies } from 'react-cookie'
import { setInterceptors } from './Interceptor/Interceptor'

import { ACCESS_COOKIE_NAME } from './config'


import { Switch, Route, Redirect } from 'react-router-dom'


const PrivateRoute = ({ component, isAuthenticated }) => {
  return <Route
    render={props => {
      return isAuthenticated
        ? React.createElement(component, props)
        : <Redirect
          to={{
            pathname: "/login"
          }}
        />
    }
    }
  />
}

setInterceptors()

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" exact component={LoginContainer} />
        <Route path="/" exact render={() => { return <Redirect to={`/login`} /> }} />
        <PrivateRoute
          isAuthenticated={this.props.cookies.cookies[ACCESS_COOKIE_NAME]}
          component={LayoutContainer}
        />
      </Switch>
    )
  }
}

export default withCookies(App)
