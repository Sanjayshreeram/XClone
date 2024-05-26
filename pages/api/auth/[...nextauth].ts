import NextAuth from "next-auth"
import { authOptions } from "@/app/authoptionsfile.";

const handler = NextAuth(authOptions);
export default handler;