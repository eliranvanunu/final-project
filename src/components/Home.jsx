import React from 'react'
import 'video-react/dist/video-react.css';
import { Player } from 'video-react';
import User from './User'

export default function Home() {


  return (
    <div  className='contain'>
      <div className='home'>
         <h1>דף הבית</h1>
      </div>
      <div>
      <Player>
      <source src="imeges/video.mp4"/>
    </Player>
      </div>
      <div className='link'><a href='/login'>כניסת לקוחות</a></div>
      <div className='link'><a href='/sign-up'>הרשמה</a></div>
     
    </div>
    
  )
}
