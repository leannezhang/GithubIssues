/**
 * Created by zhangle on 2017-02-24.
 */
// this is currently not being used
import React, {PropTypes} from 'react'
import {Label} from 'react-bootstrap'

const styles = {
  row: { width: '100%', display: 'table'},
  title: { float: 'left', width: '80%', wordWrap: 'break-word'},
  number: { color: '#a3aab1'},
  user: { display: 'table-cell', textAlign: 'center', verticalAlign: 'middle'},
  avatar: { width: 40, height: 40},
  summary: { wordWrap: 'break-word'},
  clear: { clear: 'both'}
}


const IssueItem = (props) => {

  // ES6: destructuring
  // const issueNum = props.issueNum
  const {issue} = props

  return (
    <div>

      <div style={styles.row}>
        <div style={styles.title}>
          <h2>{issue.title}
            <span style={styles.number}>{` #${issue.number}`}</span>
          </h2>
        </div>
        <div style={styles.user}>
          <img src={issue.user.avatar_url} alt={issue.user.login} title={issue.user.login}
               style={styles.avatar} />
          <div>{issue.user.login}</div>
        </div>
        <div style={styles.clear}></div>
      </div>

      <div style={styles.row}>
        <h4><Label bsStyle="primary">{issue.state}</Label></h4>
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
