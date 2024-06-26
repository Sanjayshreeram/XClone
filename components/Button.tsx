import React from 'react'

interface ButtonProps {
    label:string,
    secondary?:boolean,
    fullWdith?:boolean,
    large?:boolean,
    onClick?:()=>void,
    disabled?:boolean,
    outline?:boolean,


}

const Button:React.FC<ButtonProps> = ({label,secondary,fullWdith,large,onClick,disabled,outline}) => {
  return ( 
    <button onClick={onClick} disabled={disabled} className={`disabled:opacity-70 disabled:cursor-not-allowed  rounded-full font-semibold hover:opacity-80 transition border-2 p-2  ${fullWdith?'w-full':'w-auto'} ${secondary ?'bg-white':'bg-sky-500'} ${secondary ?'text-black':'text-white'} ${secondary?'border-black':'border-sky-500'} ${large?'text-xl':'text-md'} ${outline?'bg-transparent':''} ${outline?'border-white':''} ${outline?'text-white':''}`}>
    {label}
    </button>
  )
}

export default Button