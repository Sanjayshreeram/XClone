import { use, useEffect } from "react";
import { usecurrentUser } from "../hooks/UseCurrentUser";
import { useUser } from "../hooks/useUser";
import { UserEditModal } from "../hooks/UserEditModal";
import { useState } from "react";

const Editmodal = () => {   

    const {data:currentUser}=usecurrentUser();
    const {mutate:mutateFetchUser}=useUser(currentUser?.id);
    const editmodal=UserEditModal();

    const [profileImage,setProfileImage]=useState('');
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
            setProfileImage(currentUser.profileImage);
            setCoverImage(currentUser.coverImage);
        }

     },[])

    return (
        <div>
            {currentUser?.id}
        </div>
    )
}
