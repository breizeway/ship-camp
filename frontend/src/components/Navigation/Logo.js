import { NavLink, useLocation } from 'react-router-dom';

import './Logo.css'

const Logo = () => {

  const isHome = useLocation().pathname === '/';

  return (
    <NavLink exact to='/'style={{ textDecoration: 'none' }}>
      <div className='logo'>
        <div className='logo-text logo-text__start' >SHIPC</div>
        <div className={`logo-image ${isHome ? '' : 'navigation__icon-inner-color'}`} />
        <div className='logo-text logo-text__end'>MP</div>
      </div>
    </NavLink>
  )
}

export default Logo;
