import React from 'react'
import IssueItem from './IssueItem'

const styles = {
  issueList: { border: '1px solid #e1e4e8', borderTop: 'none'}
}

const IssueList =  (props) => {
  const {issues} = props

  const handleNav = (issue) => {
    window.location.href = `details/${issue.number}`
  }

  return (
      <div style={styles.issueList}>
      {
        issues.map((issue) => {
          return (
           <IssueItem key={issue.id} issue={issue} onClick={handleNav.bind(null, issue)}/>
          )
        })
      }
      </div>
  )
}

export default IssueList