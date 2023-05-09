import MenuItem from './MenuItem'
import { BOOKMARKS_SVG, EXPLORE_SVG, HOME_SVG, MESSAGES_SVG, MORE, NOTIFICATIONS_SVG, PROFILE, TWITTER_BLUE } from './images'
import './index.css'
import React from 'react'

export default function SideMenu() {

  const menu = [
    {
      icon: HOME_SVG,
      name: "Home"
    },
    {
      icon: EXPLORE_SVG,
      name: "Explore"
    },
    {
      icon: NOTIFICATIONS_SVG,
      name: "Notifications"
    },
    {
      icon: MESSAGES_SVG,
      name: "Messages"
    },
    {
      icon: BOOKMARKS_SVG,
      name: "Bookmarks"
    },
    {
      icon: TWITTER_BLUE,
      name: "Twitter Blue"
    },
    {
      icon: PROFILE,
      name: "Profile"
    },
    {
      icon: MORE,
      name: "More"
    },
  ]

  return (
    <div className='side-menu'>
      <img className='logo' src={require("./images/twitter.png")} />
      {menu.map((item, index) => (
        <MenuItem item={item} key={index}/>
      ))}
      <button className='tweet-btn'>Tweet</button>
    </div>
  )
}

