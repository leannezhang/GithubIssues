import React, {Component, PropTypes} from 'react'
import api from '../../api'
import DetailItem from './DetailItem'
import CommentList from './CommentList'


const Details = (props) => {
  const {issueDetails, isFetching, comments } = props
  return (
    <div>
      <h4>NPM Issue Detail</h4>
      {!isFetching && <DetailItem issueDetails={issueDetails} isFetching={isFetching}/>}
      {!isFetching && <CommentList comments={comments} isFetching={isFetching}/>}
    </div>
  )
}

Details.propTypes = {
  issueDetails: PropTypes.shape({
    body: PropTypes.string
  })
}

export default class StatefulDetails extends Component {
  // ES6
  //constructor(props) {
  //  super(props)
  //  this.state = {
  //    issueDetails : {}
  //  }
  //}

  state = {
    issueDetails: {},
    comments: [],
    isFetching: false
  }


  //using as the constructor
  // component will mount is called before the render method is executed.
  // It's important to note that setting the state in this phase will not trigger
  // a re-rendering.
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
    //<Details issueDetails={this.state.issueDetails} />
  }
}