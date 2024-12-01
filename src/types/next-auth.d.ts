import { Session } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module 'next-auth' {
  interface JWT {
    id: string
    name: string
    rol: {
      id: string,
      Nombre_rol: string
    }
  }
  interface Session {
    user: {
      id: string,
      name: string,
      email: string,
      image: string,
      emailVerified?: Date,
      rol: {
        id: string,
        Nombre_rol: string
      }
    }
  }
}