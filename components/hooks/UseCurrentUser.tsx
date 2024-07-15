import useSWR from "swr";

import {fetcher} from '@/libs/fetcher'



export const usecurrentUser= ()=>{
    // console.log('called');

    const {data,error,isLoading,mutate}=  useSWR('/api/current',fetcher);
    return {
        data,
        error,
        isLoading,
        mutate
    }
}

