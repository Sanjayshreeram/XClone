import React from 'react'
import { create } from 'zustand'

interface UserRegitserModalState {
    isOpen:boolean;
    onopen:()=>void;
    onclose:()=>void;
    
}
export const UserRegitserModal= create<UserRegitserModalState>((set)=>({

  isOpen:true,
  onopen:()=>set({isOpen:true}),
  onclose:()=>set({isOpen:false}),

}))
//this hook is used to open and close the modal

    

 