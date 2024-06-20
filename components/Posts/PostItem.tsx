import { useRouter } from 'next/router';
import React, { useCallback, useMemo } from 'react'
impor UserLoginModal
import { usecurrentUser } from '../hooks/UseCurrentUser';
import { UserLoginModal } from '../hooks/UserLoginModal';
import { formatDistanceStrict, formatDistanceToNowStrict } from 'date-fns';

interface  PostItemProps {

    data:Record<string,any>;
    userId?:string
}

const PostItem:React.FC<PostItemProps> = ({data,userId}) => {

    //data is user data array 
    const router=useRouter();
    const loginModal=UserLoginModal();

    const {data:currentUser}=usecurrentUser();

    const goToUser=useCallback((event:any)=>{
        event.stopPropagation();        //stop propgation will prevent from going to post page

         router.push(`/user/${data.user.id}`)                             

    },[router,data.user.id])


    const goTopost=useCallback((event:any)=>{
        event.stopPropagation();        //stop propgation will prevent from going to post page

         router.push(`/post/${data.id}`)                             

    }
    ,[router,data.id])

    const onLike=useCallback(async (event:any)=>{   
        event.stopPropagation();
        loginModal.onopen();
        

    }
    ,[loginModal]);

    const createdAt=useMemo(()=>{
        if(!data?.createdAt)
            return null;

        return  formatDistanceToNowStrict(new Date(data.createdAt))


    },[data?.createdAt])





  return (
   <>

   
   </>
  )
}

export default PostItem