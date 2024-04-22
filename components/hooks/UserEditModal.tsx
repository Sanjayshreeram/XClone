import React from 'react'
import { create } from 'zustand'

interface UserEditModalProps {
    isOpen:boolean;
    onopen:()=>void;
    onclose:()=>void;
    
}
export const UserEditModal= create<UserEditModalProps>((set)=>({

  isOpen:false,
  onopen:()=>set({isOpen:true}),
  onclose:()=>set({isOpen:false}),

}))
//this hook is used to open and close the modal

    

 