import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
export default NextAuth({
  
  providers: [
    Providers.Google({
      clientId: process.env.REACT_APP_GOOGLE_ID,
      clientSecret: process.env.REACT_APP_GOOGLE_SECRET,
      authorizationUrl:
        ' https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
      // authorization: {
      //     params: {
      //       prompt: "consent",
      //       access_type: "offline",
      //       response_type: "code",
      //       scope: "phone https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code ",
      //     }
      //   }
    }),
  ],
  
  jwt: {
    encryption: true,
  },
  secret: process.env.SECRET,
  callbacks: {
    async jwt(token, account) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken;

      }
      return token;
    },
    redirect: async (url, _baseUrl) => {
      if (url === '/profile') {
        return Promise.resolve('/');
      }
      return Promise.resolve('/');
    },
  },
});
