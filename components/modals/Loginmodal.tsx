import React, { useCallback, useState } from 'react'
import { UserLoginModal } from '../hooks/UserLoginModal'
import { Input } from '../input';
import {Modal} from '@/components/Modal'
import { UserRegitserModal } from '../hooks/UserRegisterModal';

const Loginmodal = () => {
    const loginmodal=UserLoginModal();
    const registermodal=UserRegitserModal();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [isLoading,setIsLoading]=useState(false);
    const onToggle=useCallback(()=>{
        if(isLoading)
            return;
        loginmodal.onclose();
        registermodal.onopen();
       
    }
    ,[registermodal,loginmodal,isLoading])

    const onsubmit =useCallback(async()=>{
        try
        {
            setIsLoading(true);
            loginmodal.onclose();

            setIsLoading(false);


        }
        catch(error)
        {
            console.log(error)

        }
        finally{
            setIsLoading(false)
        }

    },[loginmodal])

    const Bodycontent=(
      
            <div className='flex flex-col gap-4 '>
            <Input placeholder='Email' onChange={(e)=>setEmail(e.target.value)} value={email} disabled={isLoading}/>
            <Input placeholder='Email' onChange={(e)=>setPassword(e.target.value)} value={password} disabled={isLoading}/>
        </div>

        

    )
    const footercontent=(

        <div className='text-neutral-400 text-center mt-4 '>
            <p>
                Don't Have a Account?
                <span onClick={onToggle}  className='text-neutral-200 hover:underline'>Sign in</span>
            </p>

        </div>
    )
       
       
       
    
  return (
    <Modal disabled={isLoading} isOpen={loginmodal.isOpen} title="Login" actionLabel="sign-in" onClose={loginmodal.onclose} onSubmit={onsubmit} body={Bodycontent} footer={footercontent}/>
  )
}
//when i click close it gets hidden bcoz of the onclose function which triggers the set function to set the isopen to false then the modal is hidden and how does isopen affect the visibility of the modal is 
export default Loginmodal