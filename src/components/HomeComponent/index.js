import NewTweet from './NewTweet'
import TweetsList from './TweetsList'
import './index.css'
import React from 'react'

export default function Home() {
  return (    
    <div className='home'>
        <p className='home-p'>Home</p>
        <NewTweet/>
        <TweetsList/>
    </div>  
  )
}
