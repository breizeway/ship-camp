import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Redirect, Switch, Route } from 'react-router-dom'

import './User.css'
import * as userDataActions from '../../store/users'
import * as userActions from '../../store/components/user'
import UserCard from '../UserCard'
import ViewBar from '../ViewBar'
import UserRedirect from '../UserRedirect'
import UserReviews from '../UserReviews'
import UserTrips from '../UserTrips'


const User = () => {
    const dispatch = useDispatch()
    let { username } = useParams()
    username = username.toLowerCase()

    const rendered = {
        val: useSelector(state => state.components.User.rendered.has(username)),
        set: () => dispatch(userActions.setRendered(username))
    }

    const user = {
        val: useSelector(state => state.users.all[username]),
        set: () => dispatch(userDataActions.runSetUser(username)),
    }
    console.log('   :::USER:::   ', user.val);

    useEffect(async () => {
        await user.set()
        rendered.set()
    }, [])

    const views = {
        trips: 'Trips',
        reviews: 'Reviews',
    }

    if (!rendered.val) return null

    if (!user.val?.id) return <Redirect to='/' />

    const className = 'user'

    return (
        <div className={className}>
            <div>
                <UserCard user={user} addClass={className} />
            </div>
            <div className='user__content'>
                <ViewBar fragmentIndex={3} views={views} addClass={className} />
                <Switch>
                    <Route path='/u/:username/trips'>
                        <UserTrips trips={user.val?.Bookings}/>
                    </Route>
                    <Route path='/u/:username/reviews'>
                        <UserReviews />
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
