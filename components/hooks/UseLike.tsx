import React from 'react'
import { usecurrentUser } from './UseCurrentUser'
import { UsePost } from './Usepost';
import { UsePosts } from './UsePosts';

export const UseLike = ({postId,userId}:{postId:string,userId?:string}) => {

    const {data:currentuser}=usecurrentUser();
    const {data:fetchedPost,mutate:mutateFetchedpost}=UsePost(postId);

    const {mutate:mutateFetchedPost}=UsePosts(userId);
    


  return (
    <div>UseLike</div>
  )
}
