import React from 'react'
import IssueList from '../IssueList'
import {Pagination} from 'react-bootstrap'
export default (props) => {
  const {handleSelect, activePage, pageNumber, issues, isFetching, handleDetailsPage} = props
  return (
    <div>
      {!isFetching && <IssueList issues={issues} isFetching={isFetching} handleDetailsPage={handleDetailsPage} />}
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