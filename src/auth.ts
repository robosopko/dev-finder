import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks: {
    // Store the access token in the session for API calls
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Add access token to session for client-side API calls
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
  pages: {
    signIn: "/", // Redirect to home for sign in
  },
});
