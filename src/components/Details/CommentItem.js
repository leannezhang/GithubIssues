import React from 'react'
import {convertMarkup} from '../Common/util'
import {Panel} from 'react-bootstrap'
import _ from 'lodash'

const styles = {
  body: { wordWrap: 'break-word'}
}

const CommentItem = ({comment}) => {

  return (
      <Panel header={comment.user.login}>
        <div dangerouslySetInnerHTML={convertMarkup(comment.body)} style={styles.body}/>
      </Panel>
  )
}

export default CommentItem