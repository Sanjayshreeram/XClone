import useSWR from "swr";

import {fetcher} from '@/libs/fetcher'



export const useUser= (userId:string)=>{
    console.log('called');

    const {data,error,isLoading,mutate}=  useSWR(`api/users/${userId}`,fetcher);
    return {
        data,
        error,
        isLoading,
        mutate
    }
}

