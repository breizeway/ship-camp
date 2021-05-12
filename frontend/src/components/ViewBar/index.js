import React from 'react'
import { useLocation, NavLink } from 'react-router-dom'

import './ViewBar.css'


const ViewBar = ({ views, fragmentIndex, addClass }) => {
    const pathname = useLocation().pathname
    const splitPath = pathname.split('/')

    return (
        <div className={`view-bar ${addClass}`}>
            {Object.keys(views).map(key => (
                <NavLink
                    to={splitPath.slice(0, fragmentIndex).concat(key).join('/')}
                    key={key}
                    className='view-bar__header'
                >
                    {views[key]}
                </NavLink>
            ))}
        </div>
    )
}


export default ViewBar
