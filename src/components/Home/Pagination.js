/**
 * Created by zhangle on 2017-02-24.
 */
import React, {PropTypes} from 'react'
import Button from './Button'

const Pagination = (props) => {
  const {totalPages, currentPage, prev, next} = props
  return (
    <div>
      <Button text='<<' onClick={()=>{prev()}} />
      <Button text='>>' onClick={()=>{next()}} />
    </div>
  )
}
Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
}
export default Pagination
