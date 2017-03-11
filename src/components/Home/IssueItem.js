import React, {PropTypes} from 'react'
import {convertMarkup} from '../Common/util'
import htmlToText from 'html-to-text'
import _ from 'lodash'

const styles = {
  table: { display: 'table', width: '100%', borderTop: '1px solid #e1e4e8', paddingLeft: 20},
  row: { display: 'table-row', cursor: 'pointer'},
  titleRow: { width: '80%', wordWrap: 'break-word', display: 'table-cell'},
  title: { display: 'table-cell', fontWeight: 'bold'},
  number: { color: '#a3aab1'},
  user: { display: 'table-cell', textAlign: 'center', verticalAlign: 'middle', paddingTop: 15},
  avatar: { width: 40, height: 40},
  summary: { wordWrap: 'break-word'}
}

const truncateSummary = (convertMarkup) => {
  const text = htmlToText.fromString(convertMarkup.__html)
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
          <div style={styles.number}>{`#${issue.number}`} </div>
          <div style={styles.title}>{issue.title}</div>
          <div style={styles.summary}>
            {truncateSummary(convertMarkup(issue.body.substring(0, 150)))}
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
