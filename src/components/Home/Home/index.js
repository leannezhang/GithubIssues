import React, {Component} from 'react'
import Home from './Home'
import api from '../../../api'
import Spinner from 'react-spinkit'

export default class StatefulHome extends Component {
  // ES7
  state =  {
    pageNumber: 9,
    activePage: 1,
    issues: [],
    isFetching: false
  }
  // ES6
  //constructor() {
  //  super()
  //  this.state = {activePage: 0}
  //}
  handleSelect(eventKey) {
     this.getListIssues(eventKey)
  }

  componentDidMount() {
    this.getListIssues(1)
  }

  getListIssues(eventKey) {
    // show spinner

    this.setState({isFetching: true})
    api.getListIssuesPerPage('npm', 'npm', eventKey).then((issues) => {
      this.setState({
        activePage: eventKey,
        issues
      })
      // stop spinner
      this.setState({isFetching: false})
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
    if (props.isFetching) {
        return (<div>loading <Spinner spinnerName='three-bounce'/></div>)
    }
    return (
      <Home {...props} handleSelect={(eventKey) => { this.handleSelect(eventKey)} } />
    )
  }
}
