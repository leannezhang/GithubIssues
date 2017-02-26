/**
 * Created by zhangle on 2017-02-24.
 */
import React, {PropTypes} from 'react'

const IssueItem = (props) => {

  // ES6: destructuring
  // const issueNum = props.issueNum
  const {issueNum, issueTitle, issueLabels} = props
  return (
    <div>
      {`issueNum: ${issueNum}
        issueTitle: ${issueTitle}
        issueLabels: ${issueLabels}
      `}
    </div>
  )
}

IssueItem.propTypes = {
  issueNum: PropTypes.number.isRequired,
  issueTitle: PropTypes.string.isRequired,
  issueLabels: PropTypes.array
}
export default IssueItem
