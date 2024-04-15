import { Layout } from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {Modal} from "@/components/Modal";
import Loginmodal from "@/components/modals/Loginmodal";
import Registermodal from "@/components/modals/RegisterModal";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  return(

    <>
    {/* <Modal isOpen title="Test modal" actionLabel="Submit" /> */}

    <SessionProvider session={pageProps.session}>
      <Toaster/>
    <Registermodal />
    <Loginmodal />
      <Layout>
      <Component {...pageProps} />
    </Layout>
    </SessionProvider>
    


    </>
  
  )
  
  
  
  
}

//the component is from the page that is being rendered for example index.tsx
//page props are the props that are being passed to the page component
//this component is passed to the layout component as a child