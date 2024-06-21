import { serverAuth } from '@/libs/serverAuth';
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/libs/prismadb'
import { id } from 'date-fns/locale';


export default async  function  handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method!=='POST' && req.method!=='DELETE')
        return res.status(400).end();


    try{
        const {userId}=req.body;

        const {currentUser}=await serverAuth(req,res);

        if(!userId || typeof userId !== 'string')
            {
                throw new Error('INVALID ID');
            }

            const user=await prisma?.user.findUnique({

                where:{
                    id:userId
                }
            })
            if(!user)
                throw new Error("INVALID ID")

            let updatedFollowIds=[...(user.followingIds || [])];

            if(req.method==='POST')
                {
                    updatedFollowIds.push(userId)

                }

            if(req.method==='DELETE')
             {  updatedFollowIds=updatedFollowIds.filter((s)=>(
                 s!=userId
            
               ))}

               const updatedUser=await prisma.user.update({

                where:{
                    id:currentUser.id
                },
                data:{
                    followingIds:updatedFollowIds
                }

               })

               return res.status(200).json(updatedUser);

}
    catch(error)
    {
        console.log(error);
        return res.status(400).end();

    }



}