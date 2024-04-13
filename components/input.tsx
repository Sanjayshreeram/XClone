import React from 'react'
 interface InputProps {
    
    placeholder?:string,
    type?:string,
    disabled?:boolean,
    value:string,
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void   //WHY HERE ALONE NOT SIMPLE VOID BECOZ IT IS A FUNCTION THAT TAKES AN EVENT AS ARGUMENT
 }
export const Input:React.FC<InputProps> = ({placeholder,value,type,disabled,onChange}) => {
  return (
    <input disabled={disabled} onChange={onChange} value={value} type={type} placeholder={placeholder} className='w-full p-4 text-lg bg-black border-2 border-neutral-800 rounded-md outline-none text-white foucs:border-sky-500 focus:border-2 disabled:bg-neutral-900 disabled:opacity-70 disabled:cursor-not-allowed transition' 
    />
  )
}
