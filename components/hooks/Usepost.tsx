import useSWR from "swr";

import {fetcher} from '@/libs/fetcher'



export const UsePost= (postId?:string)=>{
    //generate post based on postId and also all public post if no user id is provided
    const url=postId?`/api/posts?postId=${postId}` : null

    const {data,error,isLoading,mutate}=  useSWR(url,fetcher);
    return {
        data,
        error,
        isLoading,
        mutate
    }
}



  