import useSWR from "swr";

import {fetcher} from '@/libs/fetcher'



export const usecurrentUser=()=>{

    const {data,error,isLoading,mutate}=useSWR('/api/current',fetcher);
    return {
        data,
        error,
        isLoading,
        mutate
    }
}

