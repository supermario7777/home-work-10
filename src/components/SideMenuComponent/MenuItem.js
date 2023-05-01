import React from 'react'

export default function MenuItem({item}) {
    return (
        <div className='home-elem'>
            <div className='home-svg'>
                {item.icon}
            </div>
            <p>{item.name}</p>
        </div>
    )
}
