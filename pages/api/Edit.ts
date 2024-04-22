
import serverAuth from '@/libs/serverAuth'
import {NextApiRequest,NextApiResponse} from 'next'
import prisma from '@/libs/prismadb'
export default async function handler(req:NextApiRequest,res:NextApiResponse)
{

    if(req.method!=='PATCH')
    {
       
        return res.status(405).json({msg:`Method ${req.method} not allowed`})
    }

    try {
        const {currentUser}=await serverAuth(req);
        const {name,username,bio,coverImage}=req.body; 


        if(!name || !username)
        {
            return res.status(400).json({msg:'Name and username are required'})
        }
        const  updateduser=await prisma.user.update({
            where:{
                id:currentUser.id
            },
            data:{
                name,
                username,
                bio,
               
                coverImage
            }

        })
        return res.status(200).json(updateduser)


    }
    catch(error)
    {
        res.status(405).end()

        
    }

}