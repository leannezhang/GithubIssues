import React, { Component } from 'react'
import Home from './components/Home'
import Details from './components/Details'

export default class App extends Component {

  // TODO: navagation should be done through React Router
  state = {
    isDetail: false
  }
  render() {
    const {isDetail} = this.state
    return (
      isDetail? <Details /> : <Home handleDetailsPage={(issueNumber) => { this.setState({isDetail: true}) } } />
    )
  }
}
