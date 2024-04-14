import { NextApiRequest, NextApiResponse } from "next";
import prisma from '../../libs/prismadb';
import bcrypt from 'bcrypt';


export default async function handler(req: NextApiRequest, res: any) {  
      if(req.method !== 'POST'){
        return res.status(405).json({message:'Method not allowed'})
      }

      try{
        const {email, password,username,name} = req.body;

        const hashedPassword = await bcrypt.hash(password,12);
        const user=await prisma.user.create({
            data:{
                email,
                username,
                name,
                hashPassword:hashedPassword
            }
            })
            return res.status(200).json(user)


      }
      catch(error)
      {
         console.log(error)
      }

}