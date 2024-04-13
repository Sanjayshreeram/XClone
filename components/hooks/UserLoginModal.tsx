import React from 'react'
import { create } from 'zustand'

interface UserLoginModalState {
    isOpen:boolean;
    onopen:()=>void;
    onclose:()=>void;
    
}
export const UserLoginModal= create<UserLoginModalState>((set)=>({

  isOpen:true,
  onopen:()=>set({isOpen:true}),
  onclose:()=>set({isOpen:false}),

}))
//this hook is used to open and close the modal

    

 