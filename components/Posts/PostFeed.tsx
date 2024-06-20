import React from 'react'
import { UsePosts } from '../hooks/UsePosts'
import PostItem from './PostItem'


interface PostFeedProps {
    userId?:string,

    
    


    
}

export const PostFeed:React.FC<PostFeedProps> = ({userId}) => {
  const {data:posts=[]}=UsePosts(userId);
  return (
   <>
   {

    posts.map((post:Record<string,any>)=>(
      <PostItem userId={userId} key={post.id} data={post}  />
 

    ))
   }
   
   </>
  )
}
