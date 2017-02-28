import React, { Component } from 'react'
import Home from './components/Home'
import Details from './components/Details'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
export default class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/details/:issueNumber" component={Details} />
        </div>
      </Router>
    )
  }
}
