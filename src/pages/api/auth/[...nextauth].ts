import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  providers: [
    // Add your authentication providers here
    // Example:
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
  ],
  pages: {
    signIn: '/auth/signin',
    // error: '/auth/error',
    // signOut: '/auth/signout',
  },
  callbacks: {
    async session({ session, token, user }) {
      return session;
    },
    async jwt({ token, user, account, profile }) {
      return token;
    },
  },
};

export default NextAuth(authOptions); 