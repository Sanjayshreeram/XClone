import { serverAuth } from '@/libs/serverAuth'
import {NextApiRequest,NextApiResponse} from 'next'
import prisma from '@/libs/prismadb'
import { usecurrentUser } from '@/components/hooks/UseCurrentUser'
import { useUser } from '@/components/hooks/useUser'

export default async function handler(req:NextApiRequest,res:NextApiResponse)
{
   
    if(req.method !=='PATCH')
    {
       
        return res.status(405).json({msg:`Method ${req.method} not allowed`})
    }

    try {

         const currentUser=await serverAuth(req,res);
         
        const {name,username,bio, profileImage,coverImage}= req.body; 
        // console.log('edit file current user is ',{currentUser})
        console.log("bosy is ",req.body)
       


        if(!name || !username)
        {
            return res.status(400).json({msg:'Name and username are required'})
        }
        const  updateduser=await prisma.user.update({
            where:{
               id:currentUser?.currentUser?.id  
            },
            data:{
                name,
                username,
                bio,
                profileImage:profileImage?profileImage:undefined,
                coverImage
                
                
                
            }

        })
        return res.status(200).json(updateduser)


    }
    catch(error)
    {   console.log(error)
        res.status(405).end()

        
    }

}