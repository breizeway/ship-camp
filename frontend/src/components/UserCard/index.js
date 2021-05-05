import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import './UserCard.css'
import ProfileImg from '../ProfileImg'
import { monthName } from '../../services/dates'


const UserCard = ({ addClass }) => {
    const { username } = useParams()

    const user = useSelector(state => state.users.all[username])

    const userCreatedDate = new Date(user.createdAt)

    return (
        <div className={`user-card ${addClass}`}>
            <div className='user-card__pic-name'>
                <ProfileImg
                    url={user.profileImageUrl}
                    length='90'
                    userId={user.id}
                    username={user.username}
                />
                <div>{user.firstName}&nbsp;{user.lastName[0]}.</div>
            </div>
            <div>Shipcamper since {`${monthName(userCreatedDate.getMonth()).slice(0,3)} ${userCreatedDate.getFullYear()}`}</div>
        </div>
    )
}


export default UserCard
