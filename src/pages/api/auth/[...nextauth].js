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
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email address" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },

      async authorize(credentials, req) {
        const { email, password } = credentials
        const url = process.env.NEXT_PUBLIC_API_ROOT_URL

        const { data } = await axios.post(url + "/auth/login", {
          email,
          password,
        })

        if (data.status === "success") {
          return data.tokens
        } else return null
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token }) {
      session.user = token
      return session
    },
  },

  pages: {
    signIn: "/auth",
    signOut: "/",
  },
}

export default NextAuth(authOptions)
