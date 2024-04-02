import React from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import { FaHome } from 'react-icons/fa'
import { clearStore } from '../features/user/userSlice'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import Logo from './Logo'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../features/sidebar/sidebarSlice'
import { logoutUser } from '../features/user/userSlice'

const Navbar = () => {
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()
const [showLogout, setShowLogout] = useState(false)
  const toggle=()=>{
    dispatch(toggleSidebar())
  }
   const logout = () => {
     dispatch(logoutUser('Logging out...'))
   }
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggle}>
          <FaAlignLeft></FaAlignLeft>
        </button>
        <div>
          <Logo></Logo>
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle></FaUserCircle> {user?.name}
            <FaCaretDown></FaCaretDown>
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => {
                dispatch(clearStore('Logout Successful...'))
              }}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
