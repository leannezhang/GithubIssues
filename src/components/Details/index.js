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
  //constructor(props) {
  //  super(props)
  //  this.state = {
  //    issueDetails : {}
  //  }
  //}

  state = {
    issueDetails: {}
  }


  //using as the constructor
  // component will mount is called before the render method is executed.
  // It's important to note that setting the state in this phase will not trigger
  // a re-rendering.
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