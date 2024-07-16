import { serverAuth } from "@/libs/serverAuth";
import { NextApiRequest,NextApiResponse } from "next"
import prisma from '@/libs/prismadb'

export default async function handler(req:NextApiRequest,res:NextApiResponse) {

   if(req.method!=='POST' && req.method !=='DELETE')
   {
    return res.status(405).end();
   }

   try{
    const {postId}=req.body;
    const currentuser=await serverAuth(req,res);

    if(!postId || typeof postId !=='string')
    {
        throw new Error('INVALID ID');
    }

    const post=await prisma.post.findUnique({

        where:{
            id:postId
        }

    });

    if(!post)
    {
        throw new Error('INVALID ID');
    }

    let updatedLikeIds=[...(post.likedIds) ||[]];

    if(req.method=='POST')
    {
           updatedLikeIds.push(currentuser.currentUser.id);
    }

    if(req.method=='DELETE')
    {
        updatedLikeIds=updatedLikeIds.filter((likeid)=>likeid !=currentuser.currentUser.id)
    }
   

    const updatedpost=await prisma.post.update({

        where:{
            id:postId
        },
        data:{
            likedIds:updatedLikeIds
        }

    })


    return res.status(200).json(updatedpost);




   }

   catch(error)
   {
    console.log(error);
    return res.status(400).end();

   }


}