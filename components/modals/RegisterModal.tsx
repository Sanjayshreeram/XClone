import React, { useCallback, useState } from 'react'
import { UserRegitserModal } from '../hooks/UserRegisterModal';
import { UserLoginModal } from '../hooks/UserLoginModal';
import { Input } from '../input';
import {Modal} from '@/components/Modal'

const RegitserModal = () => {
    const registermodal=UserRegitserModal();
    const loginmodal=UserLoginModal();
    const [name,setName]=useState(''); //this is the state for the name of the user
    const [username,setUsername]=useState(''); //this is the state for the username of the user
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [isLoading,setIsLoading]=useState(false);

    const onToggle=useCallback(()=>{
        if(isLoading)
            return;
        registermodal.onclose();
        loginmodal.onopen();
    }
    ,[registermodal,loginmodal,isLoading])


    const onsubmit =useCallback(async()=>{
        try
        {
            setIsLoading(true);
            //todo register and login
            registermodal.onclose();




        }
        catch(error)
        {
            console.log(error)

        }
        finally{
            setIsLoading(false)
        }

    },[registermodal])

    const Bodycontent=(
      
            <div className='flex flex-col gap-4 '>
            <Input placeholder='Email' onChange={(e)=>setEmail(e.target.value)} value={email} disabled={isLoading}/>
            <Input placeholder='Name' onChange={(e)=>setName(e.target.value)} value={name} disabled={isLoading}/>
            <Input placeholder='Username' onChange={(e)=>setUsername(e.target.value)} value={username} disabled={isLoading}/>
            <Input placeholder='Password' onChange={(e)=>setPassword(e.target.value)} value={password} disabled={isLoading}/>
        </div>

        

    )

    const footercontent=(

        <div className='text-neutral-400 text-center mt-4 '>
            <p>
                Already have an account ?
                <span onClick={onToggle}  className='text-neutral-200 hover:underline'>Sign in</span>
            </p>

        </div>
    )
       
       
    
  return (
    <Modal disabled={isLoading} isOpen={registermodal.isOpen} title="Create a Account" actionLabel="Register" onClose={registermodal.onclose} onSubmit={onsubmit} body={Bodycontent} footer={footercontent}/>
  )
}
//when i click close it gets hidden bcoz of the onclose function which triggers the set function to set the isopen to false then the modal is hidden and how does isopen affect the visibility of the modal is 
export default RegitserModal