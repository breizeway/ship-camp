import React from 'react'
import { useLocation, Redirect } from 'react-router-dom'


const UserRedirect = () => {
    const username = useLocation().pathname.split('/')[2]
    console.log('   :::USERNAME:::   ', username);

    return <Redirect to={`/u/${username}`} />
}


export default UserRedirect
