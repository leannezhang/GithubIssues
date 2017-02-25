import React from 'react'
import IssueList from './../IssueList'
import {Pagination} from 'react-bootstrap'

export default (props) => {
  const {handleSelect, activePage, pageNumber} = props
  return (
    <div>
      <IssueList />
      <Pagination
        prev
        next
        first
        last
        items={pageNumber}
        activePage={activePage}
        onSelect={handleSelect} />
    </div>
  )
}