
import React from 'react'

const style = {
  color: 'red'
}

const Error = ({isError, children}) => (
  isError && <div style={style}>{ children }</div>
)

export default Error
