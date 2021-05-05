import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Redirect } from 'react-router-dom'

import './User.css'
import * as userDataActions from '../../store/users'
import * as userActions from '../../store/components/user'
import UserCard from '../UserCard'


const User = () => {
    const dispatch = useDispatch()
    const { username } = useParams()

    const rendered = {
        val: useSelector(state => state.components.User.rendered.has(username)),
        set: () => dispatch(userActions.setRendered(username))
    }

    const user = {
        val: useSelector(state => state.users.all[username]),
        set: () => dispatch(userDataActions.runSetSpot(username)),
    }

    if (!rendered.val) {
        (async () => {
            await dispatch(userDataActions.runSetSpot(username))
            rendered.set()
        })()
    }

    if (!rendered.val) return null

    if (!user.val?.id) return <Redirect to='/' />

    return (
        <div className='user'>
            <UserCard user={user} />
        </div>
    )
}


export default User
