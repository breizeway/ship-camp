import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

import * as sessionActions from '../../store/session';
import './ProfileButton.css'

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
      return null
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = e => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <div className='navigation__icon' onClick={openMenu}>
        <div className='navigation__icon-inner'></div>
      </div>
      {showMenu && (
        <div className="profile-dropdown">
          <div>
            <p>Username:</p>
            <p>{user.username}</p>
          </div>
          <div>
            <p>Email:</p>
            <p>{user.email}</p>
          </div>
          <div>
            <p>First Name:</p>
            <p>{user.firstName}</p>
          </div>
          <div>
            <p>Last Name:</p>
            <p>{user.lastName}</p>
          </div>
          <div onClick={logout}>Log Out</div>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
