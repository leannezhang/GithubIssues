/**
 * Created by zhangle on 2017-02-25.
 */
import React from 'react'

export default (props) => {
  const {text, onClick} = props
  return (
    <div style={styles.button} onClick={(event) => onClick(event)}>{text}</div>
  )
}

// Inline styling ftw
const styles = {
  button: {

    color: 'red'
  }
}