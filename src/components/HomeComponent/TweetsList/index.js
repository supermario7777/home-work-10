import React from 'react'
import './index.css'
import { KZ_IMG, PRF_IMG_1, PRF_IMG_2, PRF_IMG_3 } from '../images'
import Tweet from './tweet'

export default function TweetsList() {

  const tweets = [
    {
      authorName: 'Free KZ today',
      authorUserName: '@kz',
      img: PRF_IMG_1,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      replies: 210,
      retweets: 14003, 
      likes: 566
    }, 
    {
      authorName: 'nFactoral',
      authorUserName: '@nFactorial',
      img: PRF_IMG_2,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      replies: 12,
      retweets: 23423, 
      likes: 123
    }, 
    {
      authorName: 'WinLine',
      authorUserName: '@bet',
      img: PRF_IMG_3,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna sit amet purus gravida quis. Sed cras ornare arcu dui vivamus arcu felis bibendum. Eu facilisis sed odio morbi quis. Ac ut consequat semper viverra. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Facilisis leo vel fringilla est ullamcorper eget. Hendrerit gravida rutrum quisque non tellus. Nam libero justo laoreet sit amet. Tellus orci ac auctor augue mauris augue. In massa tempor nec feugiat nisl pretium fusce id. Facilisis sed odio morbi quis. Enim diam vulputate ut pharetra. Ac ut consequat semper viverra. Morbi tempus iaculis urna id volutpat lacus laoreet non. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Quis hendrerit dolor magna eget est lorem ipsum. Arcu non sodales neque sodales ut etiam.',
      replies: 345,
      retweets: 32423, 
      likes: 3453
    }
  ]

  return tweets.map((tweet, index)=><Tweet  {...tweet} key={index} />)
}
