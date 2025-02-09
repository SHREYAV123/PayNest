import GoogleProvider from "next-auth/providers/google";
import db from "@repo/db/client";
import { AuthType } from "@prisma/client"; // ✅ Added to correctly use Prisma enums
import type { NextAuthOptions } from "next-auth"; // ✅ Explicitly typing authOptions

export const authOptions: NextAuthOptions = { // ✅ Added explicit type for better safety
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user, account }) { // ✅ Changed function signature to match NextAuth
      console.log("hi signin");

      if (!user?.email || !account?.provider) { // ✅ Added null checks for user.email and account.provider
        return false;
      }

      await db.merchant.upsert({
        where: { email: user.email },
        create: {
          email: user.email,
          name: user.name || "", // ✅ Ensuring user.name is not undefined
          auth_type: account.provider === "google" ? AuthType.Google : AuthType.Github, // ✅ Using Prisma enum
        },
        update: {
          name: user.name || "", // ✅ Ensuring user.name is not undefined
          auth_type: account.provider === "google" ? AuthType.Google : AuthType.Github, // ✅ Using Prisma enum
        },
        select: { id: true },
      });

      return true;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || "secret",
};
