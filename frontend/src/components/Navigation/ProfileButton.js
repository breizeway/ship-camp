import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation, useHistory } from 'react-router-dom'

import * as sessionActions from '../../store/session';
import './ProfileButton.css'

function ProfileButton({ user }) {
  const history = useHistory()
  const dispatch = useDispatch();
  const isHome = useLocation().pathname === '/';

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

    return () => document.removeEventListener('click', closeMenu);
  }, [showMenu]);

  const logout = e => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <div
        className='navigation__icon'
        onClick={openMenu}
        style={{backgroundColor: isHome ? 'white' : 'rgb(243, 242, 239)'}}
      >
        <div
          className={`navigation__icon-inner ${isHome ? '' : 'navigation__icon-inner-color'}`}
        ></div>
      </div>
      {showMenu && (
        <div className='profile-dropdown' style={{width: !user && '150px'}}>
          <div className='profile-dropdown__triangle-gray'>
            <div className='profile-dropdown__triangle-white' />
          </div>
          {user && (
            <>
              <div>
                <strong>{user.username}</strong>
              </div>
              <div onClick={() => history.push(`/u/${user.username}`)}>Account</div>
              <div onClick={logout}>Log Out</div>
            </>
          )}
          {!user && (
            <>
              <div>
                <NavLink to='/login'>Log In</NavLink>
              </div>
              <div>
                <NavLink to='/signup'>Sign Up</NavLink>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default ProfileButton;
