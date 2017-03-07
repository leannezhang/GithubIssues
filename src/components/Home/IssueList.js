import React from 'react'
import {Table} from 'react-bootstrap'
import _ from 'lodash'
import Marked from 'marked'

const styles = {
  avatar: { width: 50, height: 50},
  row: {cursor: 'pointer'}
}

const convertMarkup = (markup) => {
  console.log(markup)
  Marked.setOptions({
    gfm: false
  })
  return {__html: Marked(markup)}
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
              <td dangerouslySetInnerHTML={convertMarkup(issue.body.substring(0, 140))} />
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