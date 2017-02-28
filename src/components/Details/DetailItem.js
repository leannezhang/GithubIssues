/**
 * Created by zhangle on 2017-02-27.
 */
import {Table} from 'react-bootstrap'
import React from 'react'

const styles = {
  avatar: { width: 50, height: 50}
}

const DetailItem = (props) => {
  const {issueDetails, comments} = props
  console.log(comments)
  return (
    <Table responsive>
      <thead>
      <tr>
        <th>#</th>
        <th>Issue Title</th>
        <th>State</th>
        <th>Reporter's user name</th>
        <th>Avatar</th>
        <th>Summary</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{issueDetails.number}</td>
        <td>{issueDetails.title}</td>
        <td>{issueDetails.state}</td>
        <td>{issueDetails.user.login}</td>
        <td><img src={issueDetails.user.avatar_url} alt='avatar' style={styles.avatar} /></td>
        <td>{issueDetails.body}</td>
      </tr>
      </tbody>
    </Table>
  )
}

export default DetailItem