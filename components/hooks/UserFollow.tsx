import React, { useCallback, useMemo } from 'react'
import { usecurrentUser } from './UseCurrentUser'
import { useUser } from './useUser';
import { UserLoginModal } from './UserLoginModal';
import toast from 'react-hot-toast';
import axios from 'axios';

const UserFollow = (userId:string) => {

    const {data:currentUser,mutate:mutateCurrentUser}=usecurrentUser();

    const {mutate:mutateFetchUser}=useUser(userId);

    const loginmodal=UserLoginModal();

    const isFollowing=useMemo(()=>{
        const list=currentUser?.followingIds || [];
        return list.includes(userId);

 },[userId,currentUser?.followingIds])

     const toggleFollow=useCallback(async()=>{
        if(!currentUser)
            return loginmodal.onopen();

        try{
            let request;
            if(isFollowing)
                {
                    request=()=>axios.delete('/api/follow',{data:{userId}});


                }
                else
                {
                    request=()=>axios.post('/api/follow',{
                      userId
                    })

                }
                await request();
                mutateCurrentUser();
                mutateFetchUser();
                toast.success(isFollowing?'Unfollowed':'Followed');


            

        }
        catch(error)
        {
            toast.error('Something went wrong ')

        }



     },[currentUser,isFollowing,userId,mutateCurrentUser,mutateFetchUser,loginmodal])




  return {
    isFollowing,
    toggleFollow

  }
  
}

export default UserFollow;1