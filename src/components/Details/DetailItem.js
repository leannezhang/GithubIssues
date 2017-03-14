import React from 'react'
import {convertMarkup} from '../Common/util'
import {Panel, Label} from 'react-bootstrap'

const styles = {
  row: { width: '100%', display: 'table'},
  title: { width: '80%', wordWrap: 'break-word'},
  number: { color: '#a3aab1'},
  user: { display: 'table-cell', textAlign: 'center', verticalAlign: 'middle'},
  avatar: { width: 40, height: 40},
  summary: { wordWrap: 'break-word'}
}


const DetailItem = (props) => {
  const {issueDetails} = props
  return (
    <div>
      <div>

        <div style={styles.row}>
          <div style={styles.title}>
            <h2>{issueDetails.title}
                <span style={styles.number}>{` #${issueDetails.number}`}</span>
            </h2>
          </div>
          <div style={styles.user}>
            <img src={issueDetails.user.avatar_url} alt={issueDetails.user.login} title={issueDetails.user.login}
                 style={styles.avatar} />
            <div>{issueDetails.user.login}</div>
          </div>
        </div>

        <div style={styles.row}>
          <h4><Label bsStyle="primary">{issueDetails.state}</Label></h4>
        </div>

      </div>

      <div>
        <Panel header={issueDetails.user.login}>
          <div dangerouslySetInnerHTML={convertMarkup(issueDetails.body)} style={styles.summary} />
        </Panel>
      </div>

    </div>
  )
}

export default DetailItem