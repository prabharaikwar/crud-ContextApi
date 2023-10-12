import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <nav className='bg-[#dbd8e3] text-white'><p className='bg-[#352f44] pb-1'>CRUD with Context API</p></nav>
        <ul className='nav'>
            <li className='Home'>
                <Link to="/">Home</Link>
            </li>
            <li  className='cart'>
            <button className="bg-transparent hover:bg-[#dbd8e3] text-[#dbd8e3] font-semibold hover:text-white py-1 px-4   hover:border-transparent rounded">
            <Link to="/adduser">Add User</Link></button>
               
            </li>
            {/* <li  className='cart'>
                <Link to="/edit">Edit User</Link>
            </li> */}
            <li  className='cart'>
                <Link to="/cart">Cart</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header