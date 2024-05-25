import React from "react";
import Header from "../components/Header";
import Form from "@/components/From"
export default function Home() {
  return (
   <>
   <Header label="HOME" showBackArrow />
   <Form placeholder="What's happening"/>
   </>
  );
}
