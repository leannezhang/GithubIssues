import React, {PropTypes} from 'react'
import {convertMarkup} from '../Common/util'

const styles = {
  table: { display: 'table', width: '100%', borderTop: '1px solid #e1e4e8', paddingLeft: 20},
  row: { display: 'table-row', cursor: 'pointer'},
  titleRow: { width: '80%', wordWrap: 'break-word', display: 'table-cell'},
  title: { display: 'inline-block', marginLeft: 10},
  number: { color: '#a3aab1', display: 'inline-block'},
  user: { display: 'table-cell', textAlign: 'center', verticalAlign: 'middle', paddingTop: 15},
  avatar: { width: 40, height: 40},
  summary: { wordWrap: 'break-word'}
}

const IssueItem = (props) => {

  // ES6: destructuring
  // const issueNum = props.issueNum

  const {issue, onClick} = props

  return (
    <div style={styles.table} onClick={onClick}>

      <div style={styles.row}>
        <div style={styles.titleRow}>
          <span style={styles.number}>{` #${issue.number} `}</span>
          <h4 style={styles.title}>{issue.title}</h4>
        </div>
        <div style={styles.user}>
          <img src={issue.user.avatar_url} alt={issue.user.login} title={issue.user.login}
               style={styles.avatar} />
          <div>{issue.user.login}</div>
        </div>
      </div>
      <div dangerouslySetInnerHTML={convertMarkup(issue.body.substring(0, 140))} style={styles.summary} />
    </div>
  )
}

IssueItem.propTypes = {
  issue: PropTypes.shape({
    title: PropTypes.string,
    user: PropTypes.object,
    state: PropTypes.string
  }).isRequired
}
export default IssueItem
