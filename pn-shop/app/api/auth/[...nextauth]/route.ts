import clientPromise from '@/lib/mongodb'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import NextAuth, { Account, Session } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import DiscordProvider from 'next-auth/providers/discord'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import TwitterProvider from 'next-auth/providers/twitter'

const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      allowDangerousEmailAccountLinking: true,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      allowDangerousEmailAccountLinking: true,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID as string,
      clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
      allowDangerousEmailAccountLinking: true,
      version: '2.0',
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  session: {
    strategy: 'jwt' as const,
  },
  secret: process.env.NEXTAUTH_SECRET as string,
  callbacks: {
    async jwt({
      token,
      account,
      profile,
    }: {
      token: JWT
      account?: Account | null
      profile?: unknown | null
    }) {
      console.log(await account)
      if (account && profile) {
        if (account.provider === 'google') {
          token.picture = profile.picture || null
        } else if (account.provider === 'discord') {
          console.log(profile)
          const discordProfile = profile as {
            image_url: string | null | undefined
            id: string
            avatar: string | null
          }
          token.picture = discordProfile.image_url
        } else if (account.provider === 'twitter') {
          token.picture = profile.profile_image_url || null
        } else if (account.provider === 'github') {
          token.picture = profile.avatar_url || null
        }
      }

      return token
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      session.user = session.user || {}
      session.user.image = token.picture || ''
      return session
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }

