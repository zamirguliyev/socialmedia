import React, { useEffect, useState } from 'react'
import './Posts.css'
import { useDispatch,useSelector } from 'react-redux'
import Post from '../Post/Post'
import { getTimelinePosts } from '../../actions/postAction'

const Posts = () => {

  const reduxId = localStorage.getItem("id");
  const dispatch = useDispatch() 
  //const {user}=useSelector((state)=>state.authReducer.authData)
  const {posts,loading} = useSelector((state)=>state.postReducer)

  useState(() => {
   dispatch(getTimelinePosts(reduxId))
  },[]);

  return (
    <div className="Posts">
        {loading
          ? "Fetching Posts..." 
          : posts?.map((post,id)=>{
            return <Post data={post} id={id}/>
        })}
    </div>
  )
}

export default Posts;

