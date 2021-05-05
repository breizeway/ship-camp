import React from 'react'
import { useLocation } from 'react-router-dom'

import './MainContent.css'


const MainContent = props => {
    const pathname = useLocation().pathname
    const isHome = pathname === '/'
    console.log('   :::ISHOME:::   ', isHome);

    return (
        <div
            style={{
                maxWidth: !isHome && '100%',
                padding: !isHome && '0 30px',
                backgroundColor: !isHome && 'white',
            }}
            className='main-content'
        >{props.children}</div>
    )
}


export default MainContent
