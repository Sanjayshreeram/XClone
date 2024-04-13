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
    <div>input</div>
  )
}
