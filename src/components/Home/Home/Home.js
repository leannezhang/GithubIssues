import React from 'react'
import IssueList from '../IssueList'
import {Pagination} from 'react-bootstrap'

const Home = (props) => {
  const {handleSelect, activePage, pageNumber, issues, isFetching} = props
  return (
    <div>
      {!isFetching && <IssueList issues={issues} isFetching={isFetching} />}
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
export default Home