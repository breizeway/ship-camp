import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProfileButton from './ProfileButton';
import Logo from './Logo';
import './index.css';

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to='/login'>Log In</NavLink>
        <NavLink to='/signup'>Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className='main-nav-bar'>
      <div className='main-nav-bar__home'>
        <Logo />
      </div>
      <div className='main-nav-bar__links'>
        {isLoaded && sessionLinks}
      </div>
    </div>
  )
}

export default Navigation;
