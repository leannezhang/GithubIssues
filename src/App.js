import React, { Component } from 'react'
import Home from './components/Home'
import Details from './components/Details'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const styles = {
  container: { maxWidth: 980, margin: '0 auto' }
}

export default class App extends Component {

  render() {
    return (
      <Router>
        <div style={styles.container}>
          <Route exact path="/" component={Home} />
          <Route path="/details/:issueNumber" component={Details} />
        </div>
      </Router>
    )
  }
}
