import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import store from 'store'
import theme from 'config/theme'
import ROUTES from 'constants/routes'
import initStyles from 'styles/init'
import {
  Home
} from 'pages'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

initStyles()

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Fragment>
        <Router history={history}>
          <Switch>
            <Route exact path={ROUTES.HOME} component={Home} />
          </Switch>
        </Router>
      </Fragment>
    </ThemeProvider>
  </Provider>
)

export default App