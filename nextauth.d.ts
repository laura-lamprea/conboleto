// nextauth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";


interface IUser extends DefaultUser {

}

declare module 'next-auth' {
  interface Session {
    user: DefaultSession['user'] & {
      id: string;
      picture: string;
    };
  }
}

// declare module "next-auth/jwt" {
//   interface JWT extends IUser {}
// }