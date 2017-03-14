import Details from './Details'
import React, {Component} from 'react'
import api from '../../api'

export default class StatefulDetails extends Component {

  state = {
    issueDetails: {},
    comments: [],
    isFetching: false
  }

  componentWillMount() {
    this.setState({isFetching: true})

    const {issueNumber} = this.props.match.params

    Promise.all([
      api.getIssue('npm', 'npm', issueNumber),
      api.getComments('npm', 'npm', issueNumber)
    ]).then((issue) => {

      const issueDetails = issue[0]
      const comments = issue[1]

      this.setState(
        {issueDetails,
          comments,
          isFetching: false
        }
      )
    })
  }

  render() {
    const props = {...this.state, ...this.props}

    if (props.isFetching) {
      return (
        <div>
          Loading...
        </div>
      )
    }

    return (
      <Details {...props}/>
    )
  }
}
