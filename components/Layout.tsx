import { Children } from "react";

 
 interface LayoutProps {
    children: React.ReactNode;

 }
 export const Layout:React.FC<LayoutProps> =({children})=>{

    return (
        <div className="h-screen bg-black">
            <div className="container h-full mx-auto xl:px-30 max-w-6xl ">

             <div className="grid grid-cols-4 h-full">

                <div className="col col-span-3 lg:col-span-2 border-x-[1px] border-neutral-50">
                {children}

                </div>
           

                </div>   
            

            </div>

           

        </div>
    ) 
}

//this is a layout component that wraps around the children of the page which is the component that is being rendered
//all the pages in 