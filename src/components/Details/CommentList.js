/**
 * Created by zhangle on 2017-02-28.
 */
import React from 'react'
import CommentItem from './CommentItem'
const CommentList = (props) => {

  const comments = props.comments.map((comment) => {
      return <CommentItem key={comment.id} comment={comment} />
  })

  return (
    <ul className='col-md-12 list-group'>
      {comments}
    </ul>
  )

}

export default CommentList