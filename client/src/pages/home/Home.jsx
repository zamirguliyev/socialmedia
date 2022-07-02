import React from 'react'
import PostSide from '../../components/PostSide/PostSide.jsx'
import RideSide from '../../components/RightSide/RideSide.jsx'
import ProfileSide from '../../components/ProfileSide/ProfileSide.jsx'
import './Home.css'

const Home = () => {
  return (
    <div className="Home">
        <ProfileSide />
        <PostSide />
        <RideSide />
    </div>
  )
}

export default Home