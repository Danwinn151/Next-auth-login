import type {NextAuthOptions} from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"

export const options: NextAuthOptions = {
    providers:[
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string
        }),
        
     CredentialsProvider({
      name: "credentials",
       credentials:{
        username:{
            label: "Username",
            type: "text",
            placeholder: 'your-cool-username'
        },
        password: {
            label: "Password",
            type: "password",
            placeholder: "your-password"
        }
       },
       async authorize(credentials){
          // this is where you need to retrieve user data
          // to verify with documents
          //Docs
          const user = {id: "42", name: "Dave", password: "nextauth"}
          if(credentials?.username === user.name && credentials?.password === user?.password){
             return user
          }
          else {
            return null
          }
       }
    })
    ],
    
}