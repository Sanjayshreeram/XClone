import React, { useCallback } from 'react'
import { UserRegitserModal } from './hooks/UserRegisterModal'
import { UserLoginModal } from './hooks/UserLoginModal';
import { usecurrentUser } from './hooks/UseCurrentUser';
import { UsePosts } from './hooks/UsePosts';
import toast from 'react-hot-toast';
import { tr } from 'date-fns/locale';
import axios from 'axios';
import Button from './Button';
import { Avatar } from './Avatar';
interface FromProps {

    placeholder: string,
    isComment?: boolean,
    postId?: string

}
const From:React.FC<FromProps> = ({placeholder,isComment,postId}) => {
    const registerModal=UserRegitserModal();
    const loginModal=UserLoginModal();

    const {data:currentUser}=usecurrentUser();
    const {mutate:mutatePost}=UsePosts(postId);

    const [body,setBody]=React.useState("");
    const [isLoading,setIsLoading]=React.useState(false);
    const onSubmit=useCallback(async ()=>{
      try{
        setIsLoading(true);
        await axios.post(`/api/posts`,{body});
        toast.success('Tweet successfull');
        setBody('');
        mutatePost();


      }
      catch(error)
      {
        toast.error('Something went wrong ')

      }
      finally{
        setIsLoading(false);
      }

    },[body,mutatePost])

  return (


    <div className='border-b-[1px]  border-neutral-800 px-5 py-2'>
      {
        currentUser ?(
          <div className='flex flex-row gap-4 '>
            <div>
              <Avatar userId={currentUser?.id}/>
              </div>
              <div className='w-full'>
                <textarea value={body} disabled={isLoading} onChange={(e)=>setBody(e.target.value)} className='disabled:opacity-80 peer resize-none mt-3 w-full bg-black ring-0 outline-none text-[20px] placeholder-neutral-500 text-white' placeholder={placeholder}>

                </textarea>
                <hr className='transition opacity-0 peer-focus:opacity-100 h-[1px] w-full border-neutral-500'>
                </hr>
                <div className='mt-4 flex flex-row justify-end'>
                  <Button label='Tweet' disabled={isLoading || !body} onClick={onSubmit} />
                  </div>
                </div>
            </div>
       

        )
        :(
          <div className='py-8'>
          <h1 className='text-white text-2xl text-center mb-4 font-bold'>
            Welcome to twitter
  
          </h1>
          <div className='flex flex-row items-center justify-center gap-4'>
              <Button label='Login' onClick={loginModal.onopen}/>
  
              <Button label='Register' onClick={registerModal.onopen} secondary/>
          </div>
  
        </div>

        )
      }

  
    </div>
  )
}

export default From