import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials";
// import { signInEmailPassword } from "src/auth/actions/auth-actions";
// import { z } from 'zod';

export const authOptions: NextAuthOptions = {
    providers: [
        // CredentialsProvider({
        //     name: "Credentials",
        //     credentials: {
        //         email: { label: "Email", type: "email", placeholder: "user@gmail.com" },
        //         password: { label: "Password", type: "password" }
        //     },
        //     async authorize(credentials) {
        //         // const parsedCredentials = z
        //         // .object({ email: z.string().email(), password: z.string().min(6) })  //z.string().includes(string);   z.string().includes("tuna", { message: "Must include tuna" });
        //         // .safeParse(credentials);

        //         // if ( !parsedCredentials.success ) return null;
        //         // const { email, password } = parsedCredentials.data;
            

        //         const user = await signInEmailPassword(credentials!.email, credentials!.password)
        //             .then(response => {
        //                 return response?.data.data
        //             })
        //             .catch(error => {
        //                 console.error(error);
        //             });
        //         if (user) return user
        //         return null
        //     }
        // }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID ?? "",
            clientSecret: process.env.GOOGLE_SECRET ?? "",
        }),
     
    ],
    callbacks: {
        async session({ session, token }) {
            session.user = token as any;
            return session;
        },
    },
}

const handle = NextAuth(authOptions);
export { handle as GET, handle as POST }

