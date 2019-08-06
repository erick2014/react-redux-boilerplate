// vendors
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'

// Redux stuff
import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { routerReducer, routerMiddleware } from 'react-router-redux'

// main app component
import HomePage from './app/home-page';
import thunkMiddleware from 'redux-thunk'

// import reducers
import usersReducer from 'reduxConfig/reducers/users'

// import general styles
require('./assets/stylesheets/styles.scss')

// utils
import theme from './material-ui-theme';

const mainReducer = combineReducers({
  users: usersReducer,
  routing: routerReducer
})

const history = createBrowserHistory()

const store = createStore(
  mainReducer,
  undefined,
  compose(
    applyMiddleware(
      routerMiddleware(history),
      thunkMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={HomePage} />
      </div>
    )
  }
}

const MyApp = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </Router>
    </Provider>
  )
}

// render our App componnet and mount it to our #root element
ReactDOM.render(<MyApp />, document.getElementById('root'))
