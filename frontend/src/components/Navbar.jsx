import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='header'>
      <ul className='menu'>
        <li><Link to="/">Product</Link></li>
        <li><Link to="/addproduct"> Add Product</Link></li>
        {/* <li><Link to="/updateproduct">Update Product</Link></li> */}

      </ul>
    </div>
  )
}

export default Navbar
