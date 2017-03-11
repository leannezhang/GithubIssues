import React, {PropTypes} from 'react'
import {convertMarkup} from '../Common/util'
import htmlToText from 'html-to-text'
import _ from 'lodash'

const styles = {
  table: { display: 'table', width: '100%', borderTop: '1px solid #e1e4e8', paddingLeft: 20},
  row: { display: 'table-row', cursor: 'pointer'},
  titleRow: { width: '90%', wordWrap: 'break-word', display: 'table-cell', paddingTop: 10},
  title: { display: 'table-cell', fontWeight: 'bold'},
  number: { color: '#a3aab1'},
  user: { display: 'table-cell', textAlign: 'center', verticalAlign: 'middle', paddingTop: 15},
  avatar: { width: 40, height: 40},
  summary: { wordWrap: 'break-word'}
}

const truncateSummary = (body) => {
  const text = htmlToText.fromString(convertMarkup(body).__html)
  return _.truncate(text, {
    'length': 140,
    'separator': ' ',
    'omission': ''
  })
}


const IssueItem = (props) => {

  // ES6: destructuring
  // const issueNum = props.issueNum

  const {issue, onClick} = props


  return (
    <div style={styles.table} onClick={onClick}>

      <div style={styles.row}>
        <div style={styles.titleRow}>
          <div style={styles.title}>
            <span style={styles.number}>{`#${issue.number} `}</span>{issue.title}
          </div>
          <div style={styles.summary}>
            {truncateSummary(issue.body)}
          </div>
        </div>

        <div style={styles.user}>
          <img src={issue.user.avatar_url} alt={issue.user.login} title={issue.user.login}
               style={styles.avatar} />
          <div>{issue.user.login}</div>
        </div>
      </div>


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
