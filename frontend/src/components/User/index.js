import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Redirect, Switch, Route } from 'react-router-dom'

import './User.css'
import * as userDataActions from '../../store/users'
import * as userActions from '../../store/components/user'
import UserCard from '../UserCard'
import ViewBar from '../ViewBar'
import UserRedirect from '../UserRedirect'


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

    const views = {
        trips: 'Trips',
        saves: 'Saves',
        reviews: 'Reviews',
    }

    if (!rendered.val) return null

    if (!user.val?.id) return <Redirect to='/' />

    const className = 'user'

    return (
        <div className={className}>
            <UserCard user={user} addClass={className} />
            <div className='user__content'>
                <ViewBar fragmentIndex={3} views={views} addClass={className} />
                <Switch>
                    <Route path='/u/:username/trips'>
                        <div>trips</div>
                    </Route>
                    <Route path='/u/:username/saves'>
                        <div>saves</div>
                    </Route>
                    <Route path='/u/:username/reviews'>
                        <div>reviews</div>
                    </Route>
                    <Route path='/u/:username/*'>
                        <UserRedirect />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}


export default User
