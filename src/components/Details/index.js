/**
 * Created by zhangle on 2017-02-25.
 */
import React, {Component, PropTypes} from 'react'
import api from '../../api'

const Details = (props) => {
  const {issueDetails} = props
  return (
    <div>
      {issueDetails.body}
    </div>
  )
}
Details.propTypes = {
  issueDetails: PropTypes.shape({
    body: PropTypes.string
  })
}

export default class StatefulDetails extends Component {
  // ES7
  state = {
    issueDetails: {}
  }
  //using as the constructor
  componentWillMount() {
    const {issueNumber} = this.props.match.params
    api.getIssue('npm', 'npm', issueNumber).then((issueDetails)=> {

      this.setState({issueDetails})})
  }
  render() {
    return (<Details {...{...this.state, ...this.props}}/>)
    //<Details issueDetails={this.state.issueDetails} />
  }
}