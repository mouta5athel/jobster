import Wrapper from '../assets/wrappers/SmallSidebar'
import React from 'react'
import { FaTimes } from 'react-icons/fa'

import Logo from './Logo'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSidebar } from '../features/sidebar/sidebarSlice'

import NavLinks from './NavLinks'

const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.sidebar)
  const dispatch = useDispatch()
  const toggle = () => {
    dispatch(toggleSidebar())
  }
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <button className="close-btn" onClick={toggle}>
            <FaTimes></FaTimes>
          </button>
          <header>
            <Logo></Logo>
          </header>

          <NavLinks toggleSidebar={toggle}></NavLinks>
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar
