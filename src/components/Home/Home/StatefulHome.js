import React, {Component} from 'react'
import Home from './Home'
import api from '../../../api'

export default class StatefulHome extends Component {

  state =  {
    pageNumber: 9,
    activePage: 1,
    issues: [],
    isFetching: false
  }

  handleSelect(eventKey) {
    this.getListIssues(eventKey)
  }

  componentWillMount() {
    this.getListIssues(1)
  }

  getListIssues(eventKey) {
    this.setState({isFetching: true})
    api.getListIssuesPerPage('npm', 'npm', eventKey).then((issues) => {
      this.setState({
        activePage: eventKey,
        issues,
        isFetching: false
      })
    })
  }

  render () {
    const props = {...this.state, ...this.props}

    if (props.isFetching) {
      return (<div>Loading...</div>)
    }
    return (
      <Home {...props} handleSelect={(eventKey) => { this.handleSelect(eventKey)} } />
    )
  }
}
