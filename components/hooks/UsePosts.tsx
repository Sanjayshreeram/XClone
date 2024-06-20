import useSWR from "swr";

import {fetcher} from '@/libs/fetcher'



export const UsePosts= (userId?:string)=>{
    //generate post based on userid and also all public post if no user id is provided
    const url=userId?`/api/posts?userId=${userId}` : `/api/posts`

    const {data,error,isLoading,mutate}=  useSWR(url,fetcher);
    return {
        data,
        error,
        isLoading,
        mutate
    }
}

  