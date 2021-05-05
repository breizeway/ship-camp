import React from 'react'
import { useLocation, Redirect } from 'react-router-dom'


const UserRedirect = () => {
    const username = useLocation().pathname.split('/')[2]
    return <Redirect to={`/u/${username}/trips`} />
}


export default UserRedirect
