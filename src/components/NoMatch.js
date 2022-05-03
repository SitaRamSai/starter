import React from 'react'
import { Link } from 'react-router-dom'

const NoMatch = () => {
  return (
    <div>
      <h1>404 Error</h1>
      <Link to='/'>Go back Home</Link>
    </div>
  )
}

export default NoMatch