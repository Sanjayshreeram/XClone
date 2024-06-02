import React from "react";
import Header from "../components/Header";
import Form from "@/components/From"
import { PostFeed } from "@/components/Posts/PostFeed";
export default function Home() {
  return (
   <>
   <Header label="HOME" showBackArrow />
   <Form placeholder="What's happening"/>
   <PostFeed/>
   </>
  );
}
