import axios from "axios"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  // Configure one or more authentication providers

  session: {
    strategy: "jwt",
  },

  providers: [
    // ...add providers here
    CredentialsProvider({
      async authorize(credentials, req) {
        const { email, password } = credentials
        const url = process.env.NEXT_PUBLIC_API_ROOT_URL

        try {
          const { data } = await axios.post(url + "/auth/login", {
            email,
            password,
          })

          if (data.status === "error") {
            throw new Error(data.message)
          }
          const { user, tokens } = data

          if (user) {
            return { ...user, ...tokens }
          }
          return null
        } catch (error) {
          console.log(error)
          throw new Error(error.message)
        }
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.data = user
      }
      return token
    },
    async session({ session, token }) {
      session.user = token.data // token is the return from the jwt above
      return session
    },
  },

  pages: {
    signIn: "/auth",
    signOut: "/",
  },
}

export default NextAuth(authOptions)
