// libs/serverAuth.ts

import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/authoptionsfile."
import prisma from "./prismadb";

export const serverAuth = async (req: NextApiRequest,res:NextApiResponse) => {
  // console.log('Request body:', req.body);

  // Fetch the session from the server (i.e it validates the cookie)
  const session = await getServerSession(req,res, authOptions);

  // console.log('Session:', session);

  // If there's no session or no email in the session, throw an error
  if (!session?.user?.email) {
    throw new Error('Not signed in user you are');
  }

  // Fetch the current user from the database using the email in the session
  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  // console.log('Current user in serverAuth is:', currentUser);

  // If the user is not found in the database, throw an error
  if (!currentUser) {
    throw new Error('Not signed in error man');
  }

  return {currentUser};
};
