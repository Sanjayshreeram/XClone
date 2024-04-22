import { use, useCallback, useEffect } from "react";
import { usecurrentUser } from "../hooks/UseCurrentUser";
import { useUser } from "../hooks/useUser";
import { UserEditModal } from "../hooks/UserEditModal";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const Editmodal = () => {   

    const {data:currentUser}=usecurrentUser();
    const {mutate:mutateFetchUser}=useUser(currentUser?.id);
    const editmodal=UserEditModal();

   
    const [coverImage,setCoverImage]=useState('');
    const [name,setName]=useState('');
    const [username,setUsername]=useState('');
    const [bio,setBio]=useState('');


     useEffect(()=>{
        if(currentUser)
        {
            setName(currentUser.name);
            setUsername(currentUser.username);
            setBio(currentUser.bio);
          
            setCoverImage(currentUser.coverImage);
        }

     },[currentUser])

     const [isLoading,setIsLoading]=useState(false);

    const onsubmit=useCallback(async ()=>{
        try {
            setIsLoading(true);

            await axios.patch('/api/Edit',{
                name,
                username,
                bio,
                coverImage

            }

            )


        }
        catch(error)
        {  toast.error('An error occured');
           

        }
        finally {
            setIsLoading(false);
        }

    },[])

    return (
        <div>
            {currentUser?.id}
        </div>
    )
}
