import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import { IconType } from 'react-icons'

interface SidebarItemProps {

    label:string,
    href:string,
    icon:IconType,
    onclick?:()=>void




}

const SidebarItem:React.FC<SidebarItemProps> = ({label,href,icon:Icon,onclick}) => {
  const router=useRouter();
  const handleclick=useCallback(()=>{
      if(onclick){
       return   onclick()
      }
      href && router.push(href)

  },[router,onclick,href])
  return (
    <div onClick={handleclick} className='flex flex-row items-center'>

        <div className='relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden'>
          <Icon size={28} color="white"/>
        </div>
         <div className='relative hidden lg:flex items-row gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer'>
         <Icon size={28} color="white"/>
         <p className='hidden lg:block text-white text-xl'>
         {label}

         </p>
        
         </div>



    </div>
  )
}

export default SidebarItem