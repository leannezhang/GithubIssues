/**
 * Created by zhangle on 2017-02-24.
 */
import React from 'react'
import IssueItem from './IssueItem'

export default (props) => {
  return (
    <IssueItem issueNum='#10001' issueTitle='NPM not workng' issueLabels={['labelA', 'labelB']}  />
  )
}
