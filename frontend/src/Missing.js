import React from 'react'
import { Link } from 'react-router-dom'
const Missing = () => {
  return (
    <main>
    <h2>page not found</h2>
    <p>this is disappointing</p>
    <p>
      <Link to='/'>visit our homepage</Link>
    </p>
    </main>
  )
}

export default Missing