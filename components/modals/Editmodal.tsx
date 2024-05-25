"use client"
import {  useCallback, useEffect } from "react";
import { usecurrentUser } from "../hooks/UseCurrentUser";
import { useUser } from "../hooks/useUser";
import { UserEditModal } from "../hooks/UserEditModal";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Modal } from "../Modal";
import { Input } from "../input";

export const Editmodal = () => {   

    console.log('Editmodal')

    const {data:currentUser}=usecurrentUser();
    const {mutate:mutateFetchUser}=useUser(currentUser?.id);
    const editmodal=UserEditModal();
    console.log('edit model user ',currentUser)

   
    const [coverImage,setCoverImage]=useState<string|null>(null);
    const [name,setName]=useState('');
    const [username,setUsername]=useState('');
    const [bio,setBio]=useState('');


     useEffect(()=>{
        if(currentUser)
        {
            setName(currentUser?.name);
            setUsername(currentUser?.username);
            setBio(currentUser?.bio);
          
            // setCoverImage(currentUser?.coverImage);
        }

     },[currentUser?.name,currentUser?.username,currentUser?.bio])

     const [isLoading,setIsLoading]=useState(false);

    const onsubmit=useCallback(async ()=>{
        try {
           
            setIsLoading(true);
            await axios.patch('/api/edit',{
                name,
                username,
                bio,
                

            }

            )
            mutateFetchUser();
            toast.success('Updated')

            editmodal.onclose();
          
            



        }
        catch(error)
        {  toast.error('An error occured');
        console.log(error);
           

        }
        finally {
            setIsLoading(false);
        }

    },[bio,name,username,coverImage,mutateFetchUser,editmodal])

    const bodycontent=(
        <div className="flex flex-col gap-4">
            <Input placeholder="Name" onChange={(e)=>setName(e.target.value)} value={name} disabled={isLoading} />
            <Input placeholder="Username" onChange={(e)=>setUsername(e.target.value)} value={username} disabled={isLoading} />
            <Input placeholder="Bio" onChange={(e)=>setBio(e.target.value)} value={bio} disabled={isLoading} />

        </div>
    )

    return (
        <>

        <Modal disabled={isLoading} isOpen={editmodal.isOpen} title="Edit your Profile" actionLabel="Save" onClose={editmodal.onclose} onSubmit={onsubmit} body={bodycontent}/>
        </>
    )
}
