import { useRouter } from 'next/router';
import React, { useCallback, useMemo } from 'react'

import { usecurrentUser } from '../hooks/UseCurrentUser';
import { UserLoginModal } from '../hooks/UserLoginModal';
import { formatDistanceStrict, formatDistanceToNowStrict } from 'date-fns';
import { Avatar } from '../Avatar';
import { AiOutlineHeart, AiOutlineMessage } from 'react-icons/ai';

interface  PostItemProps {

    data:Record<string,any>;
    userId?:string
}

const PostItem:React.FC<PostItemProps> = ({data,userId}) => {
    console.log("data us ",data)

    //data is user data array 
    const router=useRouter();
    const loginModal=UserLoginModal();

    const {data:currentUser}=usecurrentUser();

    const goToUser=useCallback((event:any)=>{
        event.stopPropagation();        //stop propgation will prevent from going to post page

         router.push(`/user/${data?.user?.id}`)                             

    },[router,data?.user?.id])


    const goTopost=useCallback((event:any)=>{
        event.stopPropagation();        //stop propgation will prevent from going to post page

         router.push(`/posts/${data?.id}`)                             

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
   <div onClick={goTopost} className='border-b-[1px] border-neutral-800 p-5 cursor-pointer hover-bg-neutarl-900 transition'>
     <div className='flex flex-row items-start gap-3 '>
        <Avatar userId={data?.user?.id}/>
        <div>
            <div className='flex flex-row  items-center  gap-2'>
                <p className='font-semibold text-white cursor-pointer hover:underline' onClick={goToUser}>
                    {data.user?.body}    
                </p>
                <span className=' text-neutral-500 md:block hidden'>
                    @{data.user?.username}
                </span>
                <span className='text-neutral-500 text-sm'>
                    {createdAt} ago
                </span>

            </div>
            <div className='text-white mt-1'>
                {data.body}

            </div>
            <div className='flex flex-row items-center mt-3 gap-10'>

                <div className='flex flex-row items-center text-neutral-500 gap-2 cursor-pointer transition hover:text-sky-500'>
                    <AiOutlineMessage size={20}/>
                  <p>
                    {data.comments?.length || 0}
                    </p>
                </div>
                <div className='flex flex-row items-center text-neutral-500 gap-2 cursor-pointer transition hover:text-red-500' onClick={onLike}>
                    <AiOutlineHeart size={20} />
                  <p>
                    {data.comments?.length || 0}
                    </p>
                </div>
            
                    
            </div>

            </div>
            

     </div>

    </div>

   
   </>
  )
}

export default PostItem