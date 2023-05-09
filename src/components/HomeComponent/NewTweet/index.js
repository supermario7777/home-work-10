import React from 'react'
import { KZ_IMG } from '../images'
import './index.css'

export default function NewTweet() {
  return (
    <div className='new-tweet'>
      <img className='kz-img' src={KZ_IMG} />
      <input placeholder="What's happening?"/>
    </div>
  )
}
