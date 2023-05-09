import React from 'react'
import { COMMENTS, LIKES, RETWEETS, SHARE } from '../images'

export default function Tweet(tweet) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', borderBottom: '2px solid whitesmoke', fontSize: '12px'}}>
            <p>You might like! <span style={{color: 'blue'}}>See more</span></p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                <img src={tweet.img} style={{ width: 50, height: 50, borderRadius: 50 }} />
                <div>
                    <p>{tweet.authorName} <span>{tweet.authorUserName}</span></p>
                    <p>{tweet.content.length > 200 ? tweet.content.slice(0, 200) + '...' : tweet.content.length }</p>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', width: '80%' }}>
                <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                    <div style={{width: 20, height: 20}}>{COMMENTS}</div>
                    <p>{tweet.replies}</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                    <div style={{width: 20, height: 20}}>{RETWEETS}</div>
                    <p>{tweet.retweets}</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                    <div style={{width: 20, height: 20}}>{LIKES}</div>
                    <p>{tweet.likes}</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                    <div style={{width: 20, height: 20}}>{SHARE}</div>
                </div>
            </div>
        </div>
    )
}
