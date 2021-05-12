import React from 'react'

import './ProfileImg.css'


const ProfileImg = ({ url, length, userId, username }) => {
    console.log('   :::{ URL, LENGTH, USERID, USERNAME }:::   ', { url, length, userId, username });

    let light = false
    const color = (() => {
        const val = ((1 / userId) * (22/7)).toString().slice(2, 8)
        let sum = 0
        let hex = ['#']

        val.split('').forEach((num, i) => {
            if (i % 2 === 0) sum += parseInt(num)

            const numPlus = parseInt(num) + 1
            const hexNum = Math.floor((numPlus / 10) * 15)

            const hexString = hexNum.toString()
            switch (hexString) {
                case '10':
                    hex.push('A')
                    break;
                case '11':
                    hex.push('B')
                    break;
                case '12':
                    hex.push('C')
                    break;
                case '13':
                    hex.push('D')
                    break;
                case '14':
                    hex.push('E')
                    break;
                    case '15':
                    hex.push('F')
                    break;
                default:
                    hex.push(hexString)
                    break;
            }
        })
        const avg = sum / 3
        if (avg > 4) light = true

        return hex.join('')
    })()

    return url ? (
        <div
            className='profile-img'
            style={{
                width: `${length}px`,
                height: `${length}px`,
                borderRadius: `${length/2}px`,
                backgroundImage: url ? `url(${url})` : null,
                backgroundSize: 'cover',
            }}
        />
    ) : (
        <div
            className='profile-img'
            style={{
                backgroundColor: color,
                width: `${length}px`,
                height: `${length}px`,
                minWidth: `${length}px`,
                minHeight: `${length}px`,
                borderRadius: `${length/2}px`,
                fontSize: `${length * 0.4}px`,
                color: light ? 'black' : 'white',
            }}
        >
            {username.slice(0, 2)}
        </div>
    )
}


export default ProfileImg
