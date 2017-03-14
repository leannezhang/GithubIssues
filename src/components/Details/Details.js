import React, {PropTypes} from 'react'
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

export default Details