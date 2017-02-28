/**
 * Created by zhangle on 2017-02-24.
 */
import React from 'react'
import IssueItem from './IssueItem'
import {Table} from 'react-bootstrap'
import _ from 'lodash'
import { Link } from 'react-router-dom'


const IssueList =  (props) => {
  const {issues, isFetching, handleDetailsPage} = props
  console.log(issues)
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
            <tr onClick={()=> {window.location.href = `details/${issue.number}`} } key={issue.id}>
              <td>{issue.number}</td>
              <td>{issue.title}</td>
              <td>{issue.user.login}</td>
              <td><img src={issue.user.avatar_url} style={styles.avatar} /></td>
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

const styles = {
  avatar : { width: 50, height: 50}
}

export default IssueList