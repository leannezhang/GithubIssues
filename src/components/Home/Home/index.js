import React, {Component} from 'react'
import Home from './Home'
import api from '../../../api'

export default class StatefulHome extends Component {
  // ES7
  state =  {
    pageNumber: 9,
    activePage: 1
  }
  // ES6
  //constructor() {
  //  super()
  //  this.state = {activePage: 0}
  //}
  handleSelect(eventKey) {
    // show spinner
    api.getListIssuesPerPage('npm','npm', eventKey).then((npmJson) => {
      console.log(npmJson)
      this.setState({activePage: eventKey})
      // stop spinner
    })
  }
  //
  //const eee  = {a: 1111, b: 2222}
  //
  //const aaa = {...{a: 1111, b: 2222}, ...{c: 1111, d: 2222}}
  //aaa === {a: 1111, b: 2222, c: 1111, d: 2222}
  render () {
    const props = {...this.state, ...this.props}
    // const newState = Object.assign({}. this.state)
    // const newProp = Object.assign(newState, this.props)
    return (
      <Home {...props} handleSelect={(eventKey) => { this.handleSelect(eventKey)} } />
    )
  }
}
