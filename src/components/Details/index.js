/**
 * Created by zhangle on 2017-02-25.
 */
import React, {Component, PropTypes} from 'react'
import api from '../../api'
import DetailItem from './DetailItem'

const Details = (props) => {
  const {issueDetails, isFetching } = props
  console.log(issueDetails)
  return (
    <div>
      {!isFetching && <DetailItem issueDetails={issueDetails} isFetching={isFetching} />}
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
    issueDetails: {},
    isFetching: false
  }


  //using as the constructor
  // component will mount is called before the render method is executed.
  // It's important to note that setting the state in this phase will not trigger
  // a re-rendering.
  componentWillMount() {
    this.setState({isFetching: true})

    const {issueNumber} = this.props.match.params

    api.getIssue('npm', 'npm', issueNumber).then((issueDetails)=> {
      this.setState(
        {
        issueDetails,
        isFetching: false
      })})
  }
  render() {
    return (<Details {...{...this.state, ...this.props}}/>)
    //<Details issueDetails={this.state.issueDetails} />
  }
}