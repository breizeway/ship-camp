import { useSelector } from 'react-redux';

import ProfileButton from './ProfileButton';
import Logo from './Logo';
import './index.css';

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <div className='main-nav-bar'>
      <div className='main-nav-bar__home'>
        <Logo />
      </div>
      <div className='main-nav-bar__links'>
        {isLoaded && (
          <ProfileButton user={sessionUser}/>
        )}
      </div>
    </div>
  )
}

export default Navigation;
