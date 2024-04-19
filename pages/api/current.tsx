import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/libs/serverAuth";
//this file calls serverauth to get and validate user
export default async function handler(req:NextApiRequest,res:NextApiResponse)
{
    if(req.method !='GET')
        {
            return res.status(405).end()
        }

        try{
            const {currentUser}=await serverAuth(req);  //this is being called by swr from usecurrent user 

            return res.status(200).json(currentUser)

        }
        catch(error)
        {
          return res.status(401).end()

        }

}