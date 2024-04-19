import React from 'react'
import { BsBellFill, BsHouseFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import SidebarLogo from './SidebarLogo'
import { BiLogOut } from 'react-icons/bi'
import SidebarItem from './SidebarItem'
import SidebarTweetbtn from './SidebarTweetbtn'
import { usecurrentUser } from '../hooks/UseCurrentUser'
import { signOut } from 'next-auth/react'
const Sidebar = () => {

    const {data}=usecurrentUser();
    console.log({'userdata':data})

    const items=[

        {
            label:'Home',
            href:'/',
            icon:BsHouseFill

        },
        {
            label:'Notifications',
            href:'/notifications',
            icon:BsBellFill

        },
        {
            label:'Profile',
            href:'/users/123',
            icon:FaUser
        },
       
    ]
  return (
    <div className='col-span-1 h-full pr-4 md:pr-6'>
        <div className='flex flex-col items-end'>
            <div className='space-y-2 lg:w-[230px]'>
                <SidebarLogo/>

                {
                    items.map((item,index)=>(
                        <SidebarItem key={item.href} href={item.href} label={item.label} icon={item.icon}/>


                    ))
                }

          {        
           data?.currentUser && <SidebarItem href='/logout' label='Logout' icon={BiLogOut} onclick={()=>signOut()}/>
           }
            
             <SidebarTweetbtn/>
            

            </div>

            </div>


    </div>
  )
}

export default Sidebar