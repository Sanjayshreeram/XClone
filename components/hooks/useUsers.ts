import useSWR from "swr";

import {fetcher} from '@/libs/fetcher'



export const useUsers= ()=>{
    console.log('called');

    const {data,error,isLoading,mutate}=  useSWR('/api/users',fetcher);
    return {
        data,
        error,
        isLoading,
        mutate
    }
}

