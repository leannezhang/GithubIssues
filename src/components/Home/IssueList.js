import React from 'react'
import {Table} from 'react-bootstrap'
import _ from 'lodash'
import Marked from 'marked'
import IssueItem from './IssueItem'

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
      <div>
      {
        issues.map((issue) => {
          return (
           <IssueItem key={issue.id} issue={issue} onClick={()=> {console.log('I have been clicked');
           window.location.href = `details/${issue.number}`} }/>

          )
        })
      }
      </div>
  )
}
//const trimBody = (content) => {
//  return _.
//}

export default IssueList