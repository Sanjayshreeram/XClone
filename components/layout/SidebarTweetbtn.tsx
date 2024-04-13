import React from 'react';
import { useRouter } from 'next/router';
import { FaFeather } from 'react-icons/fa';
import { UserLoginModal } from '../hooks/UserLoginModal';

const SidebarTweetbtn: React.FC = () => {
  const loginmodal=UserLoginModal();
    const router = useRouter();
    return (
        <div  onClick={()=>loginmodal.onopen()}>
         <div className='mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer'>
       <FaFeather/>
         </div>
         <div className='mt-6 lg:block hidden rounded-full px-4 py-4   bg-sky-500 hover:bg-opacity-80 transition cursor-pointer'>
           <p className='text-center font-semibold text-white text-[20px]'>
            Tweet
           </p>
         </div>
        </div>
    );
};

export default SidebarTweetbtn;