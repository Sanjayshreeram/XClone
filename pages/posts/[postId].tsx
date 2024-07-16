import Header from '@/components/Header';
import { UsePost } from '@/components/hooks/Usepost';
import PostItem from '@/components/Posts/PostItem';
import { useRouter } from 'next/router'
import React from 'react'
import { ClipLoader } from 'react-spinners';

 const Postview = () => {
    const router=useRouter();
    const {postId}=router.query;

    const {data:fetchedPost,isLoading}=UsePost(postId as string);
    console.log(fetchedPost)
  

    if(isLoading || !fetchedPost)
    {
        return (
            <div className='flex justify-center items-center h-full'>

            <ClipLoader color='blue' size={80} />
    
        </div>

        )
    }

    return (<>
    <Header label='Tweet'  showBackArrow/>
    <PostItem  data={fetchedPost} />

    
    </>)
  
}

export default Postview

