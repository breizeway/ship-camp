import React from 'react'
import { useHistory } from 'react-router-dom'

import './PageNotFound.css'


const PageNotFound = () => {
    const history = useHistory();

    return (
        <div className='page-not-found'>
            <h1>404</h1>
            <h2>Page not found</h2>
            <div onClick={() => history.go(-1)}>Go Back</div>
        </div>
    )
}


export default PageNotFound
