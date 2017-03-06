import React from 'react'
import {convertMarkup} from '../Common/util'

const CommentItem = ({comment}) => {

  return (

    <li className='list-group-item'>
      <div>{`Username ${comment.user.login}`}</div>
      <div dangerouslySetInnerHTML={convertMarkup(comment.body)}/>
    </li>)
}

export default CommentItem