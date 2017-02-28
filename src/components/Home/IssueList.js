/**
 * Created by zhangle on 2017-02-24.
 */
import React from 'react'
import {Table} from 'react-bootstrap'
import _ from 'lodash'

const styles = {
  avatar: { width: 50, height: 50},
  row: {cursor: 'pointer'}
}

const IssueList =  (props) => {
  const {issues} = props
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Number</th>
          <th>Title</th>
          <th>User Name</th>
          <th>Avatar</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
      {
        issues.map((issue) => {
          return (
            <tr style={styles.row} onClick={()=> {window.location.href = `details/${issue.number}`} } key={issue.id}>
              <td>{issue.number}</td>
              <td>{issue.title}</td>
              <td>{issue.user.login}</td>
              <td><img src={issue.user.avatar_url} style={styles.avatar}  alt='avatar'/></td>
              <td>{issue.body.substring(0, 140)}</td>
            </tr>
          )
        })
      }
      </tbody>
    </Table>
  )
}
//const trimBody = (content) => {
//  return _.
//}

export default IssueList