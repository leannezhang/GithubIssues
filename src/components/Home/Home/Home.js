import React, {PropTypes} from 'react'
import IssueList from '../IssueList'
import {Pagination} from 'react-bootstrap'

const styles = {
  paginationContainer: { textAlign: 'center'}
}
// Stateless function component for Home
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

Home.propTypes = {
  issues: PropTypes.array.isRequired,
  pageNumber: PropTypes.number,
  activePage: PropTypes.number,
  handleSelect: PropTypes.func,
  isFetching: PropTypes.bool
}
export default Home