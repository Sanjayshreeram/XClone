import { NextApiRequest, NextApiResponse } from "next";
import { serverAuth } from "@/libs/serverAuth";
//this file calls serverauth to get and validate user
export default async function handler(req:NextApiRequest,res:NextApiResponse)
{
      
    if(req.method !='GET')
        {
            return res.status(405).end()
        }

        console.log('current api body',req.body)

        try{
            const currentUser=await serverAuth(req,res);
            //this is being called by swr from usecurrent user 

            return res.status(200).json(currentUser?.currentUser)

        }
        catch(error)
        {
          return res.status(401).end()

        }

}