import React from 'react'
import IssueList from '../IssueList'
import {Pagination} from 'react-bootstrap'

const styles = {
  paginationContainer: { textAlign: 'center'}
}
const Home = (props) => {
  const {handleSelect, activePage, pageNumber, issues, isFetching} = props

  return (
    <div>
      <h4>NPM Issue</h4>
      {!isFetching && <IssueList issues={issues} isFetching={isFetching} />}
      <div style={styles.paginationContainer}>
        <Pagination
          prev
          next
          first
          last
          items={pageNumber}
          activePage={activePage}
          onSelect={handleSelect} />
        </div>
    </div>
  )
}
export default Home