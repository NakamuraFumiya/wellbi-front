import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, SECRET } = process.env

if (!SECRET) throw new Error('You must provide SECRET env var.');
if (!GOOGLE_CLIENT_ID) throw new Error('You must provide GOOGLE_ID env var.');
if (!GOOGLE_CLIENT_SECRET) throw new Error('You must provide GOOGLE_SECRET env var.');

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET
        })
        // ...add more providers here
    ],
    secret: SECRET,
}
export default NextAuth(authOptions)