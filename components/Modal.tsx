import React from 'react'


interface ModalProps {
 isOpen:boolean;
   
    onClose:()=>void;
    onSubmit:()=>void;
    title?:string;
    body?:React.ReactElement;
    footer?:React.ReactElement;
    actionLabel:string;
    disabled?:boolean;

}

export const Modal:React.FC<ModalProps> = () => {
  return (
    <div>Modal</div>
  )
}
