/**
 * Created by zhangle on 2017-02-27.
 */
import React from 'react'

const CommentItem = ({comment}) => {

  return (
    <li className='list-group-item'>
      {comment.user.login}
      {comment.body}
    </li>)
}

export default CommentItem