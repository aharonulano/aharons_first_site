import React from 'react'
import { Link } from 'react-router-dom'

const Navbaroo = () => {
  return (
    <div className="navbar bg-lime-400-100">
    <div className="flex-1">
      Doo-D
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  </div>
  )
}

export default Navbaroo