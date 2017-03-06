/**
 * Created by zhangle on 2017-02-27.
 */
import {Table} from 'react-bootstrap'
import React from 'react'
import {convertMarkup} from '../Common/util'

const styles = {
  avatar: { width: 50, height: 50}
}


const DetailItem = (props) => {
  const {issueDetails} = props
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
        <td dangerouslySetInnerHTML={convertMarkup(issueDetails.body)} />
      </tr>
      </tbody>
    </Table>
  )
}

export default DetailItem