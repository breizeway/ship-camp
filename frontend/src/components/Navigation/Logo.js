import { NavLink } from 'react-router-dom';

import './Logo.css'

const Logo = () => {
  return (
    <NavLink exact to='/'style={{ textDecoration: 'none' }}>
      <div className='logo'>
        <div className='logo-text logo-text__start' >SHIPC</div>
        <div className='logo-image' />
        <div className='logo-text logo-text__end'>MP</div>
      </div>
    </NavLink>
  )
}

export default Logo;
